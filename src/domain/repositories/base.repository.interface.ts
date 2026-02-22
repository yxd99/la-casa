import { BaseEntity } from '@domain/entities/base.entity';

/**
 * Contrato genérico del patrón Repository.
 * La capa de dominio define el puerto; la infraestructura implementa el adaptador.
 */
export interface IBaseRepository<T extends BaseEntity> {
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
  save(entity: T): Promise<T>;
  delete(id: string): Promise<void>;
}
