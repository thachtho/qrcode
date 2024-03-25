"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CODE_STATUS = exports.CODE_MESSAGE = void 0;
exports.CODE_MESSAGE = {
    "01": "Thiếu hàng trong đơn hàng",
    "02": "Hết toàn bộ hàng trong đơn hàng",
    "03": "Đơn hàng đã được thanh toán",
    "04": "Lỗi tạo đơn hàng",
    "05": "Đơn hàng đang được xử lí",
    "06": "Sai thông tin xác thực",
    "07": "Số tiền không chính xác",
    "08": "Giao dịch timeout",
    "09": "QR hết hạn thanh toán",
    "11": "Dữ liệu đầu vào không đúng định dạng",
    "14": "IP bị khóa",
    "96": "System is maintaining",
    "88": "Dont post to Merchant",
    "00": "Đặt hàng thành công"
};
var CODE_STATUS;
(function (CODE_STATUS) {
    CODE_STATUS["CODE_01"] = "01";
    CODE_STATUS["CODE_02"] = "02";
    CODE_STATUS["CODE_03"] = "03";
    CODE_STATUS["CODE_04"] = "04";
    CODE_STATUS["CODE_05"] = "05";
    CODE_STATUS["CODE_06"] = "06";
    CODE_STATUS["CODE_07"] = "07";
    CODE_STATUS["CODE_08"] = "08";
    CODE_STATUS["CODE_09"] = "09";
    CODE_STATUS["CODE_11"] = "11";
    CODE_STATUS["CODE_14"] = "14";
    CODE_STATUS["CODE_96"] = "96";
    CODE_STATUS["CODE_88"] = "88";
    CODE_STATUS["CODE_00"] = "00";
})(CODE_STATUS || (exports.CODE_STATUS = CODE_STATUS = {}));
//# sourceMappingURL=code-status.js.map