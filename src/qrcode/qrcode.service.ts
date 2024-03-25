import { Injectable } from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
const md5 = require('md5');
const secretKey = '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC';

@Injectable()
export class QrcodeService {
  thanhToanQrCode(dto: PayloadDto) {
    const { code } = dto;

    return {
      code: '00',
      message: 'Đặt hàng thành công',
      checksum: md5(`${code}${secretKey}`),
    };
  }
}
