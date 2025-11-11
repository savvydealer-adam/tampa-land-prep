import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { leadFormSchema, demoBookingSchema, insertBlogPostSchema, insertBlogTagSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { setupAuth, isAuthenticated, isAdmin } from "./replitAuth";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  // Setup authentication
  await setupAuth(app);

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
    try {
      const validationResult = leadFormSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message 
        });
      }

      const { name, email, phone, dealership, message } = validationResult.data;

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

      await resend.emails.send({
        from: "Savvy Dealer <onboarding@resend.dev>",
        to: "support@savvydealer.com",
        subject: `New Lead: ${dealership} - ${name}`,
        html: emailHtml,
        replyTo: email,
      });

      res.json({ 
        success: true, 
        message: "Form submitted successfully" 
      });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ 
        error: "Failed to submit form. Please try again." 
      });
    }
  });

  app.post("/api/demo-bookings", async (req, res) => {
    try {
      const validationResult = demoBookingSchema.safeParse(req.body);
      
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

      await resend.emails.send({
        from: "Savvy Dealer <onboarding@resend.dev>",
        to: "support@savvydealer.com",
        subject: `NADA Demo Booking: ${dealership} - ${dateOptions[date]} at ${time}`,
        html: emailHtml,
        replyTo: email,
      });

      res.json({ 
        success: true, 
        message: "Demo booked successfully" 
      });
    } catch (error) {
      console.error("Error booking demo:", error);
      res.status(500).json({ 
        error: "Failed to book demo. Please try again." 
      });
    }
  });

  app.get("/api/blog/posts", async (req, res) => {
    try {
      const { published, category, tag, limit } = req.query;
      const options = {
        published: published === 'true' ? true : published === 'false' ? false : undefined,
        category: category as string | undefined,
        tag: tag as string | undefined,
        limit: limit ? parseInt(limit as string) : undefined,
      };
      
      const posts = await storage.getAllBlogPosts(options);
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/posts/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      const tags = await storage.getPostTags(post.id);
      res.json({ ...post, tags });
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  app.post("/api/blog/posts", isAdmin, async (req, res) => {
    try {
      const validationResult = insertBlogPostSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ error: validationError.message });
      }

      const post = await storage.createBlogPost(validationResult.data);
      res.json(post);
    } catch (error) {
      console.error("Error creating blog post:", error);
      res.status(500).json({ error: "Failed to create blog post" });
    }
  });

  app.patch("/api/blog/posts/:id", isAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      const post = await storage.updateBlogPost(id, req.body);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error updating blog post:", error);
      res.status(500).json({ error: "Failed to update blog post" });
    }
  });

  app.delete("/api/blog/posts/:id", isAdmin, async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteBlogPost(id);
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting blog post:", error);
      res.status(500).json({ error: "Failed to delete blog post" });
    }
  });

  app.get("/api/blog/tags", async (req, res) => {
    try {
      const tags = await storage.getAllTags();
      res.json(tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
      res.status(500).json({ error: "Failed to fetch tags" });
    }
  });

  app.post("/api/blog/tags", isAdmin, async (req, res) => {
    try {
      const validationResult = insertBlogTagSchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ error: validationError.message });
      }

      const tag = await storage.createTag(validationResult.data);
      res.json(tag);
    } catch (error) {
      console.error("Error creating tag:", error);
      res.status(500).json({ error: "Failed to create tag" });
    }
  });

  app.post("/api/blog/posts/:postId/tags/:tagId", isAdmin, async (req, res) => {
    try {
      const { postId, tagId } = req.params;
      await storage.addTagToPost(postId, tagId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error adding tag to post:", error);
      res.status(500).json({ error: "Failed to add tag to post" });
    }
  });

  app.delete("/api/blog/posts/:postId/tags/:tagId", isAdmin, async (req, res) => {
    try {
      const { postId, tagId } = req.params;
      await storage.removeTagFromPost(postId, tagId);
      res.json({ success: true });
    } catch (error) {
      console.error("Error removing tag from post:", error);
      res.status(500).json({ error: "Failed to remove tag from post" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
