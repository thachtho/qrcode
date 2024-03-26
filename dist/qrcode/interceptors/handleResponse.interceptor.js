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
exports.HandleResponse = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
const code_status_1 = require("../enum/code-status");
const qrcode_service_1 = require("../qrcode.service");
let HandleResponse = class HandleResponse {
    constructor(service) {
        this.service = service;
    }
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.catchError)(() => {
            const responseError = this.service.getResponseThanhToan(code_status_1.CODE_STATUS.CODE_04);
            throw new common_1.BadRequestException(responseError);
        }), (0, operators_1.map)(async (response) => {
            return response;
        }));
    }
};
exports.HandleResponse = HandleResponse;
exports.HandleResponse = HandleResponse = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [qrcode_service_1.QrcodeService])
], HandleResponse);
//# sourceMappingURL=handleResponse.interceptor.js.map