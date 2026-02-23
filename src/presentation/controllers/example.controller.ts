import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateExampleUseCase } from '@application/use-cases/example/create-example.use-case';
import { GetExampleUseCase } from '@application/use-cases/example/get-example.use-case';
import { ListExamplesUseCase } from '@application/use-cases/example/list-examples.use-case';
import { ExampleEntity } from '@domain/entities/example.entity';
import { CreateExampleDto } from '@presentation/dto/create-example.dto';
import { ExampleResponseDto } from '@presentation/dto/example-response.dto';

@ApiTags('examples')
@Controller('examples')
export class ExampleController {
  constructor(
    private readonly getExampleUseCase: GetExampleUseCase,
    private readonly listExamplesUseCase: ListExamplesUseCase,
    private readonly createExampleUseCase: CreateExampleUseCase,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos los examples' })
  @ApiResponse({ status: 200, description: 'Lista de examples', type: [ExampleResponseDto] })
  async list(): Promise<ExampleResponseDto[]> {
    const entities = await this.listExamplesUseCase.execute();
    return entities.map((e) => this.toDto(e));
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un example por ID' })
  @ApiParam({ name: 'id', description: 'UUID del example' })
  @ApiResponse({ status: 200, description: 'Example encontrado', type: ExampleResponseDto })
  @ApiResponse({ status: 404, description: 'Example no encontrado' })
  async getById(@Param('id') id: string): Promise<ExampleResponseDto | null> {
    const entity = await this.getExampleUseCase.execute(id);
    return entity ? this.toDto(entity) : null;
  }

  @Post()
  @ApiOperation({ summary: 'Crear un example' })
  @ApiResponse({ status: 201, description: 'Example creado', type: ExampleResponseDto })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
  async create(@Body() dto: CreateExampleDto): Promise<ExampleResponseDto> {
    const entity = await this.createExampleUseCase.execute({ name: dto.name });
    return this.toDto(entity);
  }

  private toDto(entity: ExampleEntity): ExampleResponseDto {
    return new ExampleResponseDto({
      id: entity.id,
      name: entity.name,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    });
  }
}
