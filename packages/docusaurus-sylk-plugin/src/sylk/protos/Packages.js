"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesClient = exports.PackagesService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("./SylkApi");
exports.PackagesService = {
    /** [webezyio] - */
    getPackage: {
        path: "/Packages/GetPackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetPackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetPackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetPackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetPackageResponse.decode(value),
    },
    /** [webezyio] - */
    createPackage: {
        path: "/Packages/CreatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreatePackageResponse.decode(value),
    },
    /** [webezyio] - */
    updatePackage: {
        path: "/Packages/UpdatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdatePackageResponse.decode(value),
    },
    /** [webezyio] - */
    deletePackage: {
        path: "/Packages/DeletePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeletePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeletePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeletePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeletePackageResponse.decode(value),
    },
    /** [webezyio] - */
    listPackages: {
        path: "/Packages/ListPackages",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(SylkApi_1.ListPackagesRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.ListPackagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetPackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetPackageResponse.decode(value),
    },
};
exports.PackagesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PackagesService, "Packages");
//# sourceMappingURL=Packages.js.map