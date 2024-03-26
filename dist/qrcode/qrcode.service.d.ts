import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { ConfigService } from '@nestjs/config';
export declare class QrcodeService {
    private configService;
    constructor(configService: ConfigService);
    thanhToanQrCode(dto: PayloadDto): {
        code: string;
        message: any;
        checksum: any;
    };
    getResponseThanhToan(code: string): {
        code: string;
        message: any;
        checksum: any;
    };
    getSecretKey(): string;
}
