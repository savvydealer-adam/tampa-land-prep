import { Resend } from "resend";
import type { LeadFormSubmission, DemoBooking } from "@shared/schema";

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Email configuration from environment variables
const FROM_EMAIL = process.env.FROM_EMAIL || "noreply@yourdomain.com";
const TO_EMAIL = process.env.TO_EMAIL || "contact@yourdomain.com";

export interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Send email notification for lead form submission
 */
export async function sendLeadFormEmail(submission: LeadFormSubmission): Promise<EmailResult> {
  if (!resend) {
    console.warn("[Email] Resend not configured - skipping email");
    return { success: false, error: "Email service not configured" };
  }
  
  try {
    const { name, email, phone, company, message } = submission;
    
    const emailHtml = `
      <h2>New Lead Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      ${message ? `<p><strong>Message:</strong></p><p>${message}</p>` : ''}
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted from website contact form</p>
    `;

    console.log(`[Email] Sending lead notification from ${FROM_EMAIL} to ${TO_EMAIL}`);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Lead: ${company} - ${name}`,
      html: emailHtml,
      replyTo: email,
    });
    
    console.log(`[Email] Lead notification sent successfully:`, result);
    return { success: true };
    
  } catch (error: any) {
    const errorMessage = error?.message || "Unknown email error";
    console.error(`[Email] Failed to send lead notification:`, errorMessage);
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

/**
 * Send email notification for demo booking
 */
export async function sendDemoBookingEmail(booking: DemoBooking): Promise<EmailResult> {
  if (!resend) {
    console.warn("[Email] Resend not configured - skipping email");
    return { success: false, error: "Email service not configured" };
  }
  
  try {
    const { name, email, phone, company, date, time, message } = booking;
    
    const emailHtml = `
      <h2>New Demo Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Preferred Date:</strong> ${date}</p>
      <p><strong>Preferred Time:</strong> ${time}</p>
      ${message ? `<p><strong>Additional Notes:</strong></p><p>${message}</p>` : ''}
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted from website demo booking form</p>
    `;

    console.log(`[Email] Sending demo booking notification from ${FROM_EMAIL} to ${TO_EMAIL}`);
    
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Demo Booking: ${company} - ${name} on ${date}`,
      html: emailHtml,
      replyTo: email,
    });
    
    console.log(`[Email] Demo booking notification sent successfully:`, result);
    return { success: true };
    
  } catch (error: any) {
    const errorMessage = error?.message || "Unknown email error";
    console.error(`[Email] Failed to send demo booking notification:`, errorMessage);
    return { 
      success: false, 
      error: errorMessage 
    };
  }
}

/**
 * Create a new Resend API key (for multi-site management)
 * Requires a master API key with full_access permission
 */
export async function createResendApiKey(name: string): Promise<{ key?: string; error?: string }> {
  try {
    const masterKey = process.env.RESEND_API_KEY;
    
    if (!masterKey) {
      return { error: "RESEND_API_KEY not configured" };
    }

    const response = await fetch("https://api.resend.com/api-keys", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${masterKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        permission: "sending_access", // Limit to sending only
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("[Email] Failed to create API key:", error);
      return { error: `Failed to create API key: ${error}` };
    }

    const data = await response.json() as { id: string; token: string };
    console.log(`[Email] Created new API key: ${name}`);
    
    return { key: data.token };
    
  } catch (error: any) {
    console.error("[Email] Error creating API key:", error);
    return { error: error?.message || "Unknown error" };
  }
}
