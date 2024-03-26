import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { QrcodeService } from '../qrcode.service';
import { CODE_MESSAGE } from '../enum/code-status';

@Injectable()
export class HandleResponse implements NestInterceptor {
  constructor(private service: QrcodeService) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      catchError(() => {
        const code = '04';
        const responseError = this.service.getResponseThanhToan({
          code: '04',
          message: CODE_MESSAGE[code],
        });

        throw new BadRequestException(responseError);
      }),
      map(async (response) => {
        return response;
      }),
    );
  }
}
