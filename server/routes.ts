import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact Form
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const contactRequest = await storage.createContactRequest(input);
      res.status(201).json(contactRequest);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Portfolio Items
  app.get(api.portfolio.list.path, async (req, res) => {
    const items = await storage.getPortfolioItems();
    res.json(items);
  });

  // Seed Data (if empty)
  const existingItems = await storage.getPortfolioItems();
  if (existingItems.length === 0) {
    await storage.createPortfolioItem({
      title: "Midfielder Showcase",
      category: "Midfielder",
      attributes: ["Pace", "Vision", "Finishing"],
      videoUrl: "https://www.youtube.com/embed/placeholder1", // Placeholder
      thumbnailUrl: null
    });
    await storage.createPortfolioItem({
      title: "Striker Highlights",
      category: "Striker",
      attributes: ["Movement", "Finishing", "Positioning"],
      videoUrl: "https://www.youtube.com/embed/placeholder2",
      thumbnailUrl: null
    });
    await storage.createPortfolioItem({
      title: "Defender Analysis",
      category: "Defender",
      attributes: ["Tackling", "Reading", "Distribution"],
      videoUrl: "https://www.youtube.com/embed/placeholder3",
      thumbnailUrl: null
    });
  }

  return httpServer;
}
