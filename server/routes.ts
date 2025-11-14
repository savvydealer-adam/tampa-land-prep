import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { leadFormSchema, demoBookingSchema, fileBlogPostSchema, fileBlogPostUpdateSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { verifyRecaptchaToken } from "./recaptcha";
import { sendLeadFormEmail, sendDemoBookingEmail, createResendApiKey } from "./email";
import { getPublishedPosts, getPostBySlug, saveBlogPost, deleteBlogPost as deleteBlogPostFile, getAllTags } from "./blogLoader";
import { ContentExtractor } from "./contentExtractor";
import { generateImportedContent } from "./contentImporter";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // ============================================
  // PUBLIC CONFIG ENDPOINTS
  // ============================================
  
  // Serve reCAPTCHA site key (public key is safe to expose)
  app.get('/api/config/recaptcha', (req, res) => {
    const siteKey = process.env.RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      return res.status(500).json({ error: "reCAPTCHA not configured" });
    }
    res.json({ siteKey });
  });

  // ============================================
  // LEAD FORM ROUTES
  // ============================================
  
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

      // Save to storage FIRST (before sending email)
      const submission = await storage.createLeadSubmission(validationResult.data);
      submissionId = submission.id;
      console.log(`[Lead Form] Saved submission ${submissionId} to storage`);

      // Try to send email notification
      const emailResult = await sendLeadFormEmail(validationResult.data);
      
      if (emailResult.success) {
        await storage.updateLeadSubmissionEmailStatus(submissionId, true);
        console.log(`[Lead Form] Email sent successfully for submission ${submissionId}`);
      } else {
        await storage.updateLeadSubmissionEmailStatus(submissionId, false, emailResult.error);
        console.log(`[Lead Form] Submission ${submissionId} saved but email failed`);
      }

      res.json({ 
        success: true, 
        message: "Form submitted successfully" 
      });
      
    } catch (error: any) {
      console.error("[Lead Form] Fatal error:", error);
      
      if (submissionId) {
        try {
          await storage.updateLeadSubmissionEmailStatus(submissionId, false, error?.message || "Unknown error");
        } catch (storageError) {
          console.error("[Lead Form] Failed to update error status:", storageError);
        }
      }
      
      res.status(500).json({ 
        error: "Failed to submit form. Please try again." 
      });
    }
  });

  // ============================================
  // DEMO BOOKING ROUTES
  // ============================================
  
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

      // Save to storage FIRST (before sending email)
      const booking = await storage.createDemoBooking(validationResult.data);
      submissionId = booking.id;
      console.log(`[Demo Booking] Saved booking ${submissionId} to storage`);

      // Try to send email notification
      const emailResult = await sendDemoBookingEmail(validationResult.data);
      
      if (emailResult.success) {
        await storage.updateDemoBookingEmailStatus(submissionId, true);
        console.log(`[Demo Booking] Email sent successfully for booking ${submissionId}`);
      } else {
        await storage.updateDemoBookingEmailStatus(submissionId, false, emailResult.error);
        console.log(`[Demo Booking] Booking ${submissionId} saved but email failed`);
      }

      res.json({ 
        success: true, 
        message: "Demo booked successfully" 
      });
      
    } catch (error: any) {
      console.error("[Demo Booking] Fatal error:", error);
      
      if (submissionId) {
        try {
          await storage.updateDemoBookingEmailStatus(submissionId, false, error?.message || "Unknown error");
        } catch (storageError) {
          console.error("[Demo Booking] Failed to update error status:", storageError);
        }
      }
      
      res.status(500).json({ 
        error: "Failed to book demo. Please try again." 
      });
    }
  });

  // ============================================
  // EMAIL API KEY MANAGEMENT
  // ============================================
  
  // Create new Resend API key (for multi-site management)
  app.post("/api/email/create-key", async (req, res) => {
    try {
      const { name } = req.body;
      
      if (!name) {
        return res.status(400).json({ error: "API key name is required" });
      }

      const result = await createResendApiKey(name);
      
      if (result.error) {
        return res.status(500).json({ error: result.error });
      }

      res.json({ 
        success: true, 
        apiKey: result.key,
        message: "API key created successfully. Save this key - it won't be shown again." 
      });
      
    } catch (error: any) {
      console.error("[API] Error creating email API key:", error);
      res.status(500).json({ error: "Failed to create API key" });
    }
  });

  // ============================================
  // BLOG ROUTES - File-based Markdown system
  // ============================================

  // GET all blog posts with optional filtering
  app.get("/api/blog/posts", async (req, res) => {
    try {
      const { category, tag, limit } = req.query;
      
      // Get published posts only (no auth system in template)
      let posts = getPublishedPosts(false);
      
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
  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      
      // Get published posts only (no auth system in template)
      const post = getPostBySlug(slug, false);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // GET all available tags
  app.get("/api/blog/tags", async (req, res) => {
    try {
      const tags = getAllTags();
      res.json(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      res.status(500).json({ error: "Failed to fetch tags" });
    }
  });

  // POST create new blog post (public in template - add auth if needed)
  app.post("/api/blog/posts", async (req, res) => {
    try {
      const validationResult = fileBlogPostSchema.safeParse(req.body);
      
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

  // PATCH update existing blog post (public in template - add auth if needed)
  app.patch("/api/blog/posts/:id", async (req, res) => {
    try {
      const { id } = req.params; // id is the slug
      
      const validationResult = fileBlogPostUpdateSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ error: validationError.message });
      }
      
      const existingPost = getPostBySlug(id, true);
      
      if (!existingPost) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      const updatedData = {
        ...existingPost,
        ...validationResult.data,
        slug: id,
      };
      
      const post = await saveBlogPost(updatedData);
      res.json(post);
    } catch (error) {
      console.error("Error updating blog post:", error);
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  // DELETE blog post (public in template - add auth if needed)
  app.delete("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      
      const post = getPostBySlug(slug, true);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      await deleteBlogPostFile(slug);
      
      res.json({ success: true, message: "Blog post deleted successfully" });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  // ============================================
  // CONTENT IMPORT ROUTES
  // ============================================

  // Analyze a domain to preview what can be imported
  app.post("/api/import/analyze", async (req, res) => {
    const extractor = new ContentExtractor();
    
    try {
      const { domain, maxPages } = req.body;
      
      if (!domain) {
        return res.status(400).json({ error: "Domain is required" });
      }

      // Basic domain validation - prevent SSRF
      const urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
      if (!urlPattern.test(domain)) {
        return res.status(400).json({ error: "Invalid domain format" });
      }

      // Prevent localhost/internal network access (RFC1918 private ranges + loopback + IPv6)
      const normalizedDomain = domain.toLowerCase();
      const blockedPatterns = [
        'localhost', '127.', '0.0.0.0', 
        '192.168.', '10.', 
        '172.16.', '172.17.', '172.18.', '172.19.', '172.20.', 
        '172.21.', '172.22.', '172.23.', '172.24.', '172.25.', 
        '172.26.', '172.27.', '172.28.', '172.29.', '172.30.', '172.31.',
        '169.254.', // Link-local
        '[::1]', '[::ffff:', // IPv6 loopback and IPv4-mapped
      ];
      if (blockedPatterns.some(pattern => normalizedDomain.includes(pattern))) {
        return res.status(400).json({ error: "Cannot analyze local or internal network addresses" });
      }

      console.log(`[Import] Analyzing domain: ${domain}`);
      
      const result = await extractor.analyzeDomain(domain, Math.min(maxPages || 20, 50)); // Cap at 50 pages
      
      console.log(`[Import] Found ${result.totalPages} pages (${result.blogPosts.length} blog posts)`);
      
      res.json(result);
    } catch (error: any) {
      console.error("Error analyzing domain:", error);
      res.status(500).json({ 
        error: "Failed to analyze domain", 
        details: error.message 
      });
    } finally {
      await extractor.close();
    }
  });

  // Execute the import - generate files based on analyzed content
  app.post("/api/import/execute", async (req, res) => {
    try {
      const { pages, blogPosts, options } = req.body;
      
      if (!pages && !blogPosts) {
        return res.status(400).json({ error: "No content provided for import" });
      }

      console.log(`[Import] Executing import for ${blogPosts?.length || 0} blog posts and ${pages?.length || 0} pages`);
      
      const result = await generateImportedContent({
        blogPosts: blogPosts || [],
        pages: pages || [],
        options: options || {},
      });
      
      console.log(`[Import] Import completed successfully`);
      
      res.json(result);
    } catch (error: any) {
      console.error("Error executing import:", error);
      res.status(500).json({ 
        error: "Failed to execute import", 
        details: error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
