import {
  BadRequestException,
  Body,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { CODE_STATUS } from './enum/code-status';
import { HandleResponse } from './interceptors/handleResponse.interceptor';
import { QrcodeService } from './qrcode.service';

@Controller()
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post('/BVGD/api/thanhtoanqrcode')
  @UseInterceptors(HandleResponse)
  async thanhToanQrCode(@Body() body: PayloadDto): Promise<{
    code: string;
    message: string;
    checksum: string;
  }> {
    try {
      return this.qrcodeService.thanhToanQrCode(body);
    } catch (error) {
      const code = CODE_STATUS.CODE_04;
      const responseError = this.qrcodeService.getResponseThanhToan(code);

      throw new BadRequestException(responseError);
    }
  }
}
