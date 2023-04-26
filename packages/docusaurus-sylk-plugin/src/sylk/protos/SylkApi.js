"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateMessageRequest = exports.CreateMessageResponse = exports.CreateMessageRequest = exports.GetMessageResponse = exports.GetMessageRequest = exports.ListPackagesRequest = exports.ListServicesRequest = exports.DeleteServiceResponse = exports.DeleteServiceRequest = exports.UpdateServiceResponse = exports.UpdateServiceRequest = exports.CreateServiceResponse = exports.CreateServiceRequest = exports.GetServiceResponse = exports.GetServiceRequest = exports.DeletePackageResponse = exports.DeletePackageRequest = exports.UpdatePackageResponse = exports.UpdatePackageRequest = exports.CreatePackageResponse = exports.CreatePackageRequest = exports.GetPackageResponse = exports.GetPackageRequest = exports.RemoveUserResponse = exports.RemoveUserRequest = exports.UpdateUserStatusResponse = exports.UpdateUserStatusRequest = exports.UpdateUserRoleResponse = exports.UpdateUserRoleRequest = exports.DeleteProjectResponse = exports.DeleteProjectRequest = exports.UpdateProjectResponse = exports.UpdateProjectRequest = exports.GetProjectResponse = exports.GetProjectRequest = exports.GetUserResponse = exports.GetUserRequest = exports.AddUserResponse = exports.AddUserRequest = exports.AcceptUserInviteResponse = exports.AcceptUserInviteRequest = exports.UpdateUserResponse = exports.UpdateUserRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.ListOrganizationsRequest = exports.UpdateOrganizationResponse = exports.UpdateOrganizationRequest = exports.GetOrganizationResponse = exports.GetOrganizationRequest = void 0;
exports.RevokeAccessTokenResponse = exports.RevokeAccessTokenRequest = exports.GetAccessTokenRequest = exports.GetAccessTokenResponse = exports.ListAccessTokensRequest = exports.CreateAccessTokenResponse = exports.CreateAccessTokenRequest = exports.CachedSession = exports.ListProjectsResponseCache = exports.CreateProjectResponse = exports.CreateProjectRequest = exports.ListProjectsRequest = exports.ListOrganizationsResponseCache = exports.DeleteEnumValueResponse = exports.DeleteEnumValueRequest = exports.UpdateEnumValueResponse = exports.UpdateEnumValueRequest = exports.CreateEnumValueResponse = exports.CreateEnumValueRequest = exports.GetEnumValueResponse = exports.GetEnumValueRequest = exports.DeleteEnumResponse = exports.DeleteEnumRequest = exports.UpdateEnumResponse = exports.UpdateEnumRequest = exports.CreateEnumResponse = exports.CreateEnumRequest = exports.GetEnumResponse = exports.GetEnumRequest = exports.CreateFieldResponse = exports.CreateFieldRequest = exports.DeleteFieldResponse = exports.DeleteFieldRequest = exports.UpdateFieldResponse = exports.UpdateFieldRequest = exports.GetFieldResponse = exports.GetFieldRequest = exports.DeleteMethodResponse = exports.DeleteMethodRequest = exports.UpdateMethodResponse = exports.UpdateMethodRequest = exports.CreateMethodResponse = exports.CreateMethodRequest = exports.GetMethodResponse = exports.GetMethodRequest = exports.DeleteMessageResponse = exports.DeleteMessageRequest = exports.UpdateMessageResponse = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const SylkEnum_1 = require("./SylkEnum");
const SylkEnumValue_1 = require("./SylkEnumValue");
const SylkField_1 = require("./SylkField");
const SylkMessage_1 = require("./SylkMessage");
const SylkMethod_1 = require("./SylkMethod");
const SylkOrganization_1 = require("./SylkOrganization");
const SylkPackage_1 = require("./SylkPackage");
const SylkProject_1 = require("./SylkProject");
const SylkService_1 = require("./SylkService");
const SylkUser_1 = require("./SylkUser");
const struct_1 = require("./google/protobuf/struct");
const timestamp_1 = require("./google/protobuf/timestamp");
function createBaseGetOrganizationRequest() {
    return { orgId: "" };
}
exports.GetOrganizationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrganizationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.GetOrganizationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetOrganizationRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetOrganizationResponse() {
    return { result: undefined };
}
exports.GetOrganizationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkOrganization_1.SylkOrganizationDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetOrganizationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkOrganization_1.SylkOrganizationDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkOrganization_1.SylkOrganizationDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkOrganization_1.SylkOrganizationDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetOrganizationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetOrganizationResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkOrganization_1.SylkOrganizationDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateOrganizationRequest() {
    return { orgId: "", update: undefined };
}
exports.UpdateOrganizationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.update !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateOrganizationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.update = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            update: isSet(object.update) ? SylkOrganization_1.SylkOrganization.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.update !== undefined && (obj.update = message.update ? SylkOrganization_1.SylkOrganization.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateOrganizationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateOrganizationRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateOrganizationResponse() {
    return { orgId: "", updated: undefined };
}
exports.UpdateOrganizationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.updated !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateOrganizationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.updated = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            updated: isSet(object.updated) ? SylkOrganization_1.SylkOrganization.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkOrganization_1.SylkOrganization.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateOrganizationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateOrganizationResponse();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseListOrganizationsRequest() {
    return { userId: "" };
}
exports.ListOrganizationsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListOrganizationsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.ListOrganizationsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListOrganizationsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateUserRequest() {
    return { orgId: "", user: undefined };
}
exports.CreateUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.user !== undefined) {
            SylkUser_1.SylkUser.encode(message.user, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.user = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            user: isSet(object.user) ? SylkUser_1.SylkUser.fromJSON(object.user) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.user !== undefined && (obj.user = message.user ? SylkUser_1.SylkUser.toJSON(message.user) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateUserRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.user = (object.user !== undefined && object.user !== null) ? SylkUser_1.SylkUser.fromPartial(object.user) : undefined;
        return message;
    },
};
function createBaseCreateUserResponse() {
    return { user: undefined, organization: undefined };
}
exports.CreateUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.user !== undefined) {
            SylkUser_1.SylkUser.encode(message.user, writer.uint32(10).fork()).ldelim();
        }
        if (message.organization !== undefined) {
            SylkOrganization_1.SylkOrganization.encode(message.organization, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.user = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.organization = SylkOrganization_1.SylkOrganization.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            user: isSet(object.user) ? SylkUser_1.SylkUser.fromJSON(object.user) : undefined,
            organization: isSet(object.organization) ? SylkOrganization_1.SylkOrganization.fromJSON(object.organization) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.user !== undefined && (obj.user = message.user ? SylkUser_1.SylkUser.toJSON(message.user) : undefined);
        message.organization !== undefined &&
            (obj.organization = message.organization ? SylkOrganization_1.SylkOrganization.toJSON(message.organization) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateUserResponse();
        message.user = (object.user !== undefined && object.user !== null) ? SylkUser_1.SylkUser.fromPartial(object.user) : undefined;
        message.organization = (object.organization !== undefined && object.organization !== null)
            ? SylkOrganization_1.SylkOrganization.fromPartial(object.organization)
            : undefined;
        return message;
    },
};
function createBaseUpdateUserRequest() {
    return { userId: "", update: undefined };
}
exports.UpdateUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.update !== undefined) {
            SylkUser_1.SylkUser.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.update = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            update: isSet(object.update) ? SylkUser_1.SylkUser.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.update !== undefined && (obj.update = message.update ? SylkUser_1.SylkUser.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkUser_1.SylkUser.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateUserResponse() {
    return { userId: "", updated: undefined };
}
exports.UpdateUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.updated !== undefined) {
            SylkUser_1.SylkUser.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.updated = SylkUser_1.SylkUser.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            updated: isSet(object.updated) ? SylkUser_1.SylkUser.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.updated !== undefined && (obj.updated = message.updated ? SylkUser_1.SylkUser.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateUserResponse();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkUser_1.SylkUser.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseAcceptUserInviteRequest() {
    return { email: "", orgId: "" };
}
exports.AcceptUserInviteRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.email !== "") {
            writer.uint32(10).string(message.email);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptUserInviteRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.email = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            email: isSet(object.email) ? String(object.email) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.email !== undefined && (obj.email = message.email);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.AcceptUserInviteRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseAcceptUserInviteRequest();
        message.email = (_a = object.email) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseAcceptUserInviteResponse() {
    return { status: "" };
}
exports.AcceptUserInviteResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAcceptUserInviteResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.AcceptUserInviteResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAcceptUserInviteResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseAddUserRequest() {
    return { userEmail: "", role: 0, orgId: "", project: "" };
}
exports.AddUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userEmail !== "") {
            writer.uint32(10).string(message.userEmail);
        }
        if (message.role !== 0) {
            writer.uint32(16).int32(message.role);
        }
        if (message.orgId !== "") {
            writer.uint32(26).string(message.orgId);
        }
        if (message.project !== "") {
            writer.uint32(34).string(message.project);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userEmail = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userEmail: isSet(object.userEmail) ? String(object.userEmail) : "",
            role: isSet(object.role) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.role) : 0,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            project: isSet(object.project) ? String(object.project) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userEmail !== undefined && (obj.userEmail = message.userEmail);
        message.role !== undefined && (obj.role = (0, SylkUser_1.sylkUserRolesToJSON)(message.role));
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.project !== undefined && (obj.project = message.project);
        return obj;
    },
    create(base) {
        return exports.AddUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseAddUserRequest();
        message.userEmail = (_a = object.userEmail) !== null && _a !== void 0 ? _a : "";
        message.role = (_b = object.role) !== null && _b !== void 0 ? _b : 0;
        message.orgId = (_c = object.orgId) !== null && _c !== void 0 ? _c : "";
        message.project = (_d = object.project) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseAddUserResponse() {
    return { status: "" };
}
exports.AddUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAddUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.AddUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAddUserResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserRequest() {
    return { userId: "" };
}
exports.GetUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { userId: isSet(object.userId) ? String(object.userId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        return obj;
    },
    create(base) {
        return exports.GetUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetUserRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetUserResponse() {
    return { result: undefined };
}
exports.GetUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkUser_1.SylkUserDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkUser_1.SylkUserDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkUser_1.SylkUserDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkUser_1.SylkUserDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetUserResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkUser_1.SylkUserDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseGetProjectRequest() {
    return { project: "" };
}
exports.GetProjectRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.project !== "") {
            writer.uint32(10).string(message.project);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { project: isSet(object.project) ? String(object.project) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project);
        return obj;
    },
    create(base) {
        return exports.GetProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetProjectRequest();
        message.project = (_a = object.project) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetProjectResponse() {
    return { result: undefined };
}
exports.GetProjectResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkProject_1.SylkProjectDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetProjectResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateProjectRequest() {
    return { projectId: "", update: undefined };
}
exports.UpdateProjectRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkProject_1.SylkProject.encode(message.update, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.update = SylkProject_1.SylkProject.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkProject_1.SylkProject.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkProject_1.SylkProject.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateProjectRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateProjectResponse() {
    return { projectId: "", updated: undefined };
}
exports.UpdateProjectResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.updated !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.updated, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.updated = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            updated: isSet(object.updated) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkProject_1.SylkProjectDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateProjectResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteProjectRequest() {
    return { project: "" };
}
exports.DeleteProjectRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.project !== "") {
            writer.uint32(10).string(message.project);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.project = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { project: isSet(object.project) ? String(object.project) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.project !== undefined && (obj.project = message.project);
        return obj;
    },
    create(base) {
        return exports.DeleteProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteProjectRequest();
        message.project = (_a = object.project) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseDeleteProjectResponse() {
    return { status: "" };
}
exports.DeleteProjectResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.DeleteProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDeleteProjectResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserRoleRequest() {
    return { userId: "", orgId: "", role: 0, projectId: "" };
}
exports.UpdateUserRoleRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        if (message.role !== 0) {
            writer.uint32(24).int32(message.role);
        }
        if (message.projectId !== "") {
            writer.uint32(34).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserRoleRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 3:
                    if (tag != 24) {
                        break;
                    }
                    message.role = reader.int32();
                    continue;
                case 4:
                    if (tag != 34) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            role: isSet(object.role) ? (0, SylkUser_1.sylkUserRolesFromJSON)(object.role) : 0,
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.role !== undefined && (obj.role = (0, SylkUser_1.sylkUserRolesToJSON)(message.role));
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.UpdateUserRoleRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = createBaseUpdateUserRoleRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.role = (_c = object.role) !== null && _c !== void 0 ? _c : 0;
        message.projectId = (_d = object.projectId) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
function createBaseUpdateUserRoleResponse() {
    return { status: "" };
}
exports.UpdateUserRoleResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserRoleResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.UpdateUserRoleResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateUserRoleResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseUpdateUserStatusRequest() {
    return { userEmailOrId: "", status: 0, orgId: "" };
}
exports.UpdateUserStatusRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userEmailOrId !== "") {
            writer.uint32(10).string(message.userEmailOrId);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.orgId !== "") {
            writer.uint32(26).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserStatusRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userEmailOrId = reader.string();
                    continue;
                case 2:
                    if (tag != 16) {
                        break;
                    }
                    message.status = reader.int32();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userEmailOrId: isSet(object.userEmailOrId) ? String(object.userEmailOrId) : "",
            status: isSet(object.status) ? (0, SylkUser_1.sylkUserStatusesFromJSON)(object.status) : 0,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userEmailOrId !== undefined && (obj.userEmailOrId = message.userEmailOrId);
        message.status !== undefined && (obj.status = (0, SylkUser_1.sylkUserStatusesToJSON)(message.status));
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.UpdateUserStatusRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseUpdateUserStatusRequest();
        message.userEmailOrId = (_a = object.userEmailOrId) !== null && _a !== void 0 ? _a : "";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.orgId = (_c = object.orgId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseUpdateUserStatusResponse() {
    return { status: "" };
}
exports.UpdateUserStatusResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateUserStatusResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.UpdateUserStatusResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseUpdateUserStatusResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRemoveUserRequest() {
    return { userEmail: "", orgId: "", projectId: "" };
}
exports.RemoveUserRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userEmail !== "") {
            writer.uint32(10).string(message.userEmail);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        if (message.projectId !== "") {
            writer.uint32(26).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUserRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.userEmail = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userEmail: isSet(object.userEmail) ? String(object.userEmail) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userEmail !== undefined && (obj.userEmail = message.userEmail);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.RemoveUserRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseRemoveUserRequest();
        message.userEmail = (_a = object.userEmail) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.projectId = (_c = object.projectId) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseRemoveUserResponse() {
    return { status: "" };
}
exports.RemoveUserResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRemoveUserResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.RemoveUserResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRemoveUserResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetPackageRequest() {
    return { projectId: "", package: "" };
}
exports.GetPackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPackageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.GetPackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetPackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetPackageResponse() {
    return { result: undefined };
}
exports.GetPackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetPackageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetPackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetPackageResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreatePackageRequest() {
    return { projectId: "", package: undefined };
}
exports.CreatePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.package, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePackageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? SylkPackage_1.SylkPackage.fromJSON(object.package) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package ? SylkPackage_1.SylkPackage.toJSON(message.package) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreatePackageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (object.package !== undefined && object.package !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.package)
            : undefined;
        return message;
    },
};
function createBaseCreatePackageResponse() {
    return { projectId: "", result: undefined };
}
exports.CreatePackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.result !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreatePackageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.result = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            result: isSet(object.result) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.result !== undefined &&
            (obj.result = message.result ? SylkPackage_1.SylkPackageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdatePackageRequest() {
    return { package: "", projectId: "", update: undefined };
}
exports.UpdatePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.package !== "") {
            writer.uint32(10).string(message.package);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        if (message.update !== undefined) {
            SylkPackage_1.SylkPackage.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePackageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkPackage_1.SylkPackage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            package: isSet(object.package) ? String(object.package) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            update: isSet(object.update) ? SylkPackage_1.SylkPackage.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.package !== undefined && (obj.package = message.package);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.update !== undefined && (obj.update = message.update ? SylkPackage_1.SylkPackage.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdatePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdatePackageRequest();
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkPackage_1.SylkPackage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdatePackageResponse() {
    return { projectId: "", package: "", updated: undefined };
}
exports.UpdatePackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.updated !== undefined) {
            SylkPackage_1.SylkPackageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdatePackageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkPackage_1.SylkPackageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            updated: isSet(object.updated) ? SylkPackage_1.SylkPackageDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkPackage_1.SylkPackageDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdatePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdatePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkPackage_1.SylkPackageDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeletePackageRequest() {
    return { package: "", projectId: "" };
}
exports.DeletePackageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.package !== "") {
            writer.uint32(10).string(message.package);
        }
        if (message.projectId !== "") {
            writer.uint32(18).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePackageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            package: isSet(object.package) ? String(object.package) : "",
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.package !== undefined && (obj.package = message.package);
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.DeletePackageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeletePackageRequest();
        message.package = (_a = object.package) !== null && _a !== void 0 ? _a : "";
        message.projectId = (_b = object.projectId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeletePackageResponse() {
    return { projectId: "", package: "" };
}
exports.DeletePackageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeletePackageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        return obj;
    },
    create(base) {
        return exports.DeletePackageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeletePackageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetServiceRequest() {
    return { projectId: "", service: "" };
}
exports.GetServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.GetServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetServiceResponse() {
    return { result: undefined };
}
exports.GetServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetServiceResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== undefined) {
            SylkService_1.SylkService.encode(message.service, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateServiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = SylkService_1.SylkService.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? SylkService_1.SylkService.fromJSON(object.service) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service ? SylkService_1.SylkService.toJSON(message.service) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (object.service !== undefined && object.service !== null)
            ? SylkService_1.SylkService.fromPartial(object.service)
            : undefined;
        return message;
    },
};
function createBaseCreateServiceResponse() {
    return { projectId: "", result: undefined };
}
exports.CreateServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.result !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.result = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            result: isSet(object.result) ? SylkService_1.SylkServiceDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.result !== undefined &&
            (obj.result = message.result ? SylkService_1.SylkServiceDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateServiceResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateServiceRequest() {
    return { projectId: "", service: "", update: undefined };
}
exports.UpdateServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.update !== undefined) {
            SylkService_1.SylkService.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateServiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkService_1.SylkService.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
            update: isSet(object.update) ? SylkService_1.SylkService.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.update !== undefined && (obj.update = message.update ? SylkService_1.SylkService.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkService_1.SylkService.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateServiceResponse() {
    return { projectId: "", service: "", updated: undefined };
}
exports.UpdateServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.updated !== undefined) {
            SylkService_1.SylkServiceDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkService_1.SylkServiceDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
            updated: isSet(object.updated) ? SylkService_1.SylkServiceDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkService_1.SylkServiceDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateServiceResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkService_1.SylkServiceDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteServiceRequest() {
    return { projectId: "", service: "" };
}
exports.DeleteServiceRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteServiceRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.DeleteServiceRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteServiceRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteServiceResponse() {
    return { projectId: "", service: "" };
}
exports.DeleteServiceResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteServiceResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        return obj;
    },
    create(base) {
        return exports.DeleteServiceResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteServiceResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListServicesRequest() {
    return { projectId: "" };
}
exports.ListServicesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListServicesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.ListServicesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListServicesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListPackagesRequest() {
    return { projectId: "" };
}
exports.ListPackagesRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListPackagesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { projectId: isSet(object.projectId) ? String(object.projectId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        return obj;
    },
    create(base) {
        return exports.ListPackagesRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListPackagesRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetMessageRequest() {
    return { projectId: "", message: "" };
}
exports.GetMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create(base) {
        return exports.GetMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMessageResponse() {
    return { result: undefined };
}
exports.GetMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMessageResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.message = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            message: isSet(object.message) ? SylkMessage_1.SylkMessage.fromJSON(object.message) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.message !== undefined && (obj.message = message.message ? SylkMessage_1.SylkMessage.toJSON(message.message) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.message = (object.message !== undefined && object.message !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.message)
            : undefined;
        return message;
    },
};
function createBaseCreateMessageResponse() {
    return { projectId: "", message: "", result: undefined };
}
exports.CreateMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.result !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.result = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            result: isSet(object.result) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.result !== undefined &&
            (obj.result = message.result ? SylkMessage_1.SylkMessageDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateMessageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateMessageRequest() {
    return { projectId: "", message: "", update: undefined };
}
exports.UpdateMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkMessage_1.SylkMessage.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            update: isSet(object.update) ? SylkMessage_1.SylkMessage.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.update !== undefined && (obj.update = message.update ? SylkMessage_1.SylkMessage.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMessage_1.SylkMessage.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMessageResponse() {
    return { projectId: "", message: "", updated: undefined };
}
exports.UpdateMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        if (message.updated !== undefined) {
            SylkMessage_1.SylkMessageDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkMessage_1.SylkMessageDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            updated: isSet(object.updated) ? SylkMessage_1.SylkMessageDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMessage_1.SylkMessageDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateMessageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMessage_1.SylkMessageDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteMessageRequest() {
    return { projectId: "", message: "" };
}
exports.DeleteMessageRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMessageRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create(base) {
        return exports.DeleteMessageRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteMessageRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteMessageResponse() {
    return { projectId: "", message: "" };
}
exports.DeleteMessageResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMessageResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },
    create(base) {
        return exports.DeleteMessageResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteMessageResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.message = (_b = object.message) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMethodRequest() {
    return { projectId: "", method: "" };
}
exports.GetMethodRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMethodRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create(base) {
        return exports.GetMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetMethodResponse() {
    return { result: undefined };
}
exports.GetMethodResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetMethodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetMethodResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodRequest() {
    return { projectId: "", service: "", method: undefined };
}
exports.CreateMethodRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.method !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.method, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMethodRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.method = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
            method: isSet(object.method) ? SylkMethod_1.SylkMethod.fromJSON(object.method) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.method !== undefined && (obj.method = message.method ? SylkMethod_1.SylkMethod.toJSON(message.method) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.method = (object.method !== undefined && object.method !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.method)
            : undefined;
        return message;
    },
};
function createBaseCreateMethodResponse() {
    return { projectId: "", service: "", result: undefined };
}
exports.CreateMethodResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.service !== "") {
            writer.uint32(18).string(message.service);
        }
        if (message.result !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.result, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateMethodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.service = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.result = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            service: isSet(object.service) ? String(object.service) : "",
            result: isSet(object.result) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.service !== undefined && (obj.service = message.service);
        message.result !== undefined &&
            (obj.result = message.result ? SylkMethod_1.SylkMethodDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateMethodResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.service = (_b = object.service) !== null && _b !== void 0 ? _b : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateMethodRequest() {
    return { projectId: "", method: "", update: undefined };
}
exports.UpdateMethodRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.update !== undefined) {
            SylkMethod_1.SylkMethod.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMethodRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkMethod_1.SylkMethod.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
            update: isSet(object.update) ? SylkMethod_1.SylkMethod.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        message.update !== undefined && (obj.update = message.update ? SylkMethod_1.SylkMethod.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkMethod_1.SylkMethod.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateMethodResponse() {
    return { projectId: "", method: "", updated: undefined };
}
exports.UpdateMethodResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        if (message.updated !== undefined) {
            SylkMethod_1.SylkMethodDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateMethodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkMethod_1.SylkMethodDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
            updated: isSet(object.updated) ? SylkMethod_1.SylkMethodDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkMethod_1.SylkMethodDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateMethodResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkMethod_1.SylkMethodDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteMethodRequest() {
    return { projectId: "", method: "" };
}
exports.DeleteMethodRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMethodRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create(base) {
        return exports.DeleteMethodRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteMethodRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteMethodResponse() {
    return { projectId: "", method: "" };
}
exports.DeleteMethodResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.method !== "") {
            writer.uint32(18).string(message.method);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteMethodResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.method = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            method: isSet(object.method) ? String(object.method) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.method !== undefined && (obj.method = message.method);
        return obj;
    },
    create(base) {
        return exports.DeleteMethodResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteMethodResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.method = (_b = object.method) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetFieldRequest() {
    return { projectId: "", field: "" };
}
exports.GetFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        return obj;
    },
    create(base) {
        return exports.GetFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetFieldResponse() {
    return { result: undefined };
}
exports.GetFieldResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetFieldResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateFieldRequest() {
    return { projectId: "", field: "", update: undefined };
}
exports.UpdateFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        if (message.update !== undefined) {
            SylkField_1.SylkField.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFieldRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkField_1.SylkField.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
            update: isSet(object.update) ? SylkField_1.SylkField.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        message.update !== undefined && (obj.update = message.update ? SylkField_1.SylkField.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
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
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
            updated: isSet(object.updated) ? SylkField_1.SylkFieldDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkField_1.SylkFieldDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateFieldResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkField_1.SylkFieldDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteFieldRequest() {
    return { projectId: "", field: "" };
}
exports.DeleteFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteFieldRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        return obj;
    },
    create(base) {
        return exports.DeleteFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteFieldRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteFieldResponse() {
    return { projectId: "", field: "" };
}
exports.DeleteFieldResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.field !== "") {
            writer.uint32(18).string(message.field);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.field = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            field: isSet(object.field) ? String(object.field) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.field !== undefined && (obj.field = message.field);
        return obj;
    },
    create(base) {
        return exports.DeleteFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteFieldResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.field = (_b = object.field) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseCreateFieldRequest() {
    return { projectId: "", message: "", field: undefined };
}
exports.CreateFieldRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateFieldRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.message = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.field = SylkField_1.SylkField.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            message: isSet(object.message) ? String(object.message) : "",
            field: isSet(object.field) ? SylkField_1.SylkField.fromJSON(object.field) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.message !== undefined && (obj.message = message.message);
        message.field !== undefined && (obj.field = message.field ? SylkField_1.SylkField.toJSON(message.field) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateFieldRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateFieldRequest();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkField_1.SylkFieldDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateFieldResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkField_1.SylkFieldDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkField_1.SylkFieldDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkField_1.SylkFieldDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateFieldResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateFieldResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create(base) {
        return exports.GetEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumResponse() {
    return { result: undefined };
}
exports.GetEnumResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetEnumResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumRequest() {
    return { projectId: "", package: "", enum: undefined };
}
exports.CreateEnumRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.package !== "") {
            writer.uint32(18).string(message.package);
        }
        if (message.enum !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.enum, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.package = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.enum = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            package: isSet(object.package) ? String(object.package) : "",
            enum: isSet(object.enum) ? SylkEnum_1.SylkEnum.fromJSON(object.enum) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.package !== undefined && (obj.package = message.package);
        message.enum !== undefined && (obj.enum = message.enum ? SylkEnum_1.SylkEnum.toJSON(message.enum) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.package = (_b = object.package) !== null && _b !== void 0 ? _b : "";
        message.enum = (object.enum !== undefined && object.enum !== null) ? SylkEnum_1.SylkEnum.fromPartial(object.enum) : undefined;
        return message;
    },
};
function createBaseCreateEnumResponse() {
    return { projectId: "", result: undefined };
}
exports.CreateEnumResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.result !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.result, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.result = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            result: isSet(object.result) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.result) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.result !== undefined && (obj.result = message.result ? SylkEnum_1.SylkEnumDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateEnumResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumRequest() {
    return { projectId: "", enum: "", update: undefined };
}
exports.UpdateEnumRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.update !== undefined) {
            SylkEnum_1.SylkEnum.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkEnum_1.SylkEnum.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
            update: isSet(object.update) ? SylkEnum_1.SylkEnum.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        message.update !== undefined && (obj.update = message.update ? SylkEnum_1.SylkEnum.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnum_1.SylkEnum.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumResponse() {
    return { projectId: "", enum: "", updated: undefined };
}
exports.UpdateEnumResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.updated !== undefined) {
            SylkEnum_1.SylkEnumDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkEnum_1.SylkEnumDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
            updated: isSet(object.updated) ? SylkEnum_1.SylkEnumDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnum_1.SylkEnumDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateEnumResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkEnum_1.SylkEnumDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteEnumRequest() {
    return { projectId: "", enum: "" };
}
exports.DeleteEnumRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteEnumRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create(base) {
        return exports.DeleteEnumRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteEnumRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteEnumResponse() {
    return { projectId: "", enum: "" };
}
exports.DeleteEnumResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteEnumResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        return obj;
    },
    create(base) {
        return exports.DeleteEnumResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteEnumResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumValueRequest() {
    return { projectId: "", enumValue: "" };
}
exports.GetEnumValueRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create(base) {
        return exports.GetEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseGetEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseGetEnumValueResponse() {
    return { result: undefined };
}
exports.GetEnumValueResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseCreateEnumValueRequest() {
    return { projectId: "", enum: "", enumValue: undefined };
}
exports.CreateEnumValueRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enum !== "") {
            writer.uint32(18).string(message.enum);
        }
        if (message.enumValue !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.enumValue, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enum = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.enumValue = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enum: isSet(object.enum) ? String(object.enum) : "",
            enumValue: isSet(object.enumValue) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.enumValue) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enum !== undefined && (obj.enum = message.enum);
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue ? SylkEnumValue_1.SylkEnumValue.toJSON(message.enumValue) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseCreateEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enum = (_b = object.enum) !== null && _b !== void 0 ? _b : "";
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseCreateEnumValueResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.result)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumValueRequest() {
    return { projectId: "", enumValue: "", update: undefined };
}
exports.UpdateEnumValueRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.update !== undefined) {
            SylkEnumValue_1.SylkEnumValue.encode(message.update, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.update = SylkEnumValue_1.SylkEnumValue.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            update: isSet(object.update) ? SylkEnumValue_1.SylkEnumValue.fromJSON(object.update) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.update !== undefined && (obj.update = message.update ? SylkEnumValue_1.SylkEnumValue.toJSON(message.update) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        message.update = (object.update !== undefined && object.update !== null)
            ? SylkEnumValue_1.SylkEnumValue.fromPartial(object.update)
            : undefined;
        return message;
    },
};
function createBaseUpdateEnumValueResponse() {
    return { projectId: "", enumValue: "", updated: undefined };
}
exports.UpdateEnumValueResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        if (message.updated !== undefined) {
            SylkEnumValue_1.SylkEnumValueDisplay.encode(message.updated, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUpdateEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.updated = SylkEnumValue_1.SylkEnumValueDisplay.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
            updated: isSet(object.updated) ? SylkEnumValue_1.SylkEnumValueDisplay.fromJSON(object.updated) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        message.updated !== undefined &&
            (obj.updated = message.updated ? SylkEnumValue_1.SylkEnumValueDisplay.toJSON(message.updated) : undefined);
        return obj;
    },
    create(base) {
        return exports.UpdateEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseUpdateEnumValueResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        message.updated = (object.updated !== undefined && object.updated !== null)
            ? SylkEnumValue_1.SylkEnumValueDisplay.fromPartial(object.updated)
            : undefined;
        return message;
    },
};
function createBaseDeleteEnumValueRequest() {
    return { projectId: "", enumValue: "" };
}
exports.DeleteEnumValueRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteEnumValueRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create(base) {
        return exports.DeleteEnumValueRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteEnumValueRequest();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseDeleteEnumValueResponse() {
    return { projectId: "", enumValue: "" };
}
exports.DeleteEnumValueResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.projectId !== "") {
            writer.uint32(10).string(message.projectId);
        }
        if (message.enumValue !== "") {
            writer.uint32(18).string(message.enumValue);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDeleteEnumValueResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projectId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.enumValue = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projectId: isSet(object.projectId) ? String(object.projectId) : "",
            enumValue: isSet(object.enumValue) ? String(object.enumValue) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.projectId !== undefined && (obj.projectId = message.projectId);
        message.enumValue !== undefined && (obj.enumValue = message.enumValue);
        return obj;
    },
    create(base) {
        return exports.DeleteEnumValueResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseDeleteEnumValueResponse();
        message.projectId = (_a = object.projectId) !== null && _a !== void 0 ? _a : "";
        message.enumValue = (_b = object.enumValue) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListOrganizationsResponseCache() {
    return { organizations: [] };
}
exports.ListOrganizationsResponseCache = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.organizations) {
            exports.GetOrganizationResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListOrganizationsResponseCache();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.organizations.push(exports.GetOrganizationResponse.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            organizations: Array.isArray(object === null || object === void 0 ? void 0 : object.organizations)
                ? object.organizations.map((e) => exports.GetOrganizationResponse.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.organizations) {
            obj.organizations = message.organizations.map((e) => e ? exports.GetOrganizationResponse.toJSON(e) : undefined);
        }
        else {
            obj.organizations = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListOrganizationsResponseCache.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListOrganizationsResponseCache();
        message.organizations = ((_a = object.organizations) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GetOrganizationResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseListProjectsRequest() {
    return { orgId: "" };
}
exports.ListProjectsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProjectsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.ListProjectsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListProjectsRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseCreateProjectRequest() {
    return { orgId: "", project: undefined };
}
exports.CreateProjectRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.project !== undefined) {
            SylkProject_1.SylkProject.encode(message.project, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.project = SylkProject_1.SylkProject.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            project: isSet(object.project) ? SylkProject_1.SylkProject.fromJSON(object.project) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.project !== undefined && (obj.project = message.project ? SylkProject_1.SylkProject.toJSON(message.project) : undefined);
        return obj;
    },
    create(base) {
        return exports.CreateProjectRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateProjectRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.project = (object.project !== undefined && object.project !== null)
            ? SylkProject_1.SylkProject.fromPartial(object.project)
            : undefined;
        return message;
    },
};
function createBaseCreateProjectResponse() {
    return { result: undefined, orgId: "" };
}
exports.CreateProjectResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkProject_1.SylkProjectDisplay.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateProjectResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkProject_1.SylkProjectDisplay.decode(reader, reader.uint32());
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            result: isSet(object.result) ? SylkProject_1.SylkProjectDisplay.fromJSON(object.result) : undefined,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkProject_1.SylkProjectDisplay.toJSON(message.result) : undefined);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.CreateProjectResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateProjectResponse();
        message.result = (object.result !== undefined && object.result !== null)
            ? SylkProject_1.SylkProjectDisplay.fromPartial(object.result)
            : undefined;
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListProjectsResponseCache() {
    return { projects: [] };
}
exports.ListProjectsResponseCache = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.projects) {
            exports.GetProjectResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListProjectsResponseCache();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.projects.push(exports.GetProjectResponse.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            projects: Array.isArray(object === null || object === void 0 ? void 0 : object.projects) ? object.projects.map((e) => exports.GetProjectResponse.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.projects) {
            obj.projects = message.projects.map((e) => e ? exports.GetProjectResponse.toJSON(e) : undefined);
        }
        else {
            obj.projects = [];
        }
        return obj;
    },
    create(base) {
        return exports.ListProjectsResponseCache.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListProjectsResponseCache();
        message.projects = ((_a = object.projects) === null || _a === void 0 ? void 0 : _a.map((e) => exports.GetProjectResponse.fromPartial(e))) || [];
        return message;
    },
};
function createBaseCachedSession() {
    return { session: undefined };
}
exports.CachedSession = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.session !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.session), writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCachedSession();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.session = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { session: isObject(object.session) ? object.session : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.session !== undefined && (obj.session = message.session);
        return obj;
    },
    create(base) {
        return exports.CachedSession.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCachedSession();
        message.session = (_a = object.session) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
function createBaseCreateAccessTokenRequest() {
    return { orgId: "", expiresAt: undefined, description: "" };
}
exports.CreateAccessTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        if (message.expiresAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.expiresAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.description !== "") {
            writer.uint32(26).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.expiresAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag != 26) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            expiresAt: isSet(object.expiresAt) ? fromJsonTimestamp(object.expiresAt) : undefined,
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.expiresAt !== undefined && (obj.expiresAt = message.expiresAt.toISOString());
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create(base) {
        return exports.CreateAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseCreateAccessTokenRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        message.expiresAt = (_b = object.expiresAt) !== null && _b !== void 0 ? _b : undefined;
        message.description = (_c = object.description) !== null && _c !== void 0 ? _c : "";
        return message;
    },
};
function createBaseCreateAccessTokenResponse() {
    return { status: "" };
}
exports.CreateAccessTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseCreateAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.CreateAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseCreateAccessTokenResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseListAccessTokensRequest() {
    return { orgId: "" };
}
exports.ListAccessTokensRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.orgId !== "") {
            writer.uint32(10).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListAccessTokensRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { orgId: isSet(object.orgId) ? String(object.orgId) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.ListAccessTokensRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseListAccessTokensRequest();
        message.orgId = (_a = object.orgId) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetAccessTokenResponse() {
    return { result: undefined };
}
exports.GetAccessTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.result !== undefined) {
            SylkUser_1.PersonalAccessToken.encode(message.result, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.result = SylkUser_1.PersonalAccessToken.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { result: isSet(object.result) ? SylkUser_1.PersonalAccessToken.fromJSON(object.result) : undefined };
    },
    toJSON(message) {
        const obj = {};
        message.result !== undefined &&
            (obj.result = message.result ? SylkUser_1.PersonalAccessToken.toJSON(message.result) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        const message = createBaseGetAccessTokenResponse();
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
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { token: isSet(object.token) ? String(object.token) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        return obj;
    },
    create(base) {
        return exports.GetAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetAccessTokenRequest();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseRevokeAccessTokenRequest() {
    return { token: "", orgId: "" };
}
exports.RevokeAccessTokenRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.token !== "") {
            writer.uint32(10).string(message.token);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeAccessTokenRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.token = reader.string();
                    continue;
                case 2:
                    if (tag != 18) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            token: isSet(object.token) ? String(object.token) : "",
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.token !== undefined && (obj.token = message.token);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        return obj;
    },
    create(base) {
        return exports.RevokeAccessTokenRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseRevokeAccessTokenRequest();
        message.token = (_a = object.token) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseRevokeAccessTokenResponse() {
    return { status: "" };
}
exports.RevokeAccessTokenResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.status !== "") {
            writer.uint32(10).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseRevokeAccessTokenResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag != 10) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
            }
            if ((tag & 7) == 4 || tag == 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { status: isSet(object.status) ? String(object.status) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    create(base) {
        return exports.RevokeAccessTokenResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseRevokeAccessTokenResponse();
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds * 1000;
    millis += t.nanos / 1000000;
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
//# sourceMappingURL=SylkApi.js.map