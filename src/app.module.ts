import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { UserModule } from './user/user.module';
import { SendEmailModule } from './send-email/send-email.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: '127.0.0.1',
        port: 6379,
      },
    }),
    ConfigModule.forRoot(),
    UserModule,
    SendEmailModule,
  ],
  controllers: [],
  providers: [ BullModule],
})
export class AppModule {}
