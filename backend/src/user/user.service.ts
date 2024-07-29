import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

@Injectable()
export class UserService {
  async registerUser(name: string, email: string, password: string) {
    try {
      // Hash the password
      const passwordHash = await bcrypt.hash(password, 10);

      // Save user to the database
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          passwordHash,
        },
      });
      

      return newUser;
    } catch (error) {
      console.error('Error creating user:', error);

      // Handle unique constraint violation (e.g., duplicate email)
      if (error.code === 'P2002') {
        throw new InternalServerErrorException('Email already in use');
      }

      throw new InternalServerErrorException('Failed to create user');
    }
  }
}
