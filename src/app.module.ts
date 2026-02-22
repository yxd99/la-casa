import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleModule } from './modules/example/example.module';
import { HealthController } from '@presentation/controllers/health.controller';
import { databaseConfig } from '@infrastructure/config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    ExampleModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
