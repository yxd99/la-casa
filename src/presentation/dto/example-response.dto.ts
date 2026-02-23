import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO de respuesta para Example.
 * Desacopla la entidad del dominio de la API.
 */
export class ExampleResponseDto {
  @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000' })
  id: string;
  @ApiProperty({ example: 'Mi ejemplo' })
  name: string;
  @ApiProperty({ example: '2025-02-22T12:00:00.000Z' })
  createdAt: string;
  @ApiProperty({ example: '2025-02-22T12:00:00.000Z' })
  updatedAt: string;

  constructor(props: { id: string; name: string; createdAt: Date; updatedAt: Date }) {
    this.id = props.id;
    this.name = props.name;
    this.createdAt = props.createdAt.toISOString();
    this.updatedAt = props.updatedAt.toISOString();
  }
}
