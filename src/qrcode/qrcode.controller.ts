import { Body, Controller, Post } from '@nestjs/common';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { QrcodeService } from './qrcode.service';

@Controller()
export class QrcodeController {
  constructor(private readonly qrcodeService: QrcodeService) {}

  @Post('/BVGD/api/thanhtoanqrcode')
  async thanhToanQrCode(@Body() body: PayloadDto): Promise<{
    code: string;
    message: string;
    checksum: string;
  }> {
    console.log(222222222)
    return this.qrcodeService.thanhToanQrCode(body);
  }
}
