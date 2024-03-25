import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class PayloadDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  code: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(100)
  message: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  msgType: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  txnId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  qrTrace: string;

  @IsNotEmpty()
  @IsString()
  bankCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(13)
  amount: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(14)
  payDate: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(20)
  merchantCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(8)
  terminalId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(32)
  checksum: string;

  @IsString()
  @MaxLength(20)
  mobile?: string;

  @IsString()
  @MaxLength(30)
  accountNo?: string;

  addData?: any;
}
