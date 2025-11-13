import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { leadFormSchema, demoBookingSchema, insertBlogPostSchema, insertBlogTagSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { setupAuth, isAuthenticated, isAdmin } from "./replitAuth";
import { verifyRecaptchaToken } from "./recaptcha";
import { getPublishedPosts, getPostBySlug, saveBlogPost, deleteBlogPost as deleteBlogPostFile, getAllTags } from "./blogLoader";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration - hardcoded temporarily due to Replit env var issue
const FROM_EMAIL = "contact@savvydealer.ai";
const TO_EMAIL = "support@savvydealer.com";

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

  // Public config endpoint - serves reCAPTCHA site key (public key is safe to expose)
  app.get('/api/config/recaptcha', (req, res) => {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      return res.status(500).json({ error: "reCAPTCHA not configured" });
    }
    res.json({ siteKey });
  });

  // Auth endpoints
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });
  app.post("/api/lead-form", async (req, res) => {
    let submissionId: string | undefined;
    
    try {
      // Verify reCAPTCHA token first
      const { recaptchaToken, ...formData } = req.body;
      
      if (!recaptchaToken) {
        return res.status(400).json({ 
          error: "reCAPTCHA verification is required" 
        });
      }

      const isValidRecaptcha = await verifyRecaptchaToken(recaptchaToken);
      if (!isValidRecaptcha) {
        console.log("[Lead Form] reCAPTCHA verification failed");
        return res.status(400).json({ 
          error: "reCAPTCHA verification failed. Please try again." 
        });
      }

      console.log("[Lead Form] reCAPTCHA verification successful");

      const validationResult = leadFormSchema.safeParse(formData);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const { name, email, phone, dealership, message } = validationResult.data;

      // Save to database FIRST (before sending email)
      const submission = await storage.createLeadSubmission({
        submissionType: "lead_form",
        name,
        email,
        phone,
        dealership,
        message: message || null,
        demoDate: null,
        demoTime: null,
        emailSent: false,
        emailError: null,
      });
      
      submissionId = submission.id;
      console.log(`[Lead Form] Saved submission ${submissionId} to database`);

      // Now try to send email
      const emailHtml = `
        <h2>New Lead Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Dealership:</strong> ${dealership}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted from Savvy Dealer website</p>
      `;

      try {
        console.log(`[Lead Form] Attempting to send email from: ${FROM_EMAIL} to: ${TO_EMAIL}`);
        
        const result = await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: `New Lead: ${dealership} - ${name}`,
          html: emailHtml,
          replyTo: email,
        });
        
        console.log(`[Lead Form] Resend API response:`, result);
        
        // Update database: email sent successfully
        await storage.updateLeadSubmissionEmailStatus(submissionId, true);
        console.log(`[Lead Form] Email sent successfully for submission ${submissionId}`);
        
      } catch (emailError: any) {
        // Log email error but don't fail the request
        const errorMessage = emailError?.message || "Unknown email error";
        console.error(`[Lead Form] Email failed for submission ${submissionId}:`, errorMessage);
        
        // Update database with error details
        await storage.updateLeadSubmissionEmailStatus(submissionId, false, errorMessage);
        
        // Still return success to user (submission was saved)
        console.log(`[Lead Form] Submission ${submissionId} saved but email failed - admin can view in dashboard`);
      }

      res.json({ 
        success: true, 
        message: "Form submitted successfully" 
      });
      
    } catch (error: any) {
      console.error("[Lead Form] Fatal error:", error);
      
      // If we have a submission ID, try to log the error
      if (submissionId) {
        try {
          await storage.updateLeadSubmissionEmailStatus(submissionId, false, error?.message || "Unknown error");
        } catch (dbError) {
          console.error("[Lead Form] Failed to update error status:", dbError);
        }
      }
      
      res.status(500).json({ 
        error: "Failed to submit form. Please try again." 
      });
    }
  });

  app.post("/api/demo-bookings", async (req, res) => {
    let submissionId: string | undefined;
    
    try {
      // Verify reCAPTCHA token first
      const { recaptchaToken, ...formData } = req.body;
      
      if (!recaptchaToken) {
        return res.status(400).json({ 
          error: "reCAPTCHA verification is required" 
        });
      }

      const isValidRecaptcha = await verifyRecaptchaToken(recaptchaToken);
      if (!isValidRecaptcha) {
        console.log("[Demo Booking] reCAPTCHA verification failed");
        return res.status(400).json({ 
          error: "reCAPTCHA verification failed. Please try again." 
        });
      }

      console.log("[Demo Booking] reCAPTCHA verification successful");

      const validationResult = demoBookingSchema.safeParse(formData);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const { name, email, phone, dealership, date, time } = validationResult.data;

      // Format date for email
      const dateOptions: Record<string, string> = {
        "2026-02-04": "Wednesday, February 4, 2026",
        "2026-02-05": "Thursday, February 5, 2026",
        "2026-02-06": "Friday, February 6, 2026",
      };

      // Save to database FIRST (before sending email)
      const submission = await storage.createLeadSubmission({
        submissionType: "demo_booking",
        name,
        email,
        phone,
        dealership,
        message: null,
        demoDate: date,
        demoTime: time,
        emailSent: false,
        emailError: null,
      });
      
      submissionId = submission.id;
      console.log(`[Demo Booking] Saved submission ${submissionId} to database`);

      // Now try to send email
      const emailHtml = `
        <h2>New NADA Show Demo Booking</h2>
        <p><strong>Booth:</strong> 6760N</p>
        <p><strong>Date:</strong> ${dateOptions[date]}</p>
        <p><strong>Time:</strong> ${time}</p>
        <hr>
        <h3>Attendee Information</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Dealership:</strong> ${dealership}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">Submitted from Savvy Dealer NADA Show page</p>
      `;

      try {
        console.log(`[Demo Booking] Attempting to send email from: ${FROM_EMAIL} to: ${TO_EMAIL}`);
        
        const result = await resend.emails.send({
          from: FROM_EMAIL,
          to: TO_EMAIL,
          subject: `NADA Demo Booking: ${dealership} - ${dateOptions[date]} at ${time}`,
          html: emailHtml,
          replyTo: email,
        });
        
        console.log(`[Demo Booking] Resend API response:`, result);
        
        // Update database: email sent successfully
        await storage.updateLeadSubmissionEmailStatus(submissionId, true);
        console.log(`[Demo Booking] Email sent successfully for submission ${submissionId}`);
        
      } catch (emailError: any) {
        // Log email error but don't fail the request
        const errorMessage = emailError?.message || "Unknown email error";
        console.error(`[Demo Booking] Email failed for submission ${submissionId}:`, errorMessage);
        
        // Update database with error details
        await storage.updateLeadSubmissionEmailStatus(submissionId, false, errorMessage);
        
        // Still return success to user (submission was saved)
        console.log(`[Demo Booking] Submission ${submissionId} saved but email failed - admin can view in dashboard`);
      }

      res.json({ 
        success: true, 
        message: "Demo booked successfully" 
      });
      
    } catch (error: any) {
      console.error("[Demo Booking] Fatal error:", error);
      
      // If we have a submission ID, try to log the error
      if (submissionId) {
        try {
          await storage.updateLeadSubmissionEmailStatus(submissionId, false, error?.message || "Unknown error");
        } catch (dbError) {
          console.error("[Demo Booking] Failed to update error status:", dbError);
        }
      }
      
      res.status(500).json({ 
        error: "Failed to book demo. Please try again." 
      });
    }
  });

  // Admin endpoint to get all lead submissions
  app.get("/api/lead-submissions", isAdmin, async (req, res) => {
    try {
      const limit = req.query.limit ? parseInt(req.query.limit as string) : undefined;
      const submissions = await storage.getAllLeadSubmissions(limit);
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching lead submissions:", error);
      res.status(500).json({ error: "Failed to fetch lead submissions" });
    }
  });

  // ============================================
  // BLOG ROUTES - File-based Markdown system
  // ============================================

  // GET all blog posts with optional filtering
  app.get("/api/blog/posts", async (req: any, res) => {
    try {
      const { category, tag, limit } = req.query;
      
      // Check if user is authenticated AND admin
      const isUserAdmin = req.isAuthenticated() && 
                        req.user?.claims?.email?.toLowerCase().endsWith('@savvydealer.com');
      
      // Get posts from file system (respects admin vs non-admin)
      let posts = getPublishedPosts(isUserAdmin);
      
      // Apply filters
      if (category) {
        posts = posts.filter(p => p.category === category);
      }
      if (tag) {
        posts = posts.filter(p => p.tags.includes(tag as string));
      }
      if (limit) {
        posts = posts.slice(0, parseInt(limit as string));
      }
      
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  // GET single blog post by slug
  app.get("/api/blog/posts/:slug", async (req: any, res) => {
    try {
      const { slug } = req.params;
      
      // Check if user is authenticated AND admin
      const isUserAdmin = req.isAuthenticated() && 
                        req.user?.claims?.email?.toLowerCase().endsWith('@savvydealer.com');
      
      const post = getPostBySlug(slug, isUserAdmin);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // POST create new blog post (admin only)
  app.post("/api/blog/posts", isAdmin, async (req, res) => {
    try {
      const validationResult = insertBlogPostSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ error: validationError.message });
      }

      const post = await saveBlogPost(validationResult.data);
      res.json(post);
    } catch (error) {
      console.error("Error creating blog post:", error);
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  // PATCH update existing blog post (admin only)
  app.patch("/api/blog/posts/:id", isAdmin, async (req, res) => {
    try {
      const { id } = req.params; // id is the slug
      
      // Get existing post
      const existingPost = getPostBySlug(id, true);
      
      if (!existingPost) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      // Merge existing post with updates
      const updatedData = {
        ...existingPost,
        ...req.body,
        slug: id, // Preserve original slug
      };
      
      const post = await saveBlogPost(updatedData);
      res.json(post);
    } catch (error) {
      console.error("Error updating blog post:", error);
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  // DELETE blog post (admin only)
  app.delete("/api/blog/posts/:id", isAdmin, async (req, res) => {
    try {
      const { id } = req.params; // id is the slug
      const success = await deleteBlogPostFile(id);
      
      if (!success) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // GET all tags (extracted from published posts)
  app.get("/api/blog/tags", async (req, res) => {
    try {
      const tags = getAllTags();
      res.json(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      res.status(500).json({ error: "Failed to fetch tags" });
    }
  });

  // Tag management routes are deprecated for file-based system
  // Tags are now managed via frontmatter in Markdown files
  app.post("/api/blog/tags", isAdmin, async (req, res) => {
    res.status(410).json({ 
      error: "Tag management has been deprecated. Tags are now managed in blog post frontmatter." 
    });
  });

  app.post("/api/blog/posts/:postId/tags/:tagId", isAdmin, async (req, res) => {
    res.status(410).json({ 
      error: "Tag management has been deprecated. Tags are now managed in blog post frontmatter." 
    });
  });

  app.delete("/api/blog/posts/:postId/tags/:tagId", isAdmin, async (req, res) => {
    res.status(410).json({ 
      error: "Tag management has been deprecated. Tags are now managed in blog post frontmatter." 
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
