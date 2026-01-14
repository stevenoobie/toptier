import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";
import { registerContactRoutes } from "./contact";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  registerContactRoutes(app);

  // Contact Form
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      res.status(201).json(input);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
