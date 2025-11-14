import { type LeadSubmission, type LeadFormSubmission, type DemoBookingSubmission, type DemoBooking } from "@shared/schema";
import { nanoid } from "nanoid";

// Storage interface for lead forms and demo bookings
export interface IStorage {
  // Lead form operations
  createLeadSubmission(submission: LeadFormSubmission): Promise<LeadSubmission>;
  updateLeadSubmissionEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void>;
  getAllLeadSubmissions(): Promise<LeadSubmission[]>;
  
  // Demo booking operations
  createDemoBooking(booking: DemoBooking): Promise<DemoBookingSubmission>;
  updateDemoBookingEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void>;
  getAllDemoBookings(): Promise<DemoBookingSubmission[]>;
}

// In-memory storage implementation (default for template)
export class MemStorage implements IStorage {
  private leadSubmissions: Map<string, LeadSubmission> = new Map();
  private demoBookings: Map<string, DemoBookingSubmission> = new Map();

  async createLeadSubmission(submission: LeadFormSubmission): Promise<LeadSubmission> {
    const leadSubmission: LeadSubmission = {
      ...submission,
      id: nanoid(),
      submittedAt: new Date().toISOString(),
      emailSent: false,
    };
    
    this.leadSubmissions.set(leadSubmission.id, leadSubmission);
    return leadSubmission;
  }

  async updateLeadSubmissionEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void> {
    const submission = this.leadSubmissions.get(id);
    if (submission) {
      submission.emailSent = emailSent;
      if (emailError !== undefined) {
        submission.emailError = emailError;
      }
      this.leadSubmissions.set(id, submission);
    }
  }

  async getAllLeadSubmissions(): Promise<LeadSubmission[]> {
    return Array.from(this.leadSubmissions.values())
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  }

  async createDemoBooking(booking: DemoBooking): Promise<DemoBookingSubmission> {
    const demoBooking: DemoBookingSubmission = {
      ...booking,
      id: nanoid(),
      submittedAt: new Date().toISOString(),
      emailSent: false,
    };
    
    this.demoBookings.set(demoBooking.id, demoBooking);
    return demoBooking;
  }

  async updateDemoBookingEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void> {
    const booking = this.demoBookings.get(id);
    if (booking) {
      booking.emailSent = emailSent;
      if (emailError !== undefined) {
        booking.emailError = emailError;
      }
      this.demoBookings.set(id, booking);
    }
  }

  async getAllDemoBookings(): Promise<DemoBookingSubmission[]> {
    return Array.from(this.demoBookings.values())
      .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  }
}

// Export default storage instance
export const storage = new MemStorage();
