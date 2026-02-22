import { Module } from '@nestjs/common';
import { EXAMPLE_REPOSITORY } from '@application/ports/tokens';
import { CreateExampleUseCase } from '@application/use-cases/example/create-example.use-case';
import { GetExampleUseCase } from '@application/use-cases/example/get-example.use-case';
import { ListExamplesUseCase } from '@application/use-cases/example/list-examples.use-case';
import { ExampleRepository } from '@infrastructure/persistence/repositories/example.repository';
import { ExampleController } from '@presentation/controllers/example.controller';

@Module({
  controllers: [ExampleController],
  providers: [
    GetExampleUseCase,
    ListExamplesUseCase,
    CreateExampleUseCase,
    {
      provide: EXAMPLE_REPOSITORY,
      useClass: ExampleRepository,
    },
  ],
  exports: [EXAMPLE_REPOSITORY],
})
export class ExampleModule {}
