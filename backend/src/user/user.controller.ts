import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getUsers() {
    const users = await this.prisma.user.findMany();
    return users; // ตรวจสอบว่ามีการส่งข้อมูลออกมาอย่างถูกต้อง
  }
}