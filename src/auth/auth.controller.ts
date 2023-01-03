import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  login(@Body() params: Auth) {
    return this.authService.authenticate(params);
  }
}
