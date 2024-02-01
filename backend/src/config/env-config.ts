import { z } from 'zod';

const envSchema = z.object({
  // HACK: This is not quite right
  PORT: z.string(),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);
