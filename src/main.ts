import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { useContainer } from 'class-validator';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'abc',
      queueOptions: {
        durable: false,
        arguments: {
          'x-max-priority': 255, // Thiết lập độ ưu tiên tối đa
        },
      },
    },
  });

  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
