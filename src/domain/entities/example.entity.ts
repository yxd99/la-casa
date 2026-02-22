import { BaseEntity } from '@domain/entities/base.entity';

export interface ExampleEntityProps {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Entidad de ejemplo del dominio.
 * Las entidades son ricas en lógica de negocio cuando aplica.
 */
export class ExampleEntity extends BaseEntity {
  readonly name: string;

  private constructor(props: ExampleEntityProps) {
    super({
      id: props.id,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    });
    this.name = props.name;
  }

  static create(props: Omit<ExampleEntityProps, 'createdAt' | 'updatedAt'>): ExampleEntity {
    const now = new Date();
    return new ExampleEntity({
      ...props,
      createdAt: now,
      updatedAt: now,
    });
  }

  static reconstitute(props: ExampleEntityProps): ExampleEntity {
    return new ExampleEntity(props);
  }
}
