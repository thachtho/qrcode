"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrcodeService = void 0;
const common_1 = require("@nestjs/common");
const md5 = require('md5');
const secretKey = '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC';
let QrcodeService = class QrcodeService {
    thanhToanQrCode(dto) {
        const { code } = dto;
        return {
            code: '00',
            message: 'Đặt hàng thành công',
            checksum: md5(`${code}${secretKey}`),
        };
    }
};
exports.QrcodeService = QrcodeService;
exports.QrcodeService = QrcodeService = __decorate([
    (0, common_1.Injectable)()
], QrcodeService);
//# sourceMappingURL=qrcode.service.js.map