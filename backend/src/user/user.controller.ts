import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    return this.userService.registerUser(name, email, password);
  }

  @Post('signin')
  async signin(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<any> {
    return this.userService.signInUser(email, password);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')  // ลบ 'users/' ออก เพราะมันอยู่ใน Controller decorator แล้ว
  async getUserById(@Param('id') id: string) {
    return this.userService.getUserById(id);
  }
}