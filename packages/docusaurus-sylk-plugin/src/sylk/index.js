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
exports.EnumValuesClient = exports.ServicesClient = exports.FieldsClient = exports.EnumsClient = exports.MethodsClient = exports.MessagesClient = exports.OrganizationsClient = exports.UsersClient = exports.ProjectsClient = exports.PackagesClient = exports.SylkService = exports.SylkMethod = exports.SylkUser = exports.SylkEnumValue = exports.SylkApi = exports.SylkConfigs = exports.SylkCommons = exports.SylkClient = exports.SylkProject = exports.SylkPackage = exports.SylkServer = exports.SylkField = exports.SylkMessage = exports.SylkOrganization = exports.SylkEnum = exports.Sylk = exports.sylkcore = void 0;
const grpc_js_1 = require("@grpc/grpc-js");
const util_1 = require("util");
const rxjs_1 = require("rxjs");
const Packages_1 = require("./protos/Packages");
Object.defineProperty(exports, "PackagesClient", { enumerable: true, get: function () { return Packages_1.PackagesClient; } });
const Projects_1 = require("./protos/Projects");
Object.defineProperty(exports, "ProjectsClient", { enumerable: true, get: function () { return Projects_1.ProjectsClient; } });
const Users_1 = require("./protos/Users");
Object.defineProperty(exports, "UsersClient", { enumerable: true, get: function () { return Users_1.UsersClient; } });
const Organizations_1 = require("./protos/Organizations");
Object.defineProperty(exports, "OrganizationsClient", { enumerable: true, get: function () { return Organizations_1.OrganizationsClient; } });
const Messages_1 = require("./protos/Messages");
Object.defineProperty(exports, "MessagesClient", { enumerable: true, get: function () { return Messages_1.MessagesClient; } });
const Methods_1 = require("./protos/Methods");
Object.defineProperty(exports, "MethodsClient", { enumerable: true, get: function () { return Methods_1.MethodsClient; } });
const Enums_1 = require("./protos/Enums");
Object.defineProperty(exports, "EnumsClient", { enumerable: true, get: function () { return Enums_1.EnumsClient; } });
const Fields_1 = require("./protos/Fields");
Object.defineProperty(exports, "FieldsClient", { enumerable: true, get: function () { return Fields_1.FieldsClient; } });
const Services_1 = require("./protos/Services");
Object.defineProperty(exports, "ServicesClient", { enumerable: true, get: function () { return Services_1.ServicesClient; } });
const EnumValues_1 = require("./protos/EnumValues");
Object.defineProperty(exports, "EnumValuesClient", { enumerable: true, get: function () { return EnumValues_1.EnumValuesClient; } });
const Sylk = __importStar(require("./protos/Sylk"));
exports.Sylk = Sylk;
const SylkEnum = __importStar(require("./protos/SylkEnum"));
exports.SylkEnum = SylkEnum;
const SylkOrganization = __importStar(require("./protos/SylkOrganization"));
exports.SylkOrganization = SylkOrganization;
const SylkMessage = __importStar(require("./protos/SylkMessage"));
exports.SylkMessage = SylkMessage;
const SylkField = __importStar(require("./protos/SylkField"));
exports.SylkField = SylkField;
const SylkServer = __importStar(require("./protos/SylkServer"));
exports.SylkServer = SylkServer;
const SylkPackage = __importStar(require("./protos/SylkPackage"));
exports.SylkPackage = SylkPackage;
const SylkProject = __importStar(require("./protos/SylkProject"));
exports.SylkProject = SylkProject;
const SylkClient = __importStar(require("./protos/SylkClient"));
exports.SylkClient = SylkClient;
const SylkCommons = __importStar(require("./protos/SylkCommons"));
exports.SylkCommons = SylkCommons;
const SylkConfigs = __importStar(require("./protos/SylkConfigs"));
exports.SylkConfigs = SylkConfigs;
const SylkApi = __importStar(require("./protos/SylkApi"));
exports.SylkApi = SylkApi;
const SylkEnumValue = __importStar(require("./protos/SylkEnumValue"));
exports.SylkEnumValue = SylkEnumValue;
const SylkUser = __importStar(require("./protos/SylkUser"));
exports.SylkUser = SylkUser;
const SylkMethod = __importStar(require("./protos/SylkMethod"));
exports.SylkMethod = SylkMethod;
const SylkService = __importStar(require("./protos/SylkService"));
exports.SylkService = SylkService;
const interceptorsProviders = [];
const _DEFAULT_OPTION = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
    "interceptors": interceptorsProviders,
};
class sylkcore {
    constructor(host = "localhost", port = 50051, metadata = new grpc_js_1.Metadata()) {
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.Packages_client = new Packages_1.PackagesClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Projects_client = new Projects_1.ProjectsClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Users_client = new Users_1.UsersClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Organizations_client = new Organizations_1.OrganizationsClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Messages_client = new Messages_1.MessagesClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Methods_client = new Methods_1.MethodsClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Enums_client = new Enums_1.EnumsClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Fields_client = new Fields_1.FieldsClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.Services_client = new Services_1.ServicesClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
        this.EnumValues_client = new EnumValues_1.EnumValuesClient(`${this.host}:${this.port}`, grpc_js_1.credentials.createInsecure(), _DEFAULT_OPTION);
    }
    GetPackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_client.getPackage.bind(this.Packages_client))(SylkApi.GetPackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_client.getPackage(SylkApi.GetPackageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_client.createPackage.bind(this.Packages_client))(SylkApi.CreatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_client.createPackage(SylkApi.CreatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdatePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_client.updatePackage.bind(this.Packages_client))(SylkApi.UpdatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_client.updatePackage(SylkApi.UpdatePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeletePackage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_client.deletePackage.bind(this.Packages_client))(SylkApi.DeletePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_client.deletePackage(SylkApi.DeletePackageRequest.fromJSON(request), metadata, callback);
        }
    }
    ListPackages(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Packages_client.listPackages(SylkApi.ListPackagesRequest.fromJSON(request), metadata);
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
    GetProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.getProject.bind(this.Projects_client))(SylkApi.GetProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.getProject(SylkApi.GetProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.updateProject.bind(this.Projects_client))(SylkApi.UpdateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.updateProject(SylkApi.UpdateProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.deleteProject.bind(this.Projects_client))(SylkApi.DeleteProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.deleteProject(SylkApi.DeleteProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    AddUserProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.addUserProject.bind(this.Projects_client))(SylkApi.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.addUserProject(SylkApi.AddUserRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserRoleProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.updateUserRoleProject.bind(this.Projects_client))(SylkApi.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.updateUserRoleProject(SylkApi.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserStatusProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.updateUserStatusProject.bind(this.Projects_client))(SylkApi.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.updateUserStatusProject(SylkApi.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    }
    RemoveUserProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.removeUserProject.bind(this.Projects_client))(SylkApi.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.removeUserProject(SylkApi.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    }
    ListProjects(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Projects_client.listProjects(SylkApi.ListProjectsRequest.fromJSON(request), metadata);
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
    CreateProject(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_client.createProject.bind(this.Projects_client))(SylkApi.CreateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_client.createProject(SylkApi.CreateProjectRequest.fromJSON(request), metadata, callback);
        }
    }
    GetUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_client.getUser.bind(this.Users_client))(SylkApi.GetUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.getUser(SylkApi.GetUserRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_client.updateUser.bind(this.Users_client))(SylkApi.UpdateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.updateUser(SylkApi.UpdateUserRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_client.createUser.bind(this.Users_client))(SylkApi.CreateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.createUser(SylkApi.CreateUserRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateAccessToken(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_client.createAccessToken.bind(this.Users_client))(SylkApi.CreateAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.createAccessToken(SylkApi.CreateAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    GetAccessToken(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_client.getAccessToken.bind(this.Users_client))(SylkApi.GetAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.getAccessToken(SylkApi.GetAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    ListAccessTokens(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Users_client.listAccessTokens(SylkApi.ListAccessTokensRequest.fromJSON(request), metadata);
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
            return (0, util_1.promisify)(this.Users_client.revokeAccessToken.bind(this.Users_client))(SylkApi.RevokeAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_client.revokeAccessToken(SylkApi.RevokeAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    }
    GetOrganization(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.getOrganization.bind(this.Organizations_client))(SylkApi.GetOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.getOrganization(SylkApi.GetOrganizationRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateOrganization(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.updateOrganization.bind(this.Organizations_client))(SylkApi.UpdateOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.updateOrganization(SylkApi.UpdateOrganizationRequest.fromJSON(request), metadata, callback);
        }
    }
    ListOrganizations(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Organizations_client.listOrganizations(SylkApi.ListOrganizationsRequest.fromJSON(request), metadata);
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
    AcceprUserInvite(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.acceprUserInvite.bind(this.Organizations_client))(SylkApi.AcceptUserInviteRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.acceprUserInvite(SylkApi.AcceptUserInviteRequest.fromJSON(request), metadata, callback);
        }
    }
    AddUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.addUser.bind(this.Organizations_client))(SylkApi.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.addUser(SylkApi.AddUserRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserRole(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.updateUserRole.bind(this.Organizations_client))(SylkApi.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.updateUserRole(SylkApi.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateUserStatus(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.updateUserStatus.bind(this.Organizations_client))(SylkApi.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.updateUserStatus(SylkApi.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    }
    RemoveUser(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_client.removeUser.bind(this.Organizations_client))(SylkApi.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_client.removeUser(SylkApi.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    }
    GetMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_client.getMessage.bind(this.Messages_client))(SylkApi.GetMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_client.getMessage(SylkApi.GetMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_client.createMessage.bind(this.Messages_client))(SylkApi.CreateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_client.createMessage(SylkApi.CreateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_client.updateMessage.bind(this.Messages_client))(SylkApi.UpdateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_client.updateMessage(SylkApi.UpdateMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMessage(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_client.deleteMessage.bind(this.Messages_client))(SylkApi.DeleteMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_client.deleteMessage(SylkApi.DeleteMessageRequest.fromJSON(request), metadata, callback);
        }
    }
    GetMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_client.getMethod.bind(this.Methods_client))(SylkApi.GetMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_client.getMethod(SylkApi.GetMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_client.createMethod.bind(this.Methods_client))(SylkApi.CreateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_client.createMethod(SylkApi.CreateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_client.updateMethod.bind(this.Methods_client))(SylkApi.UpdateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_client.updateMethod(SylkApi.UpdateMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteMethod(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_client.deleteMethod.bind(this.Methods_client))(SylkApi.DeleteMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_client.deleteMethod(SylkApi.DeleteMethodRequest.fromJSON(request), metadata, callback);
        }
    }
    GetEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_client.getEnum.bind(this.Enums_client))(SylkApi.GetEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_client.getEnum(SylkApi.GetEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_client.createEnum.bind(this.Enums_client))(SylkApi.CreateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_client.createEnum(SylkApi.CreateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_client.updateEnum.bind(this.Enums_client))(SylkApi.UpdateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_client.updateEnum(SylkApi.UpdateEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnum(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_client.deleteEnum.bind(this.Enums_client))(SylkApi.DeleteEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_client.deleteEnum(SylkApi.DeleteEnumRequest.fromJSON(request), metadata, callback);
        }
    }
    GetField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_client.getField.bind(this.Fields_client))(SylkApi.GetFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_client.getField(SylkApi.GetFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_client.createField.bind(this.Fields_client))(SylkApi.CreateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_client.createField(SylkApi.CreateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_client.updateField.bind(this.Fields_client))(SylkApi.UpdateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_client.updateField(SylkApi.UpdateFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteField(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_client.deleteField.bind(this.Fields_client))(SylkApi.DeleteFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_client.deleteField(SylkApi.DeleteFieldRequest.fromJSON(request), metadata, callback);
        }
    }
    GetService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_client.getService.bind(this.Services_client))(SylkApi.GetServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_client.getService(SylkApi.GetServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_client.createService.bind(this.Services_client))(SylkApi.CreateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_client.createService(SylkApi.CreateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_client.updateService.bind(this.Services_client))(SylkApi.UpdateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_client.updateService(SylkApi.UpdateServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteService(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_client.deleteService.bind(this.Services_client))(SylkApi.DeleteServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_client.deleteService(SylkApi.DeleteServiceRequest.fromJSON(request), metadata, callback);
        }
    }
    ListServices(request, metadata = this.metadata, callback) {
        return new rxjs_1.Observable(subscriber => {
            const stream = this.Services_client.listServices(SylkApi.ListServicesRequest.fromJSON(request), metadata);
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
    GetEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_client.getEnumValue.bind(this.EnumValues_client))(SylkApi.GetEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_client.getEnumValue(SylkApi.GetEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    CreateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_client.createEnumValue.bind(this.EnumValues_client))(SylkApi.CreateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_client.createEnumValue(SylkApi.CreateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    UpdateEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_client.updateEnumValue.bind(this.EnumValues_client))(SylkApi.UpdateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_client.updateEnumValue(SylkApi.UpdateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
    DeleteEnumValue(request, metadata = this.metadata, callback) {
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_client.deleteEnumValue.bind(this.EnumValues_client))(SylkApi.DeleteEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_client.deleteEnumValue(SylkApi.DeleteEnumValueRequest.fromJSON(request), metadata, callback);
        }
    }
}
exports.sylkcore = sylkcore;
//# sourceMappingURL=index.js.map