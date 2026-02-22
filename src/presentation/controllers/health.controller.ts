import { Controller, Get } from '@nestjs/common';

@Controller()
export class HealthController {
  @Get()
  getHello(): string {
    return 'La Casa API';
  }

  @Get('health')
  health(): { status: string } {
    return { status: 'ok' };
  }
}
