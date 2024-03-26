import { PayloadDto } from './dto/thanhToanQrCode.dto';
import { ConfigService } from '@nestjs/config';
export declare class QrcodeService {
    private configService;
    constructor(configService: ConfigService);
    thanhToanQrCode(dto: PayloadDto): {
        code: string;
        message: string;
        checksum: any;
    };
    getResponseThanhToan({ code, message }: {
        code: string;
        message: string;
    }): {
        code: string;
        message: string;
        checksum: any;
    };
}
