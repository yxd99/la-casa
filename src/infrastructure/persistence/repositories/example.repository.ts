import { Injectable } from '@nestjs/common';
import { ExampleEntity } from '@domain/entities/example.entity';
import type { IExampleRepository } from '@domain/repositories/example.repository.interface';

/**
 * Implementación in-memory del repositorio de Example.
 * Sustituir por implementación con TypeORM/Prisma/etc. cuando haya persistencia real.
 */
@Injectable()
export class ExampleRepository implements IExampleRepository {
  private readonly store = new Map<string, ExampleEntity>();

  async findById(id: string): Promise<ExampleEntity | null> {
    return this.store.get(id) ?? null;
  }

  async findAll(): Promise<ExampleEntity[]> {
    return Array.from(this.store.values());
  }

  async findByName(name: string): Promise<ExampleEntity | null> {
    return Array.from(this.store.values()).find((e) => e.name === name) ?? null;
  }

  async save(entity: ExampleEntity): Promise<ExampleEntity> {
    this.store.set(entity.id, entity);
    return entity;
  }

  async delete(id: string): Promise<void> {
    this.store.delete(id);
  }
}
