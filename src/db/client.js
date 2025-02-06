import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema.js';

export const getDB = (env) => {
	return drizzle(process.env.CLOUDFLARE_API_TOKEN, { schema });
};
