import { Injectable, InternalServerErrorException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

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
      
      // Remove passwordHash from the returned object
      const { passwordHash: _, ...userWithoutPassword } = newUser;
      return userWithoutPassword;
    } catch (error) {
      console.error('Error creating user:', error);

      // Handle unique constraint violation (e.g., duplicate email)
      if (error.code === 'P2002') {
        throw new InternalServerErrorException('Email already in use');
      }

      throw new InternalServerErrorException('Failed to create user');
    }
  }

  async signInUser(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
  
      if (!isPasswordValid) {
        throw new UnauthorizedException('Invalid credentials');
      }
  
      const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1h' }
      );
  
      return { 
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email
        }
      };
    } catch (error) {
      console.error('Error in signInUser:', error);
      if (error instanceof NotFoundException || error instanceof UnauthorizedException) {
        throw error;
      }
      throw new InternalServerErrorException('An error occurred during sign in');
    }
  }

  async getUserById(id: string) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        // Add other fields you want to return, but exclude sensitive data like passwordHash
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUser(id: string, updateData: Partial<{ name: string; email: string; password: string }>) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new NotFoundException('Invalid user ID');
    }

    const updatePayload: any = { ...updateData };

    if (updateData.password) {
      updatePayload.passwordHash = await bcrypt.hash(updateData.password, 10);
      delete updatePayload.password;
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updatePayload,
        select: {
          id: true,
          name: true,
          email: true,
          // Add other fields you want to return, but exclude sensitive data like passwordHash
        },
      });

      return updatedUser;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw new InternalServerErrorException('Failed to update user');
    }
  }

  async deleteUser(id: string) {
    const userId = parseInt(id, 10);
    if (isNaN(userId)) {
      throw new NotFoundException('Invalid user ID');
    }

    try {
      await prisma.user.delete({
        where: { id: userId },
      });
      return { message: 'User deleted successfully' };
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException('User not found');
      }
      throw new InternalServerErrorException('Failed to delete user');
    }
  }
}