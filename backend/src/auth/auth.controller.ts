import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('api/register')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async register(@Body() body: { name: string; email: string; password: string }) {
    const { name, email, password } = body;
    return this.authService.register(name, email, password);
  }
}
