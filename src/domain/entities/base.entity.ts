/**
 * Entidad base para todas las entidades del dominio.
 * Define propiedades comunes (id, timestamps).
 */
export abstract class BaseEntity {
  readonly id: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  protected constructor(props: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updatedAt = props.updatedAt;
  }
}
