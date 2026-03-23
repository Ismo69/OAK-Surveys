import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  users, contactEnquiries, surveyRequests,
  type User, type InsertUser,
  type ContactEnquiry, type InsertContactEnquiry,
  type SurveyRequest, type InsertSurveyRequest,
} from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactEnquiry(data: InsertContactEnquiry): Promise<ContactEnquiry>;
  getContactEnquiries(): Promise<ContactEnquiry[]>;
  createSurveyRequest(data: InsertSurveyRequest): Promise<SurveyRequest>;
  getSurveyRequests(): Promise<SurveyRequest[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createContactEnquiry(data: InsertContactEnquiry): Promise<ContactEnquiry> {
    const [enquiry] = await db.insert(contactEnquiries).values(data).returning();
    return enquiry;
  }

  async getContactEnquiries(): Promise<ContactEnquiry[]> {
    return db.select().from(contactEnquiries).orderBy(contactEnquiries.createdAt);
  }

  async createSurveyRequest(data: InsertSurveyRequest): Promise<SurveyRequest> {
    const [request] = await db.insert(surveyRequests).values(data).returning();
    return request;
  }

  async getSurveyRequests(): Promise<SurveyRequest[]> {
    return db.select().from(surveyRequests).orderBy(surveyRequests.createdAt);
  }
}

export const storage = new DatabaseStorage();
