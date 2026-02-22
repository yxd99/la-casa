/**
 * DTO de respuesta para Example.
 * Desacopla la entidad del dominio de la API.
 */
export class ExampleResponseDto {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;

  constructor(props: { id: string; name: string; createdAt: Date; updatedAt: Date }) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt.toISOString();
    this.updatedAt = props.updatedAt.toISOString();
  }
}
