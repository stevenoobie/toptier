import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  type: text("type").notNull(), // Player, Agent, Academy/Scout
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactRequestSchema = createInsertSchema(
  contactRequests
).omit({
  id: true,
  createdAt: true,
});

export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // Midfielder, Striker, Defender
  attributes: jsonb("attributes").$type<string[]>().notNull(), // e.g. ["Pace", "Vision"]
  videoUrl: text("video_url").notNull(), // Placeholder URL
  thumbnailUrl: text("thumbnail_url"), // Optional thumbnail
});

export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = typeof portfolioItems.$inferInsert;
