import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';
import { PayloadDto } from './dto/thanhToanQrCode.dto';
export interface IResponseQrcode {
    code: string;
    message: string;
    checksum: string;
}
export declare class QrcodeService {
    private configService;
    private client;
    constructor(configService: ConfigService, client: ClientProxy);
    thanhToanQrCode(dto: PayloadDto): Promise<IResponseQrcode>;
    checkThanhToanEhealth(dto: PayloadDto): Promise<any>;
    getSecretKey(): string;
    getResponseThanhToan(code: string): IResponseQrcode;
}
