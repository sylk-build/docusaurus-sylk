"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceError = void 0;
/**
 * https://grpc.io/grpc/node/grpc.html#~ServiceError__anchor
 */
class ServiceError extends Error {
    constructor(code, message, details, metadata) {
        super(message);
        this.code = code;
        this.message = message;
        this.details = details;
        this.metadata = metadata;
        this.name = 'ServiceError';
    }
}
exports.ServiceError = ServiceError;
//# sourceMappingURL=error.js.map