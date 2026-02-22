import { ExampleEntity } from '@domain/entities/example.entity';
import { IBaseRepository } from './base.repository.interface';

/**
 * Puerto del repositorio de Example.
 * Extiende el contrato base y puede añadir métodos específicos del agregado.
 */
export interface IExampleRepository extends IBaseRepository<ExampleEntity> {
  findByName(name: string): Promise<ExampleEntity | null>;
}
