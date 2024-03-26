import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QrcodeModule } from './qrcode/qrcode.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    QrcodeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
