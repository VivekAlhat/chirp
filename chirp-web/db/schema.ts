import { sql } from "drizzle-orm";
import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const sites = pgTable("sites", {
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),
  name: text("name"),
  url: text("url"),
  description: text("description"),
  userId: text("user_id"),
});
