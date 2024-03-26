import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { QrcodeService } from '../qrcode.service';
export declare class HandleResponse implements NestInterceptor {
    private service;
    constructor(service: QrcodeService);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<Promise<any>>;
}
