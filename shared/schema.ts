import { sql } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name must be at least 2 characters"),
  message: z.string().optional(),
});

export type LeadFormSubmission = z.infer<typeof leadFormSchema>;

export const demoBookingSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  dealership: z.string().min(2, "Dealership name is required"),
  date: z.enum(["2026-02-04", "2026-02-05", "2026-02-06"]),
  time: z.string().min(1, "Please select a time"),
});

export type DemoBooking = z.infer<typeof demoBookingSchema>;
