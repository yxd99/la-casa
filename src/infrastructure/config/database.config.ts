import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { env } from './env';
import { isProd } from './environment';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USERNAME,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  autoLoadEntities: true,
  synchronize: false,
  logging: !isProd(env.APP_ENV),
};
