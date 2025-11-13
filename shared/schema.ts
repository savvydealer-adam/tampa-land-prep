import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean, integer, jsonb, index } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// User storage table for Replit Auth
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email"),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type UpsertUser = typeof users.$inferInsert;
export type User = typeof users.$inferSelect;

// File-based blog post input schema (for forms - uses Date)
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

// File-based blog post API schema (accepts Date or string, outputs string)
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

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name must be at least 2 characters"),
  message: z.string().optional(),
});

export type LeadFormSubmission = z.infer<typeof leadFormSchema>;

// Lead submissions table for tracking all form submissions
export const leadSubmissions = pgTable("lead_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  submissionType: varchar("submission_type").notNull(), // "lead_form" or "demo_booking"
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  dealership: text("dealership").notNull(),
  message: text("message"),
  demoDate: text("demo_date"), // For demo bookings
  demoTime: text("demo_time"), // For demo bookings
  emailSent: boolean("email_sent").notNull().default(false),
  emailError: text("email_error"),
  submittedAt: timestamp("submitted_at").notNull().defaultNow(),
});

export const insertLeadSubmissionSchema = createInsertSchema(leadSubmissions).omit({
  id: true,
  submittedAt: true,
});

export type InsertLeadSubmission = z.infer<typeof insertLeadSubmissionSchema>;
export type LeadSubmission = typeof leadSubmissions.$inferSelect;

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name is required"),
  date: z.enum(["2026-02-04", "2026-02-05", "2026-02-06"]),
  time: z.string().min(1, "Please select a time"),
});

export type DemoBooking = z.infer<typeof demoBookingSchema>;
