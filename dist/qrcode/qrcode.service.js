"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrcodeService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const code_status_1 = require("./enum/code-status");
const md5 = require('md5');
let QrcodeService = class QrcodeService {
    constructor(configService) {
        this.configService = configService;
    }
    thanhToanQrCode(dto) {
        return this.getResponseThanhToan(code_status_1.CODE_STATUS.CODE_07);
    }
    getResponseThanhToan(code) {
        return {
            code,
            message: code_status_1.CODE_MESSAGE[code],
            checksum: md5(`${code}${this.getSecretKey()}`),
        };
    }
    getSecretKey() {
        return (this.configService.get('SETCRET_KEY') ||
            '7XGBUIwLmCp7kuF3v3hqweuhZVBDU4HC');
    }
};
exports.QrcodeService = QrcodeService;
exports.QrcodeService = QrcodeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], QrcodeService);
//# sourceMappingURL=qrcode.service.js.map