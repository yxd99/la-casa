import { Module } from '@nestjs/common';
import { ExampleModule } from './modules/example/example.module';
import { HealthController } from '@presentation/controllers/health.controller';

@Module({
  imports: [ExampleModule],
  controllers: [HealthController],
})
export class AppModule {}
