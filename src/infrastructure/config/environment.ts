/**
 * Ambientes de la aplicación. Usar en lugar de NODE_ENV para tener valores explícitos.
 */
export const Environment = {
  Dev: 'dev',
  Test: 'test',
  Prod: 'prod',
} as const;

export type Environment = (typeof Environment)[keyof typeof Environment];

export const ENVIRONMENTS: readonly Environment[] = [
  Environment.Dev,
  Environment.Test,
  Environment.Prod,
];

export function isProd(env: Environment): boolean {
  return env === Environment.Prod;
}

export function isDev(env: Environment): boolean {
  return env === Environment.Dev;
}

export function isTest(env: Environment): boolean {
  return env === Environment.Test;
}
