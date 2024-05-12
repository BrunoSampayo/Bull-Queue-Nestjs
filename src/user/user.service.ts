import { SendEmailQueueService } from './../send-email/job/send-email-queue/send-email-queue.service';
import { SendEmailService } from './../send-email/send-email.service';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  //metodo antigo sem fila
  // constructor(private readonly SendEmailService: SendEmailService) {}

 constructor(private readonly SendEmailQueueService:SendEmailQueueService){}

  async create(userDto: UserDto) {
    const { name, email } = userDto;

  // Criação usuario no banco

  //Enviar email com redis
  // media demorando 600 ms sem filas; resend
  // com implementação do sistema de filas resposta para usuario retorna em 20 ms e assim deixando livre usuario
  // e momento oportuno sera enviado o email de acordo com a fila

    //metodo antigo \/
     // await this.SendEmailService.handler({ name, email });


   await this.SendEmailQueueService.execute({name,email})

    return { name, email };
  }
}
