import { sql } from "drizzle-orm";
import { index, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const analyticsEvents = sqliteTable("analytics_events", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  event: text("event").notNull(),
  label: text("label").notNull().default(""),
  path: text("path").notNull().default("/"),
  referrer: text("referrer").notNull().default("direct"),
  device: text("device").notNull().default("desktop"),
  sessionId: text("session_id").notNull(),
  createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
}, (table) => [
  index("analytics_event_idx").on(table.event),
  index("analytics_created_at_idx").on(table.createdAt),
  index("analytics_session_idx").on(table.sessionId),
]);

