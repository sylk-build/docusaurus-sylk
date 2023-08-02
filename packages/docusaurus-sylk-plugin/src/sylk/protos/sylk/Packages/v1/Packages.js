"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesClient = exports.PackagesService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.PackagesService = {
    /** [sylk] - None */
    getPackage: {
        path: "/sylk.Packages.v1.Packages/GetPackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetPackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetPackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetPackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetPackageResponse.decode(value),
    },
    /** [sylk] - None */
    createPackage: {
        path: "/sylk.Packages.v1.Packages/CreatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.CreatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.CreatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.CreatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.CreatePackageResponse.decode(value),
    },
    /** [sylk] - None */
    deletePackage: {
        path: "/sylk.Packages.v1.Packages/DeletePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.DeletePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.DeletePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.DeletePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.DeletePackageResponse.decode(value),
    },
    /** [sylk] - None */
    updatePackage: {
        path: "/sylk.Packages.v1.Packages/UpdatePackage",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdatePackageRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdatePackageRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdatePackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdatePackageResponse.decode(value),
    },
    /** [sylk] - None */
    listPackages: {
        path: "/sylk.Packages.v1.Packages/ListPackages",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(SylkApi_1.ListPackagesRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.ListPackagesRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetPackageResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetPackageResponse.decode(value),
    },
};
exports.PackagesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.PackagesService, "sylk.Packages.v1.Packages");
//# sourceMappingURL=Packages.js.map