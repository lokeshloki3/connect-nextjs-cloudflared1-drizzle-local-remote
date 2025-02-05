import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/db/schema.js',  // Path to your schema file
  out: './src/db/migrations',    // Path for migrations
  driver: 'd1-http',             // Driver for Cloudflare D1
  dialect: 'sqlite',             // Cloudflare D1 uses SQLite internally
  dbCredentials: {
    // url: process.env.DATABASE_URL,  // Cloudflare D1 database URL - Optional for local dev (set automatically in production)
    accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
    databaseId: process.env.CLOUDFLARE_DATABASE_ID,
    token: process.env.CLOUDFLARE_API_TOKEN,
  },
});
