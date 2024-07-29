import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'; // Update import to match the service

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {} // Ensure this matches the service name

  @Post('signup')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    return this.userService.registerUser(name, email, password); // Ensure function call matches the service
  }
}
