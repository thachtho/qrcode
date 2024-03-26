/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { ConfigService } from '@nestjs/config';
import { CODE_MESSAGE, CODE_STATUS } from './enum/code-status';
const md5 = require('md5');

@Injectable()
export class QrcodeService {
  constructor(private configService: ConfigService) {}

  thanhToanQrCode(dto: PayloadDto) {
    //check thanh toan(microsercice qua eahealth)
    // return this.getResponseThanhToan(CODE_STATUS.CODE_00);
    return this.getResponseThanhToan(CODE_STATUS.CODE_07);
  }

  getResponseThanhToan(code: string) {
    return {
      code,
      message: CODE_MESSAGE[code],
      checksum: md5(`${code}${this.getSecretKey()}`),
    };
  }

  getSecretKey() {
    return (
      this.configService.get<string>('SETCRET_KEY') ||
      '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC'
    );
  }
}
