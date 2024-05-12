import { Module } from '@nestjs/common';
import { SendEmailService } from './send-email.service';
import { ResendModule } from 'nestjs-resend';
import { SendEmailQueueService } from './job/send-email-queue/send-email-queue.service';
import { SendEmailConsumerService } from './job/send-email-consumer/send-email-consumer.service';
import { BullModule } from '@nestjs/bull';

@Module({
  providers: [SendEmailService, SendEmailQueueService, SendEmailConsumerService],
  imports:[ResendModule.forRoot({
    apiKey:process.env.RESEND_API_KEY
  }), BullModule.registerQueue({ name: 'SEND_EMAIL_QUEUE' })],
  exports:[SendEmailQueueService]
})
export class SendEmailModule {}
