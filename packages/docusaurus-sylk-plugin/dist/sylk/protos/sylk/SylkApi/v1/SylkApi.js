"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageRequest = exports.CreateMessageResponse = exports.CreateMessageRequest = exports.GetMessageResponse = exports.GetMessageRequest = exports.ListPackagesRequest = exports.ListServicesRequest = exports.DeleteServiceResponse = exports.DeleteServiceRequest = exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.CreateServiceResponse = exports.CreateServiceRequest = exports.GetServiceResponse = exports.GetServiceRequest = exports.DeletePackageResponse = exports.DeletePackageRequest = exports.UpdatePackageResponse = exports.UpdatePackageRequest = exports.CreatePackageResponse = exports.CreatePackageRequest = exports.GetPackageResponse = exports.GetPackageRequest = exports.UpdateOrganizationResponse = exports.ListOrganizationsRequest = exports.CreateUserRequest = exports.CreateUserResponse = exports.UpdateUserRequest = exports.UpdateUserResponse = exports.AcceptUserInviteRequest = exports.AcceptUserInviteResponse = exports.AddUserRequest = exports.AddUserResponse = exports.GetUserRequest = exports.GetUserResponse = exports.GetProjectRequest = exports.GetProjectResponse = exports.UpdateProjectRequest = exports.UpdateProjectResponse = exports.DeleteProjectRequest = exports.DeleteProjectResponse = exports.UpdateUserRoleRequest = exports.UpdateUserRoleResponse = exports.UpdateUserStatusRequest = exports.UpdateUserStatusResponse = exports.GetOrganizationRequest = exports.GetOrganizationResponse = exports.UpdateOrganizationRequest = exports.RemoveUserRequest = exports.RemoveUserResponse = void 0;
exports.RevokeAccessTokenResponse = exports.RevokeAccessTokenRequest = exports.GetAccessTokenRequest = exports.GetAccessTokenResponse = exports.ListAccessTokensRequest = exports.CreateAccessTokenResponse = exports.CreateAccessTokenRequest = exports.CachedSession = exports.ListProjectsResponseCache = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.ListProjectsRequest = exports.ListOrganizationsResponseCache = exports.DeleteEnumValueResponse = exports.DeleteEnumValueRequest = exports.UpdateEnumValueResponse = exports.UpdateEnumValueRequest = exports.CreateEnumValueResponse = exports.CreateEnumValueRequest = exports.GetEnumValueResponse = exports.GetEnumValueRequest = exports.DeleteEnumResponse = exports.DeleteEnumRequest = exports.UpdateEnumResponse = exports.UpdateEnumRequest = exports.CreateEnumResponse = exports.CreateEnumRequest = exports.GetEnumResponse = exports.GetEnumRequest = exports.CreateFieldResponse = exports.CreateFieldRequest = exports.DeleteFieldResponse = exports.DeleteFieldRequest = exports.UpdateFieldResponse = exports.UpdateFieldRequest = exports.GetFieldResponse = exports.GetFieldRequest = exports.DeleteMethodResponse = exports.DeleteMethodRequest = exports.UpdateMethodResponse = exports.UpdateMethodRequest = exports.CreateMethodResponse = exports.CreateMethodRequest = exports.GetMethodResponse = exports.GetMethodRequest = exports.DeleteMessageResponse = exports.DeleteMessageRequest = exports.UpdateMessageResponse = void 0;
/* eslint-disable */
var minimal_1 = __importDefault(require("protobufjs/minimal"));
var struct_1 = require("../../../google/protobuf/struct");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var SylkEnum_1 = require("../../SylkEnum/v1/SylkEnum");
var SylkEnumValue_1 = require("../../SylkEnumValue/v1/SylkEnumValue");
var SylkField_1 = require("../../SylkField/v1/SylkField");
var SylkMessage_1 = require("../../SylkMessage/v1/SylkMessage");
var SylkMethod_1 = require("../../SylkMethod/v1/SylkMethod");
var SylkOrganization_1 = require("../../SylkOrganization/v1/SylkOrganization");
var SylkPackage_1 = require("../../SylkPackage/v1/SylkPackage");
var SylkProject_1 = require("../../SylkProject/v1/SylkProject");
var SylkService_1 = require("../../SylkService/v1/SylkService");
var SylkUser_1 = require("../../SylkUser/v1/SylkUser");
function createBaseRemoveUserResponse() {
    return { status: "" };
}
exports.RemoveUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRemoveUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.RemoveUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRemoveUserResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveUserRequest() {
    return { projectId: "", userEmail: "", orgId: "" };
}
exports.RemoveUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        if (message.userEmail !== "") {
            writer.uint32(10).string(message.userEmail);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRemoveUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userEmail = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            userEmail: isSet(object.userEmail) ? String(object.userEmail) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.userEmail !== undefined && (obj.userEmail = message.userEmail);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.RemoveUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseRemoveUserRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.userEmail = (_b = object.userEmail) !== null && _b !== void 0 ? _b : "";
        message.orgId = (_c = object.orgId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdateOrganizationRequest() {
    return { orgId: "", update: undefined };
}
exports.UpdateOrganizationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.update !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateOrganizationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.update = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            update: isSet(object.update) ? SylkOrganization_1.SylkOrganization.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.update !== undefined && (obj.update = message.update ? SylkOrganization_1.SylkOrganization.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateOrganizationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateOrganizationRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseGetOrganizationResponse() {
    return { result: undefined };
}
exports.GetOrganizationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkOrganization_1.SylkOrganizationDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetOrganizationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkOrganization_1.SylkOrganizationDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkOrganization_1.SylkOrganizationDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkOrganization_1.SylkOrganizationDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetOrganizationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetOrganizationResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkOrganization_1.SylkOrganizationDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetOrganizationRequest() {
    return { orgId: "" };
}
exports.GetOrganizationRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetOrganizationRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.GetOrganizationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetOrganizationRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserStatusResponse() {
    return { status: "" };
}
exports.UpdateUserStatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserStatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateUserStatusResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserStatusRequest() {
    return { userEmailOrId: "", orgId: "", status: 0 };
}
exports.UpdateUserStatusRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.userEmailOrId !== "") {
            writer.uint32(10).string(message.userEmailOrId);
        }
        if (message.orgId !== "") {
            writer.uint32(26).string(message.orgId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserStatusRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userEmailOrId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            userEmailOrId: isSet(object.userEmailOrId) ? String(object.userEmailOrId) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            status: isSet(object.status) ? (0, SylkUser_1.sylkUserStatusesFromJSON)(object.status) : 0,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.userEmailOrId !== undefined && (obj.userEmailOrId = message.userEmailOrId);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.status !== undefined && (obj.status = (0, SylkUser_1.sylkUserStatusesToJSON)(message.status));
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserStatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUpdateUserStatusRequest();
        message.userEmailOrId = (_a = object.userEmailOrId) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.status = (_c = object.status) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseUpdateUserRoleResponse() {
    return { status: "" };
}
exports.UpdateUserRoleResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserRoleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateUserRoleResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserRoleRequest() {
    return { role: 0, userId: "", orgId: "", projectId: "" };
}
exports.UpdateUserRoleRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        if (message.projectId !== "") {
            writer.uint32(34).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserRoleRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            role: isSet(object.role) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.role) : 0,
            userId: isSet(object.userId) ? String(object.userId) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.role !== undefined && (obj.role = (0, SylkUser_1.sylkUserRolesToJSON)(message.role));
        message.userId !== undefined && (obj.userId = message.userId);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpdateUserRoleRequest();
        message.role = (_a = object.role) !== null && _a !== void 0 ? _a : 0;
        message.userId = (_b = object.userId) !== null && _b !== void 0 ? _b : "";
        message.orgId = (_c = object.orgId) !== null && _c !== void 0 ? _c : "";
        message.projectId = (_d = object.projectId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseDeleteProjectResponse() {
    return { status: "" };
}
exports.DeleteProjectResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteProjectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.DeleteProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteProjectResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteProjectRequest() {
    return { project: "" };
}
exports.DeleteProjectRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.project !== "") {
            writer.uint32(10).string(message.project);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteProjectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { project: isSet(object.project) ? String(object.project) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.project !== undefined && (obj.project = message.project);
        return obj;
    },
    create: function (base) {
        return exports.DeleteProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseDeleteProjectRequest();
        message.project = (_a = object.project) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateProjectResponse() {
    return { updated: undefined, projectId: "" };
}
exports.UpdateProjectResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.updated !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateProjectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            updated: isSet(object.updated) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.updated) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkProject_1.SylkProjectDisplay.toJSON(message.updated) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateProjectResponse();
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.updated)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateProjectRequest() {
    return { projectId: "", update: undefined };
}
exports.UpdateProjectRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkProject_1.SylkProject.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateProjectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.update = SylkProject_1.SylkProject.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkProject_1.SylkProject.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkProject_1.SylkProject.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateProjectRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseGetProjectResponse() {
    return { result: undefined };
}
exports.GetProjectResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetProjectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkProject_1.SylkProjectDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetProjectResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetProjectRequest() {
    return { project: "" };
}
exports.GetProjectRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.project !== "") {
            writer.uint32(10).string(message.project);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetProjectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { project: isSet(object.project) ? String(object.project) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.project !== undefined && (obj.project = message.project);
        return obj;
    },
    create: function (base) {
        return exports.GetProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetProjectRequest();
        message.project = (_a = object.project) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserResponse() {
    return { result: undefined };
}
exports.GetUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkUser_1.SylkUserDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkUser_1.SylkUserDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkUser_1.SylkUserDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkUser_1.SylkUserDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetUserResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkUser_1.SylkUserDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetUserRequest() {
    return { userId: "" };
}
exports.GetUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create: function (base) {
        return exports.GetUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddUserResponse() {
    return { status: "" };
}
exports.AddUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.AddUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAddUserResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddUserRequest() {
    return { role: 0, orgId: "", project: "", userEmail: "" };
}
exports.AddUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.orgId !== "") {
            writer.uint32(26).string(message.orgId);
        }
        if (message.project !== "") {
            writer.uint32(34).string(message.project);
        }
        if (message.userEmail !== "") {
            writer.uint32(10).string(message.userEmail);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAddUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userEmail = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            role: isSet(object.role) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.role) : 0,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            project: isSet(object.project) ? String(object.project) : "",
            userEmail: isSet(object.userEmail) ? String(object.userEmail) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.role !== undefined && (obj.role = (0, SylkUser_1.sylkUserRolesToJSON)(message.role));
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.project !== undefined && (obj.project = message.project);
        message.userEmail !== undefined && (obj.userEmail = message.userEmail);
        return obj;
    },
    create: function (base) {
        return exports.AddUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseAddUserRequest();
        message.role = (_a = object.role) !== null && _a !== void 0 ? _a : 0;
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.project = (_c = object.project) !== null && _c !== void 0 ? _c : "";
        message.userEmail = (_d = object.userEmail) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAcceptUserInviteResponse() {
    return { status: "" };
}
exports.AcceptUserInviteResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAcceptUserInviteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.AcceptUserInviteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseAcceptUserInviteResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAcceptUserInviteRequest() {
    return { email: "", orgId: "" };
}
exports.AcceptUserInviteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseAcceptUserInviteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            email: isSet(object.email) ? String(object.email) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.AcceptUserInviteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseAcceptUserInviteRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateUserResponse() {
    return { updated: undefined, userId: "" };
}
exports.UpdateUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.updated !== undefined) {
            SylkUser_1.SylkUser.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            updated: isSet(object.updated) ? SylkUser_1.SylkUser.fromJSON(object.updated) : undefined,
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.updated !== undefined && (obj.updated = message.updated ? SylkUser_1.SylkUser.toJSON(message.updated) : undefined);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateUserResponse();
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkUser_1.SylkUser.fromPartial(object.updated)
            : undefined;
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserRequest() {
    return { update: undefined, userId: "" };
}
exports.UpdateUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.update !== undefined) {
            SylkUser_1.SylkUser.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.update = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            update: isSet(object.update) ? SylkUser_1.SylkUser.fromJSON(object.update) : undefined,
            userId: isSet(object.userId) ? String(object.userId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.update !== undefined && (obj.update = message.update ? SylkUser_1.SylkUser.toJSON(message.update) : undefined);
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateUserRequest();
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkUser_1.SylkUser.fromPartial(object.update)
            : undefined;
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateUserResponse() {
    return { user: undefined, organization: undefined };
}
exports.CreateUserResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.user !== undefined) {
            SylkUser_1.SylkUser.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.organization !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.organization, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateUserResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.user = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.organization = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            user: isSet(object.user) ? SylkUser_1.SylkUser.fromJSON(object.user) : undefined,
            organization: isSet(object.organization) ? SylkOrganization_1.SylkOrganization.fromJSON(object.organization) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.user !== undefined && (obj.user = message.user ? SylkUser_1.SylkUser.toJSON(message.user) : undefined);
        message.organization !== undefined &&
            (obj.organization = message.organization ? SylkOrganization_1.SylkOrganization.toJSON(message.organization) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? SylkUser_1.SylkUser.fromPartial(object.user) : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.organization)
            : undefined;
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { orgId: "", user: undefined };
}
exports.CreateUserRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.user !== undefined) {
            SylkUser_1.SylkUser.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.user = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            user: isSet(object.user) ? SylkUser_1.SylkUser.fromJSON(object.user) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.user !== undefined && (obj.user = message.user ? SylkUser_1.SylkUser.toJSON(message.user) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateUserRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.user = (object.user !== undefined && object.user !== null) ? SylkUser_1.SylkUser.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseListOrganizationsRequest() {
    return { userId: "" };
}
exports.ListOrganizationsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListOrganizationsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create: function (base) {
        return exports.ListOrganizationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListOrganizationsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateOrganizationResponse() {
    return { updated: undefined, orgId: "" };
}
exports.UpdateOrganizationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.updated !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateOrganizationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.updated = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            updated: isSet(object.updated) ? SylkOrganization_1.SylkOrganization.fromJSON(object.updated) : undefined,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkOrganization_1.SylkOrganization.toJSON(message.updated) : undefined);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateOrganizationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseUpdateOrganizationResponse();
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.updated)
            : undefined;
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetPackageRequest() {
    return { projectId: "", package: "" };
}
exports.GetPackageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetPackageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create: function (base) {
        return exports.GetPackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetPackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetPackageResponse() {
    return { result: undefined };
}
exports.GetPackageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetPackageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetPackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetPackageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreatePackageRequest() {
    return { package: undefined, projectId: "" };
}
exports.CreatePackageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.package !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.package, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreatePackageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            package: isSet(object.package) ? SylkPackage_1.SylkPackage.fromJSON(object.package) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.package !== undefined && (obj.package = message.package ? SylkPackage_1.SylkPackage.toJSON(message.package) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreatePackageRequest();
        message.package = (object.package !== undefined && object.package !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.package)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreatePackageResponse() {
    return { projectId: "", result: undefined };
}
exports.CreatePackageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreatePackageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdatePackageRequest() {
    return { projectId: "", package: "", update: undefined };
}
exports.UpdatePackageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(10).string(message.package);
        }
        if (message.update !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePackageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            update: isSet(object.update) ? SylkPackage_1.SylkPackage.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.update !== undefined && (obj.update = message.update ? SylkPackage_1.SylkPackage.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdatePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdatePackageResponse() {
    return { updated: undefined, package: "", projectId: "" };
}
exports.UpdatePackageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.updated !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePackageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            updated: isSet(object.updated) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.updated) : undefined,
            package: isSet(object.package) ? String(object.package) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkPackage_1.SylkPackageDisplay.toJSON(message.updated) : undefined);
        message.package !== undefined && (obj.package = message.package);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdatePackageResponse();
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.updated)
            : undefined;
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeletePackageRequest() {
    return { projectId: "", package: "" };
}
exports.DeletePackageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(10).string(message.package);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeletePackageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create: function (base) {
        return exports.DeletePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeletePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeletePackageResponse() {
    return { package: "", projectId: "" };
}
exports.DeletePackageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeletePackageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            package: isSet(object.package) ? String(object.package) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.package !== undefined && (obj.package = message.package);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeletePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeletePackageResponse();
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetServiceRequest() {
    return { service: "", projectId: "" };
}
exports.GetServiceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetServiceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            service: isSet(object.service) ? String(object.service) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.service !== undefined && (obj.service = message.service);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.GetServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetServiceRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetServiceResponse() {
    return { result: undefined };
}
exports.GetServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetServiceResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateServiceRequest() {
    return { projectId: "", service: undefined };
}
exports.CreateServiceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== undefined) {
            SylkService_1.SylkService.encode(message.service, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateServiceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = SylkService_1.SylkService.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? SylkService_1.SylkService.fromJSON(object.service) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service ? SylkService_1.SylkService.toJSON(message.service) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (object.service !== undefined && object.service !== null)
            ? SylkService_1.SylkService.fromPartial(object.service)
            : undefined;
        return message;
    },
};
function createBaseCreateServiceResponse() {
    return { result: undefined, projectId: "" };
}
exports.CreateServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateServiceResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.result)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateServiceRequest() {
    return { service: "", projectId: "", update: undefined };
}
exports.UpdateServiceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkService_1.SylkService.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateServiceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkService_1.SylkService.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            service: isSet(object.service) ? String(object.service) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkService_1.SylkService.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.service !== undefined && (obj.service = message.service);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkService_1.SylkService.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateServiceRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkService_1.SylkService.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateServiceResponse() {
    return { updated: undefined, service: "", projectId: "" };
}
exports.UpdateServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.updated !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            updated: isSet(object.updated) ? SylkService_1.SylkServiceDisplay.fromJSON(object.updated) : undefined,
            service: isSet(object.service) ? String(object.service) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkService_1.SylkServiceDisplay.toJSON(message.updated) : undefined);
        message.service !== undefined && (obj.service = message.service);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateServiceResponse();
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.updated)
            : undefined;
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteServiceRequest() {
    return { projectId: "", service: "" };
}
exports.DeleteServiceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteServiceRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create: function (base) {
        return exports.DeleteServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteServiceResponse() {
    return { projectId: "", service: "" };
}
exports.DeleteServiceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteServiceResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create: function (base) {
        return exports.DeleteServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteServiceResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListServicesRequest() {
    return { projectId: "" };
}
exports.ListServicesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListServicesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.ListServicesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListServicesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListPackagesRequest() {
    return { projectId: "" };
}
exports.ListPackagesRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListPackagesRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.ListPackagesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListPackagesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetMessageRequest() {
    return { projectId: "", message: "" };
}
exports.GetMessageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create: function (base) {
        return exports.GetMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMessageResponse() {
    return { result: undefined };
}
exports.GetMessageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetMessageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateMessageRequest() {
    return { projectId: "", package: "", message: undefined };
}
exports.CreateMessageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.message !== undefined) {
            SylkMessage_1.SylkMessage.encode(message.message, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.message = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            message: isSet(object.message) ? SylkMessage_1.SylkMessage.fromJSON(object.message) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.message !== undefined && (obj.message = message.message ? SylkMessage_1.SylkMessage.toJSON(message.message) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.message = (object.message !== undefined && object.message !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.message)
            : undefined;
        return message;
    },
};
function createBaseCreateMessageResponse() {
    return { result: undefined, message: "", projectId: "" };
}
exports.CreateMessageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined,
            message: isSet(object.message) ? String(object.message) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        message.message !== undefined && (obj.message = message.message);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateMessageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.result)
            : undefined;
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateMessageRequest() {
    return { projectId: "", message: "", update: undefined };
}
exports.UpdateMessageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.update !== undefined) {
            SylkMessage_1.SylkMessage.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            update: isSet(object.update) ? SylkMessage_1.SylkMessage.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.update !== undefined && (obj.update = message.update ? SylkMessage_1.SylkMessage.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMessageResponse() {
    return { message: "", updated: undefined, projectId: "" };
}
exports.UpdateMessageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.updated !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            message: isSet(object.message) ? String(object.message) : "",
            updated: isSet(object.updated) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.updated) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMessage_1.SylkMessageDisplay.toJSON(message.updated) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateMessageResponse();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.updated)
            : undefined;
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteMessageRequest() {
    return { message: "", projectId: "" };
}
exports.DeleteMessageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteMessageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            message: isSet(object.message) ? String(object.message) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.message !== undefined && (obj.message = message.message);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteMessageRequest();
        message.message = (_a = object.message) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteMessageResponse() {
    return { projectId: "", message: "" };
}
exports.DeleteMessageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteMessageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create: function (base) {
        return exports.DeleteMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteMessageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMethodRequest() {
    return { projectId: "", method: "" };
}
exports.GetMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMethodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create: function (base) {
        return exports.GetMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMethodResponse() {
    return { result: undefined };
}
exports.GetMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetMethodResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodRequest() {
    return { service: "", projectId: "", method: undefined };
}
exports.CreateMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.method, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMethodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.method = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            service: isSet(object.service) ? String(object.service) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? SylkMethod_1.SylkMethod.fromJSON(object.method) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.service !== undefined && (obj.service = message.service);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method ? SylkMethod_1.SylkMethod.toJSON(message.method) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateMethodRequest();
        message.service = (_a = object.service) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.method = (object.method !== undefined && object.method !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.method)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodResponse() {
    return { result: undefined, projectId: "", service: "" };
}
exports.CreateMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create: function (base) {
        return exports.CreateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateMethodResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateMethodRequest() {
    return { method: "", projectId: "", update: undefined };
}
exports.UpdateMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMethodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            method: isSet(object.method) ? String(object.method) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkMethod_1.SylkMethod.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkMethod_1.SylkMethod.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateMethodRequest();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMethodResponse() {
    return { method: "", projectId: "", updated: undefined };
}
exports.UpdateMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.updated !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            method: isSet(object.method) ? String(object.method) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updated: isSet(object.updated) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMethod_1.SylkMethodDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateMethodResponse();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteMethodRequest() {
    return { method: "", projectId: "" };
}
exports.DeleteMethodRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteMethodRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            method: isSet(object.method) ? String(object.method) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteMethodRequest();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteMethodResponse() {
    return { method: "", projectId: "" };
}
exports.DeleteMethodResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteMethodResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            method: isSet(object.method) ? String(object.method) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.method !== undefined && (obj.method = message.method);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteMethodResponse();
        message.method = (_a = object.method) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetFieldRequest() {
    return { projectId: "", field: "" };
}
exports.GetFieldRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFieldRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        return obj;
    },
    create: function (base) {
        return exports.GetFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetFieldResponse() {
    return { result: undefined };
}
exports.GetFieldResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetFieldResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetFieldResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateFieldRequest() {
    return { field: "", projectId: "", update: undefined };
}
exports.UpdateFieldRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkField_1.SylkField.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateFieldRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkField_1.SylkField.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            field: isSet(object.field) ? String(object.field) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkField_1.SylkField.fromJSON(object.update) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.field !== undefined && (obj.field = message.field);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkField_1.SylkField.toJSON(message.update) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateFieldRequest();
        message.field = (_a = object.field) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkField_1.SylkField.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateFieldResponse() {
    return { projectId: "", field: "", updated: undefined };
}
exports.UpdateFieldResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        if (message.updated !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateFieldResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
            updated: isSet(object.updated) ? SylkField_1.SylkFieldDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkField_1.SylkFieldDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateFieldResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteFieldRequest() {
    return { field: "", projectId: "" };
}
exports.DeleteFieldRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteFieldRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            field: isSet(object.field) ? String(object.field) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.field !== undefined && (obj.field = message.field);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteFieldRequest();
        message.field = (_a = object.field) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteFieldResponse() {
    return { field: "", projectId: "" };
}
exports.DeleteFieldResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteFieldResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            field: isSet(object.field) ? String(object.field) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.field !== undefined && (obj.field = message.field);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteFieldResponse();
        message.field = (_a = object.field) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateFieldRequest() {
    return { projectId: "", message: "", field: undefined };
}
exports.CreateFieldRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.field !== undefined) {
            SylkField_1.SylkField.encode(message.field, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateFieldRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.field = SylkField_1.SylkField.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            field: isSet(object.field) ? SylkField_1.SylkField.fromJSON(object.field) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.field !== undefined && (obj.field = message.field ? SylkField_1.SylkField.toJSON(message.field) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.field = (object.field !== undefined && object.field !== null)
            ? SylkField_1.SylkField.fromPartial(object.field)
            : undefined;
        return message;
    },
};
function createBaseCreateFieldResponse() {
    return { result: undefined };
}
exports.CreateFieldResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateFieldResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateFieldResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetEnumRequest() {
    return { projectId: "", enum: "" };
}
exports.GetEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumResponse() {
    return { result: undefined };
}
exports.GetEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetEnumResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumRequest() {
    return { package: "", enum: undefined, projectId: "" };
}
exports.CreateEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.enum, writer.uint32(26).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.enum = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            package: isSet(object.package) ? String(object.package) : "",
            enum: isSet(object.enum) ? SylkEnum_1.SylkEnum.fromJSON(object.enum) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum ? SylkEnum_1.SylkEnum.toJSON(message.enum) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateEnumRequest();
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.enum = (object.enum !== undefined && object.enum !== null) ? SylkEnum_1.SylkEnum.fromPartial(object.enum) : undefined;
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateEnumResponse() {
    return { result: undefined, projectId: "" };
}
exports.CreateEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateEnumResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateEnumRequest() {
    return { update: undefined, enum: "", projectId: "" };
}
exports.UpdateEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.update !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            update: isSet(object.update) ? SylkEnum_1.SylkEnum.fromJSON(object.update) : undefined,
            enum: isSet(object.enum) ? String(object.enum) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.update !== undefined && (obj.update = message.update ? SylkEnum_1.SylkEnum.toJSON(message.update) : undefined);
        message.enum !== undefined && (obj.enum = message.enum);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumRequest();
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnum_1.SylkEnum.fromPartial(object.update)
            : undefined;
        message.enum = (_a = object.enum) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateEnumResponse() {
    return { enum: "", projectId: "", updated: undefined };
}
exports.UpdateEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.updated !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enum: isSet(object.enum) ? String(object.enum) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updated: isSet(object.updated) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enum !== undefined && (obj.enum = message.enum);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnum_1.SylkEnumDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumResponse();
        message.enum = (_a = object.enum) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteEnumRequest() {
    return { enum: "", projectId: "" };
}
exports.DeleteEnumRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enum: isSet(object.enum) ? String(object.enum) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enum !== undefined && (obj.enum = message.enum);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteEnumRequest();
        message.enum = (_a = object.enum) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteEnumResponse() {
    return { enum: "", projectId: "" };
}
exports.DeleteEnumResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enum: isSet(object.enum) ? String(object.enum) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enum !== undefined && (obj.enum = message.enum);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteEnumResponse();
        message.enum = (_a = object.enum) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumValueRequest() {
    return { projectId: "", enumValue: "" };
}
exports.GetEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumValueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseGetEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumValueResponse() {
    return { result: undefined };
}
exports.GetEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumValueRequest() {
    return { enum: "", projectId: "", enumValue: undefined };
}
exports.CreateEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.enumValue, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumValueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.enumValue = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enum: isSet(object.enum) ? String(object.enum) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.enumValue) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enum !== undefined && (obj.enum = message.enum);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue ? SylkEnumValue_1.SylkEnumValue.toJSON(message.enumValue) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseCreateEnumValueRequest();
        message.enum = (_a = object.enum) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.enumValue = (object.enumValue !== undefined && object.enumValue !== null)
            ? SylkEnumValue_1.SylkEnumValue.fromPartial(object.enumValue)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumValueResponse() {
    return { result: undefined };
}
exports.CreateEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseCreateEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumValueRequest() {
    return { update: undefined, projectId: "", enumValue: "" };
}
exports.UpdateEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.update !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumValueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.update = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            update: isSet(object.update) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.update) : undefined,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.update !== undefined && (obj.update = message.update ? SylkEnumValue_1.SylkEnumValue.toJSON(message.update) : undefined);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumValueRequest();
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnumValue_1.SylkEnumValue.fromPartial(object.update)
            : undefined;
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseUpdateEnumValueResponse() {
    return { projectId: "", updated: undefined, enumValue: "" };
}
exports.UpdateEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.updated !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdateEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.updated = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updated: isSet(object.updated) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.updated) : undefined,
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.updated) : undefined);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create: function (base) {
        return exports.UpdateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUpdateEnumValueResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.updated)
            : undefined;
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteEnumValueRequest() {
    return { enumValue: "", projectId: "" };
}
exports.DeleteEnumValueRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumValueRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteEnumValueRequest();
        message.enumValue = (_a = object.enumValue) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteEnumValueResponse() {
    return { projectId: "", enumValue: "" };
}
exports.DeleteEnumValueResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeleteEnumValueResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create: function (base) {
        return exports.DeleteEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDeleteEnumValueResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListOrganizationsResponseCache() {
    return { organizations: [] };
}
exports.ListOrganizationsResponseCache = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _e = message.organizations; _i < _e.length; _i++) {
            var v = _e[_i];
            exports.GetOrganizationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListOrganizationsResponseCache();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.organizations.push(exports.GetOrganizationResponse.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            organizations: Array.isArray(object === null || object === void 0 ? void 0 : object.organizations)
                ? object.organizations.map(function (e) { return exports.GetOrganizationResponse.fromJSON(e); })
                : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.organizations) {
            obj.organizations = message.organizations.map(function (e) { return e ? exports.GetOrganizationResponse.toJSON(e) : undefined; });
        }
        else {
            obj.organizations = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.ListOrganizationsResponseCache.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListOrganizationsResponseCache();
        message.organizations = ((_a = object.organizations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GetOrganizationResponse.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseListProjectsRequest() {
    return { orgId: "" };
}
exports.ListProjectsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListProjectsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.ListProjectsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListProjectsRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateProjectRequest() {
    return { project: undefined, orgId: "" };
}
exports.CreateProjectRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.project !== undefined) {
            SylkProject_1.SylkProject.encode(message.project, writer.uint32(18).fork()).ldelim();
        }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateProjectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.project = SylkProject_1.SylkProject.decode(reader, reader.uint32());
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            project: isSet(object.project) ? SylkProject_1.SylkProject.fromJSON(object.project) : undefined,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.project !== undefined && (obj.project = message.project ? SylkProject_1.SylkProject.toJSON(message.project) : undefined);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.CreateProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateProjectRequest();
        message.project = (object.project !== undefined && object.project !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.project)
            : undefined;
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateProjectResponse() {
    return { orgId: "", result: undefined };
}
exports.CreateProjectResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        if (message.result !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateProjectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            result: isSet(object.result) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.result !== undefined &&
            (obj.result = message.result ? SylkProject_1.SylkProjectDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.CreateProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateProjectResponse();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseListProjectsResponseCache() {
    return { projects: [] };
}
exports.ListProjectsResponseCache = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        for (var _i = 0, _e = message.projects; _i < _e.length; _i++) {
            var v = _e[_i];
            exports.GetProjectResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListProjectsResponseCache();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.projects.push(exports.GetProjectResponse.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map(function (e) { return exports.GetProjectResponse.fromJSON(e); }) : [],
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.projects) {
            obj.projects = message.projects.map(function (e) { return e ? exports.GetProjectResponse.toJSON(e) : undefined; });
        }
        else {
            obj.projects = [];
        }
        return obj;
    },
    create: function (base) {
        return exports.ListProjectsResponseCache.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListProjectsResponseCache();
        message.projects = ((_a = object.projects) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.GetProjectResponse.fromPartial(e); })) || [];
        return message;
    },
};
function createBaseCachedSession() {
    return { session: undefined };
}
exports.CachedSession = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.session !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.session), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCachedSession();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.session = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { session: isObject(object.session) ? object.session : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.session !== undefined && (obj.session = message.session);
        return obj;
    },
    create: function (base) {
        return exports.CachedSession.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCachedSession();
        message.session = (_a = object.session) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseCreateAccessTokenRequest() {
    return { description: "", orgId: "", expiresAt: undefined };
}
exports.CreateAccessTokenRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateAccessTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            description: isSet(object.description) ? String(object.description) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.description !== undefined && (obj.description = message.description);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        return obj;
    },
    create: function (base) {
        return exports.CreateAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCreateAccessTokenRequest();
        message.description = (_a = object.description) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.expiresAt = (_c = object.expiresAt) !== null && _c !== void 0 ? _c : undefined;
        return message;
    },
};
function createBaseCreateAccessTokenResponse() {
    return { status: "" };
}
exports.CreateAccessTokenResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreateAccessTokenResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.CreateAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseCreateAccessTokenResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListAccessTokensRequest() {
    return { orgId: "" };
}
exports.ListAccessTokensRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseListAccessTokensRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.ListAccessTokensRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseListAccessTokensRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAccessTokenResponse() {
    return { result: undefined };
}
exports.GetAccessTokenResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.result !== undefined) {
            SylkUser_1.PersonalAccessToken.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAccessTokenResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.result = SylkUser_1.PersonalAccessToken.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { result: isSet(object.result) ? SylkUser_1.PersonalAccessToken.fromJSON(object.result) : undefined };
    },
    toJSON: function (message) {
        var obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkUser_1.PersonalAccessToken.toJSON(message.result) : undefined);
        return obj;
    },
    create: function (base) {
        return exports.GetAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var message = createBaseGetAccessTokenResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkUser_1.PersonalAccessToken.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetAccessTokenRequest() {
    return { token: "" };
}
exports.GetAccessTokenRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGetAccessTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { token: isSet(object.token) ? String(object.token) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create: function (base) {
        return exports.GetAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseGetAccessTokenRequest();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRevokeAccessTokenRequest() {
    return { token: "", orgId: "" };
}
exports.RevokeAccessTokenRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRevokeAccessTokenRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            token: isSet(object.token) ? String(object.token) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create: function (base) {
        return exports.RevokeAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseRevokeAccessTokenRequest();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRevokeAccessTokenResponse() {
    return { status: "" };
}
exports.RevokeAccessTokenResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1.default.Writer.create(); }
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseRevokeAccessTokenResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON: function (object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON: function (message) {
        var obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create: function (base) {
        return exports.RevokeAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseRevokeAccessTokenResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function toTimestamp(date) {
    var seconds = date.getTime() / 1000;
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = (t.seconds || 0) * 1000;
    millis += (t.nanos || 0) / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function isObject(value) {
    return typeof value === "object" && value !== null;
}
function isSet(value) {
    return value !== null && value !== undefined;
}
