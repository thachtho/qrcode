import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { QrcodeService } from './qrcode.service';
export declare class QrcodeController {
    private readonly qrcodeService;
    constructor(qrcodeService: QrcodeService);
    thanhToanQrCode(body: PayloadDto): Promise<{
        code: string;
        message: string;
        checksum: string;
    }>;
}
