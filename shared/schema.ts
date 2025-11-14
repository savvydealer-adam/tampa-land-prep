import { z } from "zod";

// ============================================================================
// FILE-BASED BLOG POST SCHEMAS
// ============================================================================

// Blog post input schema (for forms - uses Date)
export const fileBlogPostInputSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  excerpt: z.string().min(1, "Excerpt is required"),
  content: z.string().min(1, "Content is required"),
  featuredImage: z.string().optional(),
  author: z.string().min(1, "Author is required"),
  authorRole: z.string().optional(),
  publishedAt: z.date(),
  isPublished: z.boolean().default(true),
  readingTime: z.number().int().positive().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

// Blog post API schema (accepts Date or string, outputs string)
export const fileBlogPostSchema = fileBlogPostInputSchema.extend({
  publishedAt: z.union([z.string(), z.date()]).transform(val => 
    typeof val === 'string' ? val : val.toISOString()
  ),
});

// Partial schema for PATCH updates (all fields optional)
export const fileBlogPostUpdateSchema = fileBlogPostSchema.partial();

export type InsertFileBlogPostInput = z.infer<typeof fileBlogPostInputSchema>;
export type InsertFileBlogPost = z.infer<typeof fileBlogPostSchema>;
export type UpdateFileBlogPost = z.infer<typeof fileBlogPostUpdateSchema>;
export type FileBlogPost = InsertFileBlogPost & { id: string; updatedAt: string };

// ============================================================================
// LEAD FORM SCHEMAS
// ============================================================================

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  message: z.string().optional(),
});

export type LeadFormSubmission = z.infer<typeof leadFormSchema>;

// Lead submission type for storage (includes metadata)
export type LeadSubmission = LeadFormSubmission & {
  id: string;
  submittedAt: string;
  emailSent: boolean;
  emailError?: string;
};

// ============================================================================
// DEMO BOOKING SCHEMAS
// ============================================================================

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().min(2, "Company name is required"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please select a time"),
  message: z.string().optional(),
});

export type DemoBooking = z.infer<typeof demoBookingSchema>;

// Demo booking submission type for storage (includes metadata)
export type DemoBookingSubmission = DemoBooking & {
  id: string;
  submittedAt: string;
  emailSent: boolean;
  emailError?: string;
};
