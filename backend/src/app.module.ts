import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module'; // Import UserModule

@Module({
  imports: [UserModule], // Add UserModule to imports
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
