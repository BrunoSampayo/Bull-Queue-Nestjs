import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SendEmailModule } from 'src/send-email/send-email.module';

@Module({
  imports:[SendEmailModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
