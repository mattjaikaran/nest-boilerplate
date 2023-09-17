import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // GET /protected (require JWT)
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth() // Swagger
  @Get('protected')
  getProtected(@Req() req) {
    return `You are in ${req.user.name}`;
  }
}
