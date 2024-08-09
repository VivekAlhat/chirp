import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const sites = pgTable("sites", {
  id: serial("id").primaryKey(),
  name: text("name"),
  url: text("url"),
  description: text("description"),
  userId: text("user_id"),
});
