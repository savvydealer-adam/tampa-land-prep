import { type User, type UpsertUser, type LeadSubmission, type InsertLeadSubmission } from "@shared/schema";
import { db } from "./db";
import { users, leadSubmissions } from "@shared/schema";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User operations for Replit Auth
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Lead submission operations
  createLeadSubmission(submission: InsertLeadSubmission): Promise<LeadSubmission>;
  updateLeadSubmissionEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void>;
  getAllLeadSubmissions(limit?: number): Promise<LeadSubmission[]>;
}

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  async createLeadSubmission(submission: InsertLeadSubmission): Promise<LeadSubmission> {
    const [newSubmission] = await db.insert(leadSubmissions).values(submission).returning();
    return newSubmission;
  }

  async updateLeadSubmissionEmailStatus(id: string, emailSent: boolean, emailError?: string): Promise<void> {
    await db.update(leadSubmissions)
      .set({ 
        emailSent, 
        emailError: emailError || null 
      })
      .where(eq(leadSubmissions.id, id));
  }

  async getAllLeadSubmissions(limit?: number): Promise<LeadSubmission[]> {
    let query = db.select().from(leadSubmissions).orderBy(desc(leadSubmissions.submittedAt));
    
    if (limit) {
      query = query.limit(limit) as any;
    }
    
    return await query;
  }
}

export const storage = new DbStorage();
