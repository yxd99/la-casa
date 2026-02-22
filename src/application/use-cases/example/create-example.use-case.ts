import { Inject, Injectable } from '@nestjs/common';
import { ExampleEntity } from '@domain/entities/example.entity';
import type { IExampleRepository } from '@domain/repositories/example.repository.interface';
import { EXAMPLE_REPOSITORY } from '@application/ports/tokens';

export interface CreateExampleInput {
  name: string;
}

@Injectable()
export class CreateExampleUseCase {
  constructor(
    @Inject(EXAMPLE_REPOSITORY)
    private readonly exampleRepository: IExampleRepository,
  ) {}

  async execute(input: CreateExampleInput): Promise<ExampleEntity> {
    const entity = ExampleEntity.create({
      id: crypto.randomUUID(),
      name: input.name,
    });
    return this.exampleRepository.save(entity);
  }
}
