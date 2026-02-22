import { config } from 'dotenv';
import * as v from 'valibot';
import { Environment, type Environment as EnvType } from './environment.js';

config();

const portPipe = v.pipe(
  v.optional(v.string(), '3000'),
  v.transform((s) => parseInt(s, 10)),
);

const dbPortPipe = v.pipe(
  v.optional(v.string(), '5432'),
  v.transform((s) => parseInt(s, 10)),
);

const appEnvSchema = v.pipe(
  v.optional(
    v.union([v.literal('dev'), v.literal('test'), v.literal('prod')]),
    'dev',
  ),
  v.transform((s): EnvType => s as EnvType),
);

const envSchema = v.object({
  PORT: portPipe,
  APP_ENV: appEnvSchema,
  // PostgreSQL: host, puerto, usuario, contraseña y nombre de la base
  DB_HOST: v.optional(v.pipe(v.string(), v.minLength(1)), 'localhost'),
  DB_PORT: dbPortPipe,
  DB_USERNAME: v.optional(v.pipe(v.string(), v.minLength(1)), 'postgres'),
  DB_PASSWORD: v.optional(v.string(), ''),
  DB_NAME: v.optional(v.pipe(v.string(), v.minLength(1)), 'la_casa'),
});

function parseEnv() {
  const result = v.safeParse(envSchema, {
    PORT: process.env.PORT,
    APP_ENV: process.env.APP_ENV,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  });
  if (!result.success) {
    const issues = result.issues.map((i) => `${i.path?.join('.') ?? 'root'}: ${i.message}`).join('; ');
    throw new Error(`Invalid environment: ${issues}`);
  }
  return result.output;
}

export const env = parseEnv();
export { Environment };
