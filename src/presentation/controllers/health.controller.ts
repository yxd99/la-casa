import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('health')
@Controller()
export class HealthController {
  @Get()
  @ApiOperation({ summary: 'Mensaje de bienvenida' })
  @ApiResponse({ status: 200, description: 'Nombre de la API' })
  getHello(): string {
    return 'La Casa API';
  }

  @Get('health')
  @ApiOperation({ summary: 'Estado del servicio' })
  @ApiResponse({ status: 200, description: 'Servicio en funcionamiento' })
  health(): { status: string } {
    return { status: 'ok' };
  }
}
