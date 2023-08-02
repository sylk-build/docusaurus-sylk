"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListActivityLogsRequest = exports.PaginationRequest = exports.GetActivityLogsResponse = exports.PaginationResponse = exports.ActivityLog = exports.EncodedPagination = exports.resourceTypesToJSON = exports.resourceTypesFromJSON = exports.ResourceTypes = exports.actionTypesToJSON = exports.actionTypesFromJSON = exports.ActionTypes = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const struct_1 = require("../../../google/protobuf/struct");
const timestamp_1 = require("../../../google/protobuf/timestamp");
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.ActivityLog.v1.ActionTypes] - None */
var ActionTypes;
(function (ActionTypes) {
    /** UNKNOWN_ACTIONTYPES - [sylk.ActivityLog.v1.ActionTypes] - Default enum value for "sylk.ActivityLog.v1.ActionTypes" */
    ActionTypes[ActionTypes["UNKNOWN_ACTIONTYPES"] = 0] = "UNKNOWN_ACTIONTYPES";
    /** createEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createEnumValue"] = 1] = "createEnumValue";
    /** updateEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateEnumValue"] = 2] = "updateEnumValue";
    /** deleteEnumValue - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteEnumValue"] = 3] = "deleteEnumValue";
    /** createField - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createField"] = 4] = "createField";
    /** updateField - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateField"] = 5] = "updateField";
    /** deleteField - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteField"] = 6] = "deleteField";
    /** createMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createMessage"] = 7] = "createMessage";
    /** updateMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateMessage"] = 8] = "updateMessage";
    /** deleteMessage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteMessage"] = 9] = "deleteMessage";
    /** createPackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createPackage"] = 10] = "createPackage";
    /** updatePackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updatePackage"] = 11] = "updatePackage";
    /** deletePackage - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deletePackage"] = 12] = "deletePackage";
    /** createService - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createService"] = 13] = "createService";
    /** updateService - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateService"] = 14] = "updateService";
    /** deleteService - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteService"] = 15] = "deleteService";
    /** createProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createProject"] = 16] = "createProject";
    /** updateProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateProject"] = 17] = "updateProject";
    /** deleteProject - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteProject"] = 18] = "deleteProject";
    /** createEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createEnum"] = 19] = "createEnum";
    /** updateEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateEnum"] = 20] = "updateEnum";
    /** deleteEnum - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteEnum"] = 21] = "deleteEnum";
    /** addUser - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["addUser"] = 22] = "addUser";
    /** updateUserRole - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateUserRole"] = 23] = "updateUserRole";
    /** createOrganization - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createOrganization"] = 24] = "createOrganization";
    /** updateOrganization - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateOrganization"] = 25] = "updateOrganization";
    /** removeUser - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["removeUser"] = 26] = "removeUser";
    /** createMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["createMethod"] = 27] = "createMethod";
    /** updateMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["updateMethod"] = 28] = "updateMethod";
    /** deleteMethod - [sylk.ActivityLog.v1.ActionTypes] - None */
    ActionTypes[ActionTypes["deleteMethod"] = 29] = "deleteMethod";
    ActionTypes[ActionTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ActionTypes = exports.ActionTypes || (exports.ActionTypes = {}));
function actionTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_ACTIONTYPES":
            return ActionTypes.UNKNOWN_ACTIONTYPES;
        case 1:
        case "createEnumValue":
            return ActionTypes.createEnumValue;
        case 2:
        case "updateEnumValue":
            return ActionTypes.updateEnumValue;
        case 3:
        case "deleteEnumValue":
            return ActionTypes.deleteEnumValue;
        case 4:
        case "createField":
            return ActionTypes.createField;
        case 5:
        case "updateField":
            return ActionTypes.updateField;
        case 6:
        case "deleteField":
            return ActionTypes.deleteField;
        case 7:
        case "createMessage":
            return ActionTypes.createMessage;
        case 8:
        case "updateMessage":
            return ActionTypes.updateMessage;
        case 9:
        case "deleteMessage":
            return ActionTypes.deleteMessage;
        case 10:
        case "createPackage":
            return ActionTypes.createPackage;
        case 11:
        case "updatePackage":
            return ActionTypes.updatePackage;
        case 12:
        case "deletePackage":
            return ActionTypes.deletePackage;
        case 13:
        case "createService":
            return ActionTypes.createService;
        case 14:
        case "updateService":
            return ActionTypes.updateService;
        case 15:
        case "deleteService":
            return ActionTypes.deleteService;
        case 16:
        case "createProject":
            return ActionTypes.createProject;
        case 17:
        case "updateProject":
            return ActionTypes.updateProject;
        case 18:
        case "deleteProject":
            return ActionTypes.deleteProject;
        case 19:
        case "createEnum":
            return ActionTypes.createEnum;
        case 20:
        case "updateEnum":
            return ActionTypes.updateEnum;
        case 21:
        case "deleteEnum":
            return ActionTypes.deleteEnum;
        case 22:
        case "addUser":
            return ActionTypes.addUser;
        case 23:
        case "updateUserRole":
            return ActionTypes.updateUserRole;
        case 24:
        case "createOrganization":
            return ActionTypes.createOrganization;
        case 25:
        case "updateOrganization":
            return ActionTypes.updateOrganization;
        case 26:
        case "removeUser":
            return ActionTypes.removeUser;
        case 27:
        case "createMethod":
            return ActionTypes.createMethod;
        case 28:
        case "updateMethod":
            return ActionTypes.updateMethod;
        case 29:
        case "deleteMethod":
            return ActionTypes.deleteMethod;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ActionTypes.UNRECOGNIZED;
    }
}
exports.actionTypesFromJSON = actionTypesFromJSON;
function actionTypesToJSON(object) {
    switch (object) {
        case ActionTypes.UNKNOWN_ACTIONTYPES:
            return "UNKNOWN_ACTIONTYPES";
        case ActionTypes.createEnumValue:
            return "createEnumValue";
        case ActionTypes.updateEnumValue:
            return "updateEnumValue";
        case ActionTypes.deleteEnumValue:
            return "deleteEnumValue";
        case ActionTypes.createField:
            return "createField";
        case ActionTypes.updateField:
            return "updateField";
        case ActionTypes.deleteField:
            return "deleteField";
        case ActionTypes.createMessage:
            return "createMessage";
        case ActionTypes.updateMessage:
            return "updateMessage";
        case ActionTypes.deleteMessage:
            return "deleteMessage";
        case ActionTypes.createPackage:
            return "createPackage";
        case ActionTypes.updatePackage:
            return "updatePackage";
        case ActionTypes.deletePackage:
            return "deletePackage";
        case ActionTypes.createService:
            return "createService";
        case ActionTypes.updateService:
            return "updateService";
        case ActionTypes.deleteService:
            return "deleteService";
        case ActionTypes.createProject:
            return "createProject";
        case ActionTypes.updateProject:
            return "updateProject";
        case ActionTypes.deleteProject:
            return "deleteProject";
        case ActionTypes.createEnum:
            return "createEnum";
        case ActionTypes.updateEnum:
            return "updateEnum";
        case ActionTypes.deleteEnum:
            return "deleteEnum";
        case ActionTypes.addUser:
            return "addUser";
        case ActionTypes.updateUserRole:
            return "updateUserRole";
        case ActionTypes.createOrganization:
            return "createOrganization";
        case ActionTypes.updateOrganization:
            return "updateOrganization";
        case ActionTypes.removeUser:
            return "removeUser";
        case ActionTypes.createMethod:
            return "createMethod";
        case ActionTypes.updateMethod:
            return "updateMethod";
        case ActionTypes.deleteMethod:
            return "deleteMethod";
        case ActionTypes.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.actionTypesToJSON = actionTypesToJSON;
/** [sylk.ActivityLog.v1.ResourceTypes] - None */
var ResourceTypes;
(function (ResourceTypes) {
    /** UNKNOWN_RESOURCETYPES - [sylk.ActivityLog.v1.ResourceTypes] - Default enum value for "sylk.ActivityLog.v1.ResourceTypes" */
    ResourceTypes[ResourceTypes["UNKNOWN_RESOURCETYPES"] = 0] = "UNKNOWN_RESOURCETYPES";
    /** User - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["User"] = 1] = "User";
    /** Organization - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Organization"] = 2] = "Organization";
    /** Package - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Package"] = 3] = "Package";
    /** Service - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Service"] = 4] = "Service";
    /** Message - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Message"] = 5] = "Message";
    /** Enum - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Enum"] = 6] = "Enum";
    /** Method - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Method"] = 7] = "Method";
    /** Field - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Field"] = 8] = "Field";
    /** EnumValue - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["EnumValue"] = 9] = "EnumValue";
    /** Project - [sylk.ActivityLog.v1.ResourceTypes] - None */
    ResourceTypes[ResourceTypes["Project"] = 10] = "Project";
    ResourceTypes[ResourceTypes["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function resourceTypesFromJSON(object) {
    switch (object) {
        case 0:
        case "UNKNOWN_RESOURCETYPES":
            return ResourceTypes.UNKNOWN_RESOURCETYPES;
        case 1:
        case "User":
            return ResourceTypes.User;
        case 2:
        case "Organization":
            return ResourceTypes.Organization;
        case 3:
        case "Package":
            return ResourceTypes.Package;
        case 4:
        case "Service":
            return ResourceTypes.Service;
        case 5:
        case "Message":
            return ResourceTypes.Message;
        case 6:
        case "Enum":
            return ResourceTypes.Enum;
        case 7:
        case "Method":
            return ResourceTypes.Method;
        case 8:
        case "Field":
            return ResourceTypes.Field;
        case 9:
        case "EnumValue":
            return ResourceTypes.EnumValue;
        case 10:
        case "Project":
            return ResourceTypes.Project;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ResourceTypes.UNRECOGNIZED;
    }
}
exports.resourceTypesFromJSON = resourceTypesFromJSON;
function resourceTypesToJSON(object) {
    switch (object) {
        case ResourceTypes.UNKNOWN_RESOURCETYPES:
            return "UNKNOWN_RESOURCETYPES";
        case ResourceTypes.User:
            return "User";
        case ResourceTypes.Organization:
            return "Organization";
        case ResourceTypes.Package:
            return "Package";
        case ResourceTypes.Service:
            return "Service";
        case ResourceTypes.Message:
            return "Message";
        case ResourceTypes.Enum:
            return "Enum";
        case ResourceTypes.Method:
            return "Method";
        case ResourceTypes.Field:
            return "Field";
        case ResourceTypes.EnumValue:
            return "EnumValue";
        case ResourceTypes.Project:
            return "Project";
        case ResourceTypes.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.resourceTypesToJSON = resourceTypesToJSON;
function createBaseEncodedPagination() {
    return { params: undefined, skip: 0, totalSize: 0 };
}
exports.EncodedPagination = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.params), writer.uint32(10).fork()).ldelim();
        }
        if (message.skip !== 0) {
            writer.uint32(16).int32(message.skip);
        }
        if (message.totalSize !== 0) {
            writer.uint32(24).int32(message.totalSize);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseEncodedPagination();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.params = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 16) {
                        break;
                    }
                    message.skip = reader.int32();
                    continue;
                case 3:
                    if (tag !== 24) {
                        break;
                    }
                    message.totalSize = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            params: isObject(object.params) ? object.params : undefined,
            skip: isSet(object.skip) ? Number(object.skip) : 0,
            totalSize: isSet(object.totalSize) ? Number(object.totalSize) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined && (obj.params = message.params);
        message.skip !== undefined && (obj.skip = Math.round(message.skip));
        message.totalSize !== undefined && (obj.totalSize = Math.round(message.totalSize));
        return obj;
    },
    create(base) {
        return exports.EncodedPagination.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseEncodedPagination();
        message.params = (_a = object.params) !== null && _a !== void 0 ? _a : undefined;
        message.skip = (_b = object.skip) !== null && _b !== void 0 ? _b : 0;
        message.totalSize = (_c = object.totalSize) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseActivityLog() {
    return { userId: "", createdAt: undefined, metadata: undefined, orgId: "", id: "", userEmail: "", type: 0 };
}
exports.ActivityLog = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.createdAt !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            struct_1.Struct.encode(struct_1.Struct.wrap(message.metadata), writer.uint32(26).fork()).ldelim();
        }
        if (message.orgId !== "") {
            writer.uint32(34).string(message.orgId);
        }
        if (message.id !== "") {
            writer.uint32(42).string(message.id);
        }
        if (message.userEmail !== "") {
            writer.uint32(50).string(message.userEmail);
        }
        if (message.type !== 0) {
            writer.uint32(56).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseActivityLog();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.metadata = struct_1.Struct.unwrap(struct_1.Struct.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 34) {
                        break;
                    }
                    message.orgId = reader.string();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                case 6:
                    if (tag !== 50) {
                        break;
                    }
                    message.userEmail = reader.string();
                    continue;
                case 7:
                    if (tag !== 56) {
                        break;
                    }
                    message.type = reader.int32();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            userId: isSet(object.userId) ? String(object.userId) : "",
            createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
            metadata: isObject(object.metadata) ? object.metadata : undefined,
            orgId: isSet(object.orgId) ? String(object.orgId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            userEmail: isSet(object.userEmail) ? String(object.userEmail) : "",
            type: isSet(object.type) ? actionTypesFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
        message.metadata !== undefined && (obj.metadata = message.metadata);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.id !== undefined && (obj.id = message.id);
        message.userEmail !== undefined && (obj.userEmail = message.userEmail);
        message.type !== undefined && (obj.type = actionTypesToJSON(message.type));
        return obj;
    },
    create(base) {
        return exports.ActivityLog.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g;
        const message = createBaseActivityLog();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.createdAt = (_b = object.createdAt) !== null && _b !== void 0 ? _b : undefined;
        message.metadata = (_c = object.metadata) !== null && _c !== void 0 ? _c : undefined;
        message.orgId = (_d = object.orgId) !== null && _d !== void 0 ? _d : "";
        message.id = (_e = object.id) !== null && _e !== void 0 ? _e : "";
        message.userEmail = (_f = object.userEmail) !== null && _f !== void 0 ? _f : "";
        message.type = (_g = object.type) !== null && _g !== void 0 ? _g : 0;
        return message;
    },
};
function createBasePaginationResponse() {
    return { nextPageToken: "" };
}
exports.PaginationResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.nextPageToken !== "") {
            writer.uint32(10).string(message.nextPageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginationResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.nextPageToken = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { nextPageToken: isSet(object.nextPageToken) ? String(object.nextPageToken) : "" };
    },
    toJSON(message) {
        const obj = {};
        message.nextPageToken !== undefined && (obj.nextPageToken = message.nextPageToken);
        return obj;
    },
    create(base) {
        return exports.PaginationResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBasePaginationResponse();
        message.nextPageToken = (_a = object.nextPageToken) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
function createBaseGetActivityLogsResponse() {
    return { logs: [], pagination: undefined };
}
exports.GetActivityLogsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.logs) {
            exports.ActivityLog.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            exports.PaginationResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetActivityLogsResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 10) {
                        break;
                    }
                    message.logs.push(exports.ActivityLog.decode(reader, reader.uint32()));
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pagination = exports.PaginationResponse.decode(reader, reader.uint32());
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            logs: Array.isArray(object === null || object === void 0 ? void 0 : object.logs) ? object.logs.map((e) => exports.ActivityLog.fromJSON(e)) : [],
            pagination: isSet(object.pagination) ? exports.PaginationResponse.fromJSON(object.pagination) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.logs) {
            obj.logs = message.logs.map((e) => e ? exports.ActivityLog.toJSON(e) : undefined);
        }
        else {
            obj.logs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? exports.PaginationResponse.toJSON(message.pagination) : undefined);
        return obj;
    },
    create(base) {
        return exports.GetActivityLogsResponse.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a;
        const message = createBaseGetActivityLogsResponse();
        message.logs = ((_a = object.logs) === null || _a === void 0 ? void 0 : _a.map((e) => exports.ActivityLog.fromPartial(e))) || [];
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? exports.PaginationResponse.fromPartial(object.pagination)
            : undefined;
        return message;
    },
};
function createBasePaginationRequest() {
    return { pageSize: 0, pageToken: "" };
}
exports.PaginationRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pageSize !== 0) {
            writer.uint32(8).int32(message.pageSize);
        }
        if (message.pageToken !== "") {
            writer.uint32(18).string(message.pageToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePaginationRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if (tag !== 8) {
                        break;
                    }
                    message.pageSize = reader.int32();
                    continue;
                case 2:
                    if (tag !== 18) {
                        break;
                    }
                    message.pageToken = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            pageSize: isSet(object.pageSize) ? Number(object.pageSize) : 0,
            pageToken: isSet(object.pageToken) ? String(object.pageToken) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.pageSize !== undefined && (obj.pageSize = Math.round(message.pageSize));
        message.pageToken !== undefined && (obj.pageToken = message.pageToken);
        return obj;
    },
    create(base) {
        return exports.PaginationRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePaginationRequest();
        message.pageSize = (_a = object.pageSize) !== null && _a !== void 0 ? _a : 0;
        message.pageToken = (_b = object.pageToken) !== null && _b !== void 0 ? _b : "";
        return message;
    },
};
function createBaseListActivityLogsRequest() {
    return {
        userId: "",
        orgId: "",
        until: undefined,
        activityType: 0,
        pagination: undefined,
        resourceType: 0,
        resource: "",
    };
}
exports.ListActivityLogsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.userId !== "") {
            writer.uint32(10).string(message.userId);
        }
        if (message.orgId !== "") {
            writer.uint32(18).string(message.orgId);
        }
        if (message.until !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.until), writer.uint32(26).fork()).ldelim();
        }
        if (message.activityType !== 0) {
            writer.uint32(32).int32(message.activityType);
        }
        if (message.pagination !== undefined) {
            exports.PaginationRequest.encode(message.pagination, writer.uint32(42).fork()).ldelim();
        }
        if (message.resourceType !== 0) {
            writer.uint32(48).int32(message.resourceType);
        }
        if (message.resource !== "") {
            writer.uint32(58).string(message.resource);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListActivityLogsRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
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
                case 3:
                    if (tag !== 26) {
                        break;
                    }
                    message.until = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    continue;
                case 4:
                    if (tag !== 32) {
                        break;
                    }
                    message.activityType = reader.int32();
                    continue;
                case 5:
                    if (tag !== 42) {
                        break;
                    }
                    message.pagination = exports.PaginationRequest.decode(reader, reader.uint32());
                    continue;
                case 6:
                    if (tag !== 48) {
                        break;
                    }
                    message.resourceType = reader.int32();
                    continue;
                case 7:
                    if (tag !== 58) {
                        break;
                    }
                    message.resource = reader.string();
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
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
            until: isSet(object.until) ? fromJsonTimestamp(object.until) : undefined,
            activityType: isSet(object.activityType) ? actionTypesFromJSON(object.activityType) : 0,
            pagination: isSet(object.pagination) ? exports.PaginationRequest.fromJSON(object.pagination) : undefined,
            resourceType: isSet(object.resourceType) ? resourceTypesFromJSON(object.resourceType) : 0,
            resource: isSet(object.resource) ? String(object.resource) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.userId !== undefined && (obj.userId = message.userId);
        message.orgId !== undefined && (obj.orgId = message.orgId);
        message.until !== undefined && (obj.until = message.until.toISOString());
        message.activityType !== undefined && (obj.activityType = actionTypesToJSON(message.activityType));
        message.pagination !== undefined &&
            (obj.pagination = message.pagination ? exports.PaginationRequest.toJSON(message.pagination) : undefined);
        message.resourceType !== undefined && (obj.resourceType = resourceTypesToJSON(message.resourceType));
        message.resource !== undefined && (obj.resource = message.resource);
        return obj;
    },
    create(base) {
        return exports.ListActivityLogsRequest.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f;
        const message = createBaseListActivityLogsRequest();
        message.userId = (_a = object.userId) !== null && _a !== void 0 ? _a : "";
        message.orgId = (_b = object.orgId) !== null && _b !== void 0 ? _b : "";
        message.until = (_c = object.until) !== null && _c !== void 0 ? _c : undefined;
        message.activityType = (_d = object.activityType) !== null && _d !== void 0 ? _d : 0;
        message.pagination = (object.pagination !== undefined && object.pagination !== null)
            ? exports.PaginationRequest.fromPartial(object.pagination)
            : undefined;
        message.resourceType = (_e = object.resourceType) !== null && _e !== void 0 ? _e : 0;
        message.resource = (_f = object.resource) !== null && _f !== void 0 ? _f : "";
        return message;
    },
};
function toTimestamp(date) {
    const seconds = date.getTime() / 1000;
    const nanos = (date.getTime() % 1000) * 1000000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = (t.seconds || 0) * 1000;
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
//# sourceMappingURL=ActivityLog.js.map