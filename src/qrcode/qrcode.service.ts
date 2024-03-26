/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { ConfigService } from '@nestjs/config';
const md5 = require('md5');

@Injectable()
export class QrcodeService {
  constructor(private configService: ConfigService) {}

  thanhToanQrCode(dto: PayloadDto) {
    const { code } = dto;

    return this.getResponseThanhToan({
      code: '00',
      message: 'Đặt hàng thành công',
    });
  }

  getResponseThanhToan({ code, message }: { code: string; message: string }) {
    const secretKey =
      this.configService.get<string>('SETCRET_KEY') ||
      '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC';

    return {
      code,
      message,
      checksum: md5(`${code}${secretKey}`),
    };
  }
}
