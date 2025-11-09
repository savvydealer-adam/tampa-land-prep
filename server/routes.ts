import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { Resend } from "resend";
import { leadFormSchema, demoBookingSchema } from "@shared/schema";
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

  const httpServer = createServer(app);

  return httpServer;
}
