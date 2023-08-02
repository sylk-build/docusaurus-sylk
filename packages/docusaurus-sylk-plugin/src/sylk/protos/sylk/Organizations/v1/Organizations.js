"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationsClient = exports.OrganizationsService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.OrganizationsService = {
    /** [sylk] - None */
    acceprUserInvite: {
        path: "/sylk.Organizations.v1.Organizations/AcceprUserInvite",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.AcceptUserInviteRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.AcceptUserInviteRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.AcceptUserInviteResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.AcceptUserInviteResponse.decode(value),
    },
    /** [sylk] - None */
    getOrganization: {
        path: "/sylk.Organizations.v1.Organizations/GetOrganization",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.GetOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.GetOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetOrganizationResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetOrganizationResponse.decode(value),
    },
    /** [sylk] - None */
    updateOrganization: {
        path: "/sylk.Organizations.v1.Organizations/UpdateOrganization",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateOrganizationRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateOrganizationRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateOrganizationResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateOrganizationResponse.decode(value),
    },
    /** [sylk] - None */
    listOrganizations: {
        path: "/sylk.Organizations.v1.Organizations/ListOrganizations",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(SylkApi_1.ListOrganizationsRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.ListOrganizationsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.GetOrganizationResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.GetOrganizationResponse.decode(value),
    },
    /** [sylk] - None */
    addUser: {
        path: "/sylk.Organizations.v1.Organizations/AddUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.AddUserRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.AddUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.AddUserResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.AddUserResponse.decode(value),
    },
    /** [sylk] - None */
    updateUserStatus: {
        path: "/sylk.Organizations.v1.Organizations/UpdateUserStatus",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserStatusRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateUserStatusRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserStatusResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateUserStatusResponse.decode(value),
    },
    /** [sylk] - None */
    removeUser: {
        path: "/sylk.Organizations.v1.Organizations/RemoveUser",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.RemoveUserRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.RemoveUserRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.RemoveUserResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.RemoveUserResponse.decode(value),
    },
    /** [sylk] - None */
    updateUserRole: {
        path: "/sylk.Organizations.v1.Organizations/UpdateUserRole",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserRoleRequest.encode(value).finish()),
        requestDeserialize: (value) => SylkApi_1.UpdateUserRoleRequest.decode(value),
        responseSerialize: (value) => Buffer.from(SylkApi_1.UpdateUserRoleResponse.encode(value).finish()),
        responseDeserialize: (value) => SylkApi_1.UpdateUserRoleResponse.decode(value),
    },
};
exports.OrganizationsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.OrganizationsService, "sylk.Organizations.v1.Organizations");
//# sourceMappingURL=Organizations.js.map