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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrcodeController = void 0;
const common_1 = require("@nestjs/common");
const thanhToanQrCode_dto_1 = require("./dto/thanhToanQrCode.dto");
const qrcode_service_1 = require("./qrcode.service");
let QrcodeController = class QrcodeController {
    constructor(qrcodeService) {
        this.qrcodeService = qrcodeService;
    }
    async thanhToanQrCode(body) {
        return this.qrcodeService.thanhToanQrCode(body);
    }
};
exports.QrcodeController = QrcodeController;
__decorate([
    (0, common_1.Post)('/BVGD/api/thanhtoanqrcode'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [thanhToanQrCode_dto_1.PayloadDto]),
    __metadata("design:returntype", Promise)
], QrcodeController.prototype, "thanhToanQrCode", null);
exports.QrcodeController = QrcodeController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [qrcode_service_1.QrcodeService])
], QrcodeController);
//# sourceMappingURL=qrcode.controller.js.map