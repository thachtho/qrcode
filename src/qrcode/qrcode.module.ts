import { Module } from '@nestjs/common';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TIMEOUT_SEND_REQUEST } from './constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BIDV',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'bbbb',
          noAck: true,
          queueOptions: {
            durable: true,
            arguments: {
              'x-message-ttl': TIMEOUT_SEND_REQUEST, //thời gian sống của message queue sẽ mất sau 5 giây nếu ko có consumer nào xử lý
            },
          },
          persistent: true,
        },
      },
    ]),
  ],
  controllers: [QrcodeController],
  providers: [QrcodeService],
})
export class QrcodeModule {}
