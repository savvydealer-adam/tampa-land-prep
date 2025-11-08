import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { leadFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
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

  const httpServer = createServer(app);

  return httpServer;
}
