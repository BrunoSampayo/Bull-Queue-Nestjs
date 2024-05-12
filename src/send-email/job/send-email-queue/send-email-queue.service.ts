import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
type sendEmailQueue = {
    email: string;
    name: string;
  };
@Injectable()
export class SendEmailQueueService {
    constructor(@InjectQueue('SEND_EMAIL_QUEUE') private sendEmailQueue:Queue ){}
// adicionar um novo job a lista send email e enviar name e email como dados
    async execute ({name,email}:sendEmailQueue){
        await this.sendEmailQueue.add('SEND_EMAIL_QUEUE',{name,email})
    }
}
