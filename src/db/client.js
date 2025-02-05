import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema.js';
import Database from 'better-sqlite3'; // Import better-sqlite3

// Initialize Drizzle ORM with Cloudflare D1
export const createDB = (env) => {
	if (process.env.NODE_ENV === 'development') {
		const sqlite = new Database(process.env.DATABASE_URL.replace('sqlite://', '').replace('file:', ''));
		return drizzle(sqlite, { schema }); // Use correct drizzle method
	} else {
		return drizzle(env.DB, { schema }); // Cloudflare D1 in production
	}
};