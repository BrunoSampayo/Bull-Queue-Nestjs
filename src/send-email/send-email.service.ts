import { Injectable } from '@nestjs/common';
import { ResendService } from 'nestjs-resend';

type sendEmailHandler = {
  email: string;
  name: string;
};

@Injectable()
export class SendEmailService {
  constructor(private readonly resendService: ResendService) {}

  async handler({ name, email }: sendEmailHandler) {
    await this.resendService.send({
      from: 'contato@brunosampayo.com',
      to: email,
      subject: 'hello world',
      html: `<strong>it works!, ${name} </strong>`,
    });
  }
}
