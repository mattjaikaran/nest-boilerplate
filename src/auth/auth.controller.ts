import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { MagicLoginStrategy } from './magiclogin.strategy';
import { PasswordlessLoginDto } from './passwordless-login.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private strategy: MagicLoginStrategy,
  ) {}

  // POST /auth/login (email) -> send magic link
  @Post('login')
  login(
    @Req() req,
    @Res() res,
    @Body(new ValidationPipe()) body: PasswordlessLoginDto,
  ) {
    this.authService.validateUser(body.destination);
    // send magic link
    return this.strategy.send(req, res);
  }
  // GET /auth/login/callback?token=TOKEN -> JWT access token
  @UseGuards(AuthGuard('magiclogin'))
  @Get('login/callback') // callback should point to client side
  callback(@Req() req) {
    // TODO: generate JWT access token
    return this.authService.generateTokens(req.user);
  }
}
