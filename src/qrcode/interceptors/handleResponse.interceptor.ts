import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { CODE_STATUS } from '../enum/code-status';
import { QrcodeService } from '../qrcode.service';

@Injectable()
export class HandleResponse implements NestInterceptor {
  constructor(private service: QrcodeService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      catchError(() => {
        const responseError = this.service.getResponseThanhToan(
          CODE_STATUS.CODE_04,
        );

        throw new BadRequestException(responseError);
      }),
      map(async (response) => {
        return response;
      }),
    );
  }
}
