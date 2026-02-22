import { config } from 'dotenv';
import * as v from 'valibot';

config();

const envSchema = v.object({
  PORT: v.pipe(
    v.optional(v.string(), '3000'),
    v.transform((s) => parseInt(s, 10)),
  ),
});

function parseEnv() {
  const result = v.safeParse(envSchema, {
    PORT: process.env.PORT,
  });
  if (!result.success) {
    const issues = result.issues.map((i) => `${i.path?.join('.') ?? 'root'}: ${i.message}`).join('; ');
    throw new Error(`Invalid environment: ${issues}`);
  }
  return result.output;
}

export const env = parseEnv();
