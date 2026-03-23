import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, pgEnum } from "drizzle-orm/pg-core";
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

export const enquiryStatusEnum = pgEnum("enquiry_status", ["new", "read", "replied"]);

export const contactEnquiries = pgTable("contact_enquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  status: enquiryStatusEnum("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactEnquirySchema = createInsertSchema(contactEnquiries).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertContactEnquiry = z.infer<typeof insertContactEnquirySchema>;
export type ContactEnquiry = typeof contactEnquiries.$inferSelect;

export const surveyTypeEnum = pgEnum("survey_type", [
  "land",
  "engineering",
  "topographic",
  "hydrographic",
  "gis",
  "other",
]);

export const surveyRequests = pgTable("survey_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  company: text("company"),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  projectLocation: text("project_location").notNull(),
  surveyType: surveyTypeEnum("survey_type").notNull(),
  description: text("description").notNull(),
  status: enquiryStatusEnum("status").default("new").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertSurveyRequestSchema = createInsertSchema(surveyRequests).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertSurveyRequest = z.infer<typeof insertSurveyRequestSchema>;
export type SurveyRequest = typeof surveyRequests.$inferSelect;
