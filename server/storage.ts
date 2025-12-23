import { db } from "./db";
import {
  contactRequests,
  portfolioItems,
  type InsertContactRequest,
  type ContactRequest,
  type PortfolioItem,
  type InsertPortfolioItem
} from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  getPortfolioItems(): Promise<PortfolioItem[]>;
  createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem>;
}

export class DatabaseStorage implements IStorage {
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [newItem] = await db.insert(contactRequests).values(request).returning();
    return newItem;
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return await db.select().from(portfolioItems);
  }

  async createPortfolioItem(item: InsertPortfolioItem): Promise<PortfolioItem> {
    const [newItem] = await db.insert(portfolioItems).values(item).returning();
    return newItem;
  }
}

export const storage = new DatabaseStorage();
