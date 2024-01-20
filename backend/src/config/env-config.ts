import { z } from "zod";

const envSchema = z.object({
  // FIX: This is not right.
  PORT: z.string(),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
