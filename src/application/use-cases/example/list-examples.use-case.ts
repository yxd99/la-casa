import { Inject, Injectable } from '@nestjs/common';
import { ExampleEntity } from '@domain/entities/example.entity';
import type { IExampleRepository } from '@domain/repositories/example.repository.interface';
import { EXAMPLE_REPOSITORY } from '@application/ports/tokens';

@Injectable()
export class ListExamplesUseCase {
  constructor(
    @Inject(EXAMPLE_REPOSITORY)
    private readonly exampleRepository: IExampleRepository,
  ) {}

  async execute(): Promise<ExampleEntity[]> {
    return this.exampleRepository.findAll();
  }
}
