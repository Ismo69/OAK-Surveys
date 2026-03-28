import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { storage } from "./storage";
import { insertContactEnquirySchema, insertSurveyRequestSchema } from "@shared/schema";
import { ZodError } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = "info@oaksurveys.com";
const FROM_EMAIL = "notifications@oaksurveys.com";

async function sendContactNotification(data: {
  name: string;
  email: string;
  phone?: string | null;
  subject?: string | null;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: `New Contact Enquiry: ${data.subject || "General Enquiry"} — Oak Surveys Website`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #001E60; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Enquiry</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Submitted via oaksurveys.com</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 120px;">Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #111;"><a href="mailto:${data.email}" style="color: #001E60;">${data.email}</a></td></tr>
              ${data.phone ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #111;">${data.phone}</td></tr>` : ""}
              ${data.subject ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Subject</td><td style="padding: 8px 0; color: #111;">${data.subject}</td></tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-left: 4px solid #D4312A; border-radius: 2px;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</p>
              <p style="margin: 0; color: #111; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f3f4f6; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Oak Surveys &bull; Lagos, Nigeria &bull; +234 803 600 4494</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send contact notification email:", err);
  }
}

async function sendSurveyRequestNotification(data: {
  fullName: string;
  company?: string | null;
  email: string;
  phone: string;
  projectLocation: string;
  surveyType: string;
  description: string;
}) {
  const surveyTypeLabels: Record<string, string> = {
    land: "Land Survey",
    engineering: "Engineering Survey",
    topographic: "Topographic Survey",
    hydrographic: "Hydrographic Survey",
    gis: "GIS / Mapping",
    other: "Other",
  };

  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: data.email,
      subject: `New Survey Request: ${surveyTypeLabels[data.surveyType] || data.surveyType} — ${data.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #001E60; padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px;">New Survey Request</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">Submitted via oaksurveys.com</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e7eb;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px; width: 140px;">Full Name</td><td style="padding: 8px 0; font-weight: 600; color: #111;">${data.fullName}</td></tr>
              ${data.company ? `<tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Company</td><td style="padding: 8px 0; color: #111;">${data.company}</td></tr>` : ""}
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Email</td><td style="padding: 8px 0; color: #111;"><a href="mailto:${data.email}" style="color: #001E60;">${data.email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Phone</td><td style="padding: 8px 0; color: #111;">${data.phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Survey Type</td><td style="padding: 8px 0; color: #111;"><span style="background: #001E60; color: white; padding: 2px 10px; border-radius: 12px; font-size: 13px;">${surveyTypeLabels[data.surveyType] || data.surveyType}</span></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280; font-size: 13px;">Project Location</td><td style="padding: 8px 0; color: #111;">${data.projectLocation}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: white; border-left: 4px solid #D4312A; border-radius: 2px;">
              <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Project Description</p>
              <p style="margin: 0; color: #111; line-height: 1.6; white-space: pre-wrap;">${data.description}</p>
            </div>
          </div>
          <div style="padding: 16px 32px; background: #f3f4f6; text-align: center;">
            <p style="margin: 0; font-size: 12px; color: #9ca3af;">Oak Surveys &bull; Lagos, Nigeria &bull; +234 803 600 4494</p>
          </div>
        </div>
      `,
    });
  } catch (err) {
    console.error("Failed to send survey request notification email:", err);
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactEnquirySchema.parse(req.body);
      const enquiry = await storage.createContactEnquiry(data);
      await sendContactNotification(data);
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
      await sendSurveyRequestNotification(data);
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
