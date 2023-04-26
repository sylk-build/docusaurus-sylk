"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceError = void 0;
/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
var ServiceError = /** @class */ (function (_super) {
    __extends(ServiceError, _super);
    function ServiceError(code, message, details, metadata) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.message = message;
        _this.details = details;
        _this.metadata = metadata;
        _this.name = 'ServiceError';
        return _this;
    }
    return ServiceError;
}(Error));
exports.ServiceError = ServiceError;
