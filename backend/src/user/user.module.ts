import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { PrismaService } from '../../prisma.service'; // อย่าลืมเปลี่ยนที่อยู่ถ้าไฟล์ PrismaService อยู่ในที่อื่น

@Module({
  controllers: [UserController],
  providers: [PrismaService],
})
export class UserModule {}
