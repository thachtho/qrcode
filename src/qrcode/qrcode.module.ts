import { Module } from '@nestjs/common';
import { QrcodeController } from './qrcode.controller';
import { QrcodeService } from './qrcode.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BIDV',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'bvgd111',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [QrcodeController],
  providers: [QrcodeService],
})
export class QrcodeModule {}
