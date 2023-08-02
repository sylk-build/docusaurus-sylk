"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsV2 = exports.FieldsV2 = exports.MethodsV2 = exports.EnumValuesV2 = exports.EnumsV2 = exports.TagsV2 = exports.MessagesV2 = exports.ServicesV2 = exports.PackagesV2 = exports.FoldersV2 = exports.ServicesV1 = exports.EnumValuesV1 = exports.ProjectsV1 = exports.FieldsV1 = exports.OrganizationsV1 = exports.ActivitiesV1 = exports.MessagesV1 = exports.EnumsV1 = exports.UsersV1 = exports.MethodsV1 = exports.PackagesV1 = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const rxjs_1 = require("rxjs");
const Packages_1 = require("./protos/sylk/Packages/v1/Packages");
const Methods_1 = require("./protos/sylk/Methods/v1/Methods");
const Users_1 = require("./protos/sylk/Users/v1/Users");
const Enums_1 = require("./protos/sylk/Enums/v1/Enums");
const Messages_1 = require("./protos/sylk/Messages/v1/Messages");
const Activities_1 = require("./protos/sylk/Activities/v1/Activities");
const Organizations_1 = require("./protos/sylk/Organizations/v1/Organizations");
const Fields_1 = require("./protos/sylk/Fields/v1/Fields");
const Projects_1 = require("./protos/sylk/Projects/v1/Projects");
const EnumValues_1 = require("./protos/sylk/EnumValues/v1/EnumValues");
const Services_1 = require("./protos/sylk/Services/v1/Services");
const Folders_1 = require("./protos/sylk/Folders/v2/Folders");
const Packages_2 = require("./protos/sylk/Packages/v2/Packages");
const Services_2 = require("./protos/sylk/Services/v2/Services");
const Messages_2 = require("./protos/sylk/Messages/v2/Messages");
const Tags_1 = require("./protos/sylk/Tags/v2/Tags");
const Enums_2 = require("./protos/sylk/Enums/v2/Enums");
const EnumValues_2 = require("./protos/sylk/EnumValues/v2/EnumValues");
const Methods_2 = require("./protos/sylk/Methods/v2/Methods");
const Fields_2 = require("./protos/sylk/Fields/v2/Fields");
const Integrations_1 = require("./protos/sylk/Integrations/v2/Integrations");
const ActivityLog_v1 = __importStar(require("./protos/sylk/ActivityLog/v1/ActivityLog"));
const SylkApi_v1 = __importStar(require("./protos/sylk/SylkApi/v1/SylkApi"));
const Folders_v2 = __importStar(require("./protos/sylk/Folders/v2/Folders"));
const Packages_v2 = __importStar(require("./protos/sylk/Packages/v2/Packages"));
const Services_v2 = __importStar(require("./protos/sylk/Services/v2/Services"));
const Messages_v2 = __importStar(require("./protos/sylk/Messages/v2/Messages"));
const Tags_v2 = __importStar(require("./protos/sylk/Tags/v2/Tags"));
const Enums_v2 = __importStar(require("./protos/sylk/Enums/v2/Enums"));
const EnumValues_v2 = __importStar(require("./protos/sylk/EnumValues/v2/EnumValues"));
const Methods_v2 = __importStar(require("./protos/sylk/Methods/v2/Methods"));
const Fields_v2 = __importStar(require("./protos/sylk/Fields/v2/Fields"));
const Integrations_v2 = __importStar(require("./protos/sylk/Integrations/v2/Integrations"));
const interceptorsProviders = [];
const _DEFAULT_OPTION = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
    "interceptors": interceptorsProviders,
};
const DEFAULT_CLIENT_OPTS = {
    host: "localhost",
    port: 44880,
    metadata: new grpc_js_1.Metadata(),
    channelCreds: grpc_js_1.credentials.createInsecure()
};
class PackagesV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Packages_v1_client = new Packages_1.PackagesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetPackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.getPackage.bind(this.Packages_v1_client))(SylkApi_v1.GetPackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.getPackage(SylkApi_v1.GetPackageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.createPackage.bind(this.Packages_v1_client))(SylkApi_v1.CreatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.createPackage(SylkApi_v1.CreatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeletePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.deletePackage.bind(this.Packages_v1_client))(SylkApi_v1.DeletePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.deletePackage(SylkApi_v1.DeletePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.updatePackage.bind(this.Packages_v1_client))(SylkApi_v1.UpdatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.updatePackage(SylkApi_v1.UpdatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    ListPackages(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Packages_v1_client.listPackages(SylkApi_v1.ListPackagesRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
}
exports.PackagesV1 = PackagesV1;
class MethodsV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Methods_v1_client = new Methods_1.MethodsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    CreateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.createMethod.bind(this.Methods_v1_client))(SylkApi_v1.CreateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.createMethod(SylkApi_v1.CreateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    GetMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.getMethod.bind(this.Methods_v1_client))(SylkApi_v1.GetMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.getMethod(SylkApi_v1.GetMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.deleteMethod.bind(this.Methods_v1_client))(SylkApi_v1.DeleteMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.deleteMethod(SylkApi_v1.DeleteMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.updateMethod.bind(this.Methods_v1_client))(SylkApi_v1.UpdateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.updateMethod(SylkApi_v1.UpdateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.MethodsV1 = MethodsV1;
class UsersV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Users_v1_client = new Users_1.UsersClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    CreateUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.createUser.bind(this.Users_v1_client))(SylkApi_v1.CreateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.createUser(SylkApi_v1.CreateUserRequest.fromJSON(request), metadata, callback);
        }
    }
    GetAccessToken(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.getAccessToken.bind(this.Users_v1_client))(SylkApi_v1.GetAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.getAccessToken(SylkApi_v1.GetAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateAccessToken(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.createAccessToken.bind(this.Users_v1_client))(SylkApi_v1.CreateAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.createAccessToken(SylkApi_v1.CreateAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    GetUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.getUser.bind(this.Users_v1_client))(SylkApi_v1.GetUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.getUser(SylkApi_v1.GetUserRequest.fromJSON(request), metadata, callback);
        }
    }
    ListAccessTokens(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Users_v1_client.listAccessTokens(SylkApi_v1.ListAccessTokensRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    RevokeAccessToken(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.revokeAccessToken.bind(this.Users_v1_client))(SylkApi_v1.RevokeAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.revokeAccessToken(SylkApi_v1.RevokeAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.updateUser.bind(this.Users_v1_client))(SylkApi_v1.UpdateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.updateUser(SylkApi_v1.UpdateUserRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.UsersV1 = UsersV1;
class EnumsV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Enums_v1_client = new Enums_1.EnumsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.getEnum.bind(this.Enums_v1_client))(SylkApi_v1.GetEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.getEnum(SylkApi_v1.GetEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.updateEnum.bind(this.Enums_v1_client))(SylkApi_v1.UpdateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.updateEnum(SylkApi_v1.UpdateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.deleteEnum.bind(this.Enums_v1_client))(SylkApi_v1.DeleteEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.deleteEnum(SylkApi_v1.DeleteEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.createEnum.bind(this.Enums_v1_client))(SylkApi_v1.CreateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.createEnum(SylkApi_v1.CreateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.EnumsV1 = EnumsV1;
class MessagesV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Messages_v1_client = new Messages_1.MessagesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.getMessage.bind(this.Messages_v1_client))(SylkApi_v1.GetMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.getMessage(SylkApi_v1.GetMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.updateMessage.bind(this.Messages_v1_client))(SylkApi_v1.UpdateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.updateMessage(SylkApi_v1.UpdateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.createMessage.bind(this.Messages_v1_client))(SylkApi_v1.CreateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.createMessage(SylkApi_v1.CreateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.deleteMessage.bind(this.Messages_v1_client))(SylkApi_v1.DeleteMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.deleteMessage(SylkApi_v1.DeleteMessageRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.MessagesV1 = MessagesV1;
class ActivitiesV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Activities_v1_client = new Activities_1.ActivitiesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    ListActivityLogs(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Activities_v1_client.listActivityLogs(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    GetActivityLogs(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Activities_v1_client.getActivityLogs.bind(this.Activities_v1_client))(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata);
        }
        else {
            return this.Activities_v1_client.getActivityLogs(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.ActivitiesV1 = ActivitiesV1;
class OrganizationsV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Organizations_v1_client = new Organizations_1.OrganizationsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    AcceprUserInvite(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.acceprUserInvite.bind(this.Organizations_v1_client))(SylkApi_v1.AcceptUserInviteRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.acceprUserInvite(SylkApi_v1.AcceptUserInviteRequest.fromJSON(request), metadata, callback);
        }
    }
    GetOrganization(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.getOrganization.bind(this.Organizations_v1_client))(SylkApi_v1.GetOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.getOrganization(SylkApi_v1.GetOrganizationRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateOrganization(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateOrganization.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateOrganization(SylkApi_v1.UpdateOrganizationRequest.fromJSON(request), metadata, callback);
        }
    }
    ListOrganizations(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Organizations_v1_client.listOrganizations(SylkApi_v1.ListOrganizationsRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    AddUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.addUser.bind(this.Organizations_v1_client))(SylkApi_v1.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.addUser(SylkApi_v1.AddUserRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserStatus(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateUserStatus.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateUserStatus(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    }
    RemoveUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.removeUser.bind(this.Organizations_v1_client))(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.removeUser(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserRole(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateUserRole.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateUserRole(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.OrganizationsV1 = OrganizationsV1;
class FieldsV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Fields_v1_client = new Fields_1.FieldsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    CreateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.createField.bind(this.Fields_v1_client))(SylkApi_v1.CreateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.createField(SylkApi_v1.CreateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    GetField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.getField.bind(this.Fields_v1_client))(SylkApi_v1.GetFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.getField(SylkApi_v1.GetFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.deleteField.bind(this.Fields_v1_client))(SylkApi_v1.DeleteFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.deleteField(SylkApi_v1.DeleteFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.updateField.bind(this.Fields_v1_client))(SylkApi_v1.UpdateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.updateField(SylkApi_v1.UpdateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.FieldsV1 = FieldsV1;
class ProjectsV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Projects_v1_client = new Projects_1.ProjectsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    UpdateUserRoleProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateUserRoleProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateUserRoleProject(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    }
    RemoveUserProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.removeUserProject.bind(this.Projects_v1_client))(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.removeUserProject(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    }
    AddUserProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.addUserProject.bind(this.Projects_v1_client))(SylkApi_v1.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.addUserProject(SylkApi_v1.AddUserRequest.fromJSON(request), metadata, callback);
        }
    }
    GetProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.getProject.bind(this.Projects_v1_client))(SylkApi_v1.GetProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.getProject(SylkApi_v1.GetProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateProject(SylkApi_v1.UpdateProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.createProject.bind(this.Projects_v1_client))(SylkApi_v1.CreateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.createProject(SylkApi_v1.CreateProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.deleteProject.bind(this.Projects_v1_client))(SylkApi_v1.DeleteProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.deleteProject(SylkApi_v1.DeleteProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    ListProjects(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Projects_v1_client.listProjects(SylkApi_v1.ListProjectsRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    UpdateUserStatusProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateUserStatusProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateUserStatusProject(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.ProjectsV1 = ProjectsV1;
class EnumValuesV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.EnumValues_v1_client = new EnumValues_1.EnumValuesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.getEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.GetEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.getEnumValue(SylkApi_v1.GetEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.createEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.CreateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.createEnumValue(SylkApi_v1.CreateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.deleteEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.DeleteEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.deleteEnumValue(SylkApi_v1.DeleteEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.updateEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.UpdateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.updateEnumValue(SylkApi_v1.UpdateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.EnumValuesV1 = EnumValuesV1;
class ServicesV1 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Services_v1_client = new Services_1.ServicesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    CreateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.createService.bind(this.Services_v1_client))(SylkApi_v1.CreateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.createService(SylkApi_v1.CreateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    GetService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.getService.bind(this.Services_v1_client))(SylkApi_v1.GetServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.getService(SylkApi_v1.GetServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.updateService.bind(this.Services_v1_client))(SylkApi_v1.UpdateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.updateService(SylkApi_v1.UpdateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    ListServices(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Services_v1_client.listServices(SylkApi_v1.ListServicesRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    DeleteService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.deleteService.bind(this.Services_v1_client))(SylkApi_v1.DeleteServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.deleteService(SylkApi_v1.DeleteServiceRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.ServicesV1 = ServicesV1;
class FoldersV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Folders_v2_client = new Folders_1.FoldersClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetFolder(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.getFolder.bind(this.Folders_v2_client))(Folders_v2.GetFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.getFolder(Folders_v2.GetFolderRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateFolder(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.createFolder.bind(this.Folders_v2_client))(Folders_v2.CreateFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.createFolder(Folders_v2.CreateFolderRequest.fromJSON(request), metadata, callback);
        }
    }
    ListFolders(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Folders_v2_client.listFolders(Folders_v2.ListFoldersRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    DeleteFolder(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.deleteFolder.bind(this.Folders_v2_client))(Folders_v2.DeleteFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.deleteFolder(Folders_v2.DeleteFolderRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateFolder(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.updateFolder.bind(this.Folders_v2_client))(Folders_v2.UpdateFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.updateFolder(Folders_v2.UpdateFolderRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.FoldersV2 = FoldersV2;
class PackagesV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Packages_v2_client = new Packages_2.PackagesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetPackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.getPackage.bind(this.Packages_v2_client))(Packages_v2.GetPackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.getPackage(Packages_v2.GetPackageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.createPackage.bind(this.Packages_v2_client))(Packages_v2.CreatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.createPackage(Packages_v2.CreatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeletePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.deletePackage.bind(this.Packages_v2_client))(Packages_v2.DeletePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.deletePackage(Packages_v2.DeletePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.updatePackage.bind(this.Packages_v2_client))(Packages_v2.UpdatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.updatePackage(Packages_v2.UpdatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.PackagesV2 = PackagesV2;
class ServicesV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Services_v2_client = new Services_2.ServicesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.getService.bind(this.Services_v2_client))(Services_v2.GetServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.getService(Services_v2.GetServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.deleteService.bind(this.Services_v2_client))(Services_v2.DeleteServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.deleteService(Services_v2.DeleteServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.createService.bind(this.Services_v2_client))(Services_v2.CreateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.createService(Services_v2.CreateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.updateService.bind(this.Services_v2_client))(Services_v2.UpdateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.updateService(Services_v2.UpdateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.ServicesV2 = ServicesV2;
class MessagesV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Messages_v2_client = new Messages_2.MessagesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.getMessage.bind(this.Messages_v2_client))(Messages_v2.GetMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.getMessage(Messages_v2.GetMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.createMessage.bind(this.Messages_v2_client))(Messages_v2.CreateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.createMessage(Messages_v2.CreateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.updateMessage.bind(this.Messages_v2_client))(Messages_v2.UpdateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.updateMessage(Messages_v2.UpdateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.deleteMessage.bind(this.Messages_v2_client))(Messages_v2.DeleteMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.deleteMessage(Messages_v2.DeleteMessageRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.MessagesV2 = MessagesV2;
class TagsV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Tags_v2_client = new Tags_1.TagsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetTag(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.getTag.bind(this.Tags_v2_client))(Tags_v2.GetTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.getTag(Tags_v2.GetTagRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateTag(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.updateTag.bind(this.Tags_v2_client))(Tags_v2.UpdateTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.updateTag(Tags_v2.UpdateTagRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateTag(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.createTag.bind(this.Tags_v2_client))(Tags_v2.CreateTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.createTag(Tags_v2.CreateTagRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteTag(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.deleteTag.bind(this.Tags_v2_client))(Tags_v2.DeleteTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.deleteTag(Tags_v2.DeleteTagRequest.fromJSON(request), metadata, callback);
        }
    }
    TagResource(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.tagResource.bind(this.Tags_v2_client))(Tags_v2.TagResourceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.tagResource(Tags_v2.TagResourceRequest.fromJSON(request), metadata, callback);
        }
    }
    ListTags(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Tags_v2_client.listTags(Tags_v2.ListTagsRequest.fromJSON(request), metadata);
            stream.on('data', (res) => {
                subscriber.next(res);
            }).on('end', () => {
                subscriber.complete();
            }).on('error', (err) => {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    }
    UntagResource(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.untagResource.bind(this.Tags_v2_client))(Tags_v2.UntagResourceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.untagResource(Tags_v2.UntagResourceRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.TagsV2 = TagsV2;
class EnumsV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Enums_v2_client = new Enums_2.EnumsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.getEnum.bind(this.Enums_v2_client))(Enums_v2.GetEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.getEnum(Enums_v2.GetEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.createEnum.bind(this.Enums_v2_client))(Enums_v2.CreateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.createEnum(Enums_v2.CreateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.deleteEnum.bind(this.Enums_v2_client))(Enums_v2.DeleteEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.deleteEnum(Enums_v2.DeleteEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.updateEnum.bind(this.Enums_v2_client))(Enums_v2.UpdateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.updateEnum(Enums_v2.UpdateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.EnumsV2 = EnumsV2;
class EnumValuesV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.EnumValues_v2_client = new EnumValues_2.EnumValuesClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.getEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.GetEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.getEnumValue(EnumValues_v2.GetEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.createEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.CreateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.createEnumValue(EnumValues_v2.CreateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.updateEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.UpdateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.updateEnumValue(EnumValues_v2.UpdateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.deleteEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.DeleteEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.deleteEnumValue(EnumValues_v2.DeleteEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.EnumValuesV2 = EnumValuesV2;
class MethodsV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Methods_v2_client = new Methods_2.MethodsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.getMethod.bind(this.Methods_v2_client))(Methods_v2.GetMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.getMethod(Methods_v2.GetMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.createMethod.bind(this.Methods_v2_client))(Methods_v2.CreateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.createMethod(Methods_v2.CreateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.updateMethod.bind(this.Methods_v2_client))(Methods_v2.UpdateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.updateMethod(Methods_v2.UpdateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.deleteMethod.bind(this.Methods_v2_client))(Methods_v2.DeleteMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.deleteMethod(Methods_v2.DeleteMethodRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.MethodsV2 = MethodsV2;
class FieldsV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Fields_v2_client = new Fields_2.FieldsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.getField.bind(this.Fields_v2_client))(Fields_v2.GetFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.getField(Fields_v2.GetFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.createField.bind(this.Fields_v2_client))(Fields_v2.CreateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.createField(Fields_v2.CreateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.updateField.bind(this.Fields_v2_client))(Fields_v2.UpdateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.updateField(Fields_v2.UpdateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.deleteField.bind(this.Fields_v2_client))(Fields_v2.DeleteFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.deleteField(Fields_v2.DeleteFieldRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.FieldsV2 = FieldsV2;
class IntegrationsV2 {
    constructor(opts) {
        const { host, metadata, port, channelCreds } = { ...DEFAULT_CLIENT_OPTS, ...opts };
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Integrations_v2_client = new Integrations_1.IntegrationsClient(`${this.host}:${this.port}`, channelCreds, _DEFAULT_OPTION);
    }
    GetIntegration(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Integrations_v2_client.getIntegration.bind(this.Integrations_v2_client))(Integrations_v2.GetIntegrationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Integrations_v2_client.getIntegration(Integrations_v2.GetIntegrationRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.IntegrationsV2 = IntegrationsV2;
//# sourceMappingURL=index.js.map