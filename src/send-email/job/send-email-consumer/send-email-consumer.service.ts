import { OnQueueActive, OnQueueCompleted, OnQueueFailed, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { SendEmailService } from 'src/send-email/send-email.service';
type sendEmailConsumer= {
    email: string;
    name: string;
}

@Processor('SEND_EMAIL_QUEUE')
export class SendEmailConsumerService {
    // Injetar dependencia do serviço de envio de email pois consumer que vai realizar o envio do mesmo
    constructor(private readonly SendEmailService: SendEmailService) {}
// Aqui fica o consumer
// Que nada mais é parte logica que vai ser feita com cada item que entra na fila
// Aqui que fica a "regra de negocio"
    @Process('SEND_EMAIL_QUEUE')
    async execute({data}:Job<sendEmailConsumer>){
        const {name,email} = data
        await this.SendEmailService.handler({name,email})
    }

    @OnQueueActive()
    onActive(job:Job<sendEmailConsumer>){
        console.log(`Job ${job.id} is active`)
    }

    @OnQueueCompleted()
    onCompleted(job:Job<sendEmailConsumer>){
        console.log(`Job ${job.id} is completed`)
    }
    @OnQueueFailed()
    onFail(job:Job<sendEmailConsumer>){
        console.log(`Job ${job.id} is failed`)
    }
}
