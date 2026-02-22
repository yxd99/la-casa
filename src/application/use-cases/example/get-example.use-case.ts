import { Inject, Injectable } from '@nestjs/common';
import { ExampleEntity } from '@domain/entities/example.entity';
import type { IExampleRepository } from '@domain/repositories/example.repository.interface';
import { EXAMPLE_REPOSITORY } from '@application/ports/tokens';

@Injectable()
export class GetExampleUseCase {
  constructor(
    @Inject(EXAMPLE_REPOSITORY)
    private readonly exampleRepository: IExampleRepository,
  ) {}

  async execute(id: string): Promise<ExampleEntity | null> {
    return this.exampleRepository.findById(id);
  }
}
