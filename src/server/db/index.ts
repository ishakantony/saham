import { env } from "@/env.mjs";
import { sql } from '@vercel/postgres';
import { drizzle as nodePostgresDrizzle } from "drizzle-orm/node-postgres";
import { drizzle as vercelPostgresDrizzle } from "drizzle-orm/vercel-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = env.NODE_ENV === "production" ? vercelPostgresDrizzle(sql) : nodePostgresDrizzle(pool);
