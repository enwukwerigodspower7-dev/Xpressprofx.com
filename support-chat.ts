import { pgTable, text, boolean, timestamp, uuid } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const supportChatTable = pgTable("support_chat", {
  id: uuid("id").primaryKey().defaultRandom(),
  sessionId: text("session_id").notNull(),
  userId: uuid("user_id"),
  visitorName: text("visitor_name"),
  visitorEmail: text("visitor_email"),
  message: text("message").notNull(),
  fromAdmin: boolean("from_admin").default(false),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const supportChatSessionsTable = pgTable("support_chat_sessions", {
  id: uuid("id").primaryKey().defaultRandom(),
  sessionId: text("session_id").notNull().unique(),
  userId: uuid("user_id"),
  visitorName: text("visitor_name"),
  visitorEmail: text("visitor_email"),
  status: text("status").default("open"),
  lastMessageAt: timestamp("last_message_at").defaultNow(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertSupportChatSchema = createInsertSchema(supportChatTable).omit({ id: true, createdAt: true });
export const insertSupportChatSessionSchema = createInsertSchema(supportChatSessionsTable).omit({ id: true, createdAt: true, lastMessageAt: true });

export type InsertSupportChat = z.infer<typeof insertSupportChatSchema>;
export type SupportChatRow = typeof supportChatTable.$inferSelect;
export type SupportChatSessionRow = typeof supportChatSessionsTable.$inferSelect;
