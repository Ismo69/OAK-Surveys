import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactEnquirySchema, insertSurveyRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactEnquirySchema.parse(req.body);
      const enquiry = await storage.createContactEnquiry(data);
      return res.status(201).json({ success: true, id: enquiry.id });
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: err.errors });
      }
      console.error("Contact enquiry error:", err);
      return res.status(500).json({ success: false, message: "Failed to submit enquiry" });
    }
  });

  app.post("/api/survey-request", async (req, res) => {
    try {
      const data = insertSurveyRequestSchema.parse(req.body);
      const request = await storage.createSurveyRequest(data);
      return res.status(201).json({ success: true, id: request.id });
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: err.errors });
      }
      console.error("Survey request error:", err);
      return res.status(500).json({ success: false, message: "Failed to submit survey request" });
    }
  });

  return httpServer;
}
