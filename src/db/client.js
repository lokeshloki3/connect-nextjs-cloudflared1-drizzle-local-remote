import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema.js";
import Database from "better-sqlite3"; // Import better-sqlite3

// Initialize Drizzle ORM for development (SQLite) and production (Cloudflare D1)
export const createDB = (env) => {
  if (
    typeof process !== "undefined" &&
    process.env.NODE_ENV === "development"
  ) {
    // Local SQLite connection for development
    const sqlite = new Database(
      process.env.DATABASE_URL.replace("sqlite://", "").replace("file:", "")
    );
    return drizzle(sqlite, { schema });
  } else if (env?.DB) {
    // Cloudflare D1 for production
    return drizzle(env.DB, { schema });
  } else {
    throw new Error("No database connection found for the current environment");
  }
};
