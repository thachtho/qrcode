import { PayloadDto } from './dto/thanhToanQrCode.dto';
export declare class QrcodeService {
    thanhToanQrCode(dto: PayloadDto): {
        code: string;
        message: string;
        checksum: any;
    };
}
