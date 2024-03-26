import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { QrcodeService } from './qrcode.service';
import { HandleResponse } from './interceptors/handleResponse.interceptor';

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
    return this.qrcodeService.thanhToanQrCode(body);
  }
}
