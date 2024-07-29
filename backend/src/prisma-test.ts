import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const newUser = await prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        passwordHash: 'securepassword', // เปลี่ยนให้ตรงกับ schema ถ้าใช้ password ให้ใช้ password แทน
      },
    });
    console.log(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
