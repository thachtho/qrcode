/* eslint-disable @typescript-eslint/no-var-requires */
import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { CODE_MESSAGE } from './enum/code-status';
const md5 = require('md5');

export interface IResponseQrcode {
  code: string;
  message: string;
  checksum: string;
}

@Injectable()
export class QrcodeService {
  constructor(
    private configService: ConfigService,
    @Inject('BIDV') private client: ClientProxy,
  ) {}

  async thanhToanQrCode(dto: PayloadDto): Promise<IResponseQrcode> {
    const response = await this.checkThanhToanEhealth(dto);

    return response;
  }

  async checkThanhToanEhealth(dto: PayloadDto): Promise<IResponseQrcode> {
    const result = this.client.send({ cmd: 'notifications' }, dto);

    return await lastValueFrom(result);
  }

  getSecretKey() {
    return (
      this.configService.get<string>('SETCRET_KEY') ||
      '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC'
    );
  }

  getResponseThanhToan(code: string): IResponseQrcode {
    return {
      code,
      message: CODE_MESSAGE[code],
      checksum: md5(`${code}${this.getSecretKey()}`),
    };
  }
}
