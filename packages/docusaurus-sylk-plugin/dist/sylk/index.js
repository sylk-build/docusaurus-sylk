"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationsV2 = exports.FieldsV2 = exports.MethodsV2 = exports.EnumValuesV2 = exports.EnumsV2 = exports.TagsV2 = exports.MessagesV2 = exports.ServicesV2 = exports.PackagesV2 = exports.FoldersV2 = exports.ServicesV1 = exports.EnumValuesV1 = exports.ProjectsV1 = exports.FieldsV1 = exports.OrganizationsV1 = exports.ActivitiesV1 = exports.MessagesV1 = exports.EnumsV1 = exports.UsersV1 = exports.MethodsV1 = exports.PackagesV1 = void 0;
var grpc_js_1 = require("@grpc/grpc-js");
var util_1 = require("util");
var rxjs_1 = require("rxjs");
var Packages_1 = require("./protos/sylk/Packages/v1/Packages");
var Methods_1 = require("./protos/sylk/Methods/v1/Methods");
var Users_1 = require("./protos/sylk/Users/v1/Users");
var Enums_1 = require("./protos/sylk/Enums/v1/Enums");
var Messages_1 = require("./protos/sylk/Messages/v1/Messages");
var Activities_1 = require("./protos/sylk/Activities/v1/Activities");
var Organizations_1 = require("./protos/sylk/Organizations/v1/Organizations");
var Fields_1 = require("./protos/sylk/Fields/v1/Fields");
var Projects_1 = require("./protos/sylk/Projects/v1/Projects");
var EnumValues_1 = require("./protos/sylk/EnumValues/v1/EnumValues");
var Services_1 = require("./protos/sylk/Services/v1/Services");
var Folders_1 = require("./protos/sylk/Folders/v2/Folders");
var Packages_2 = require("./protos/sylk/Packages/v2/Packages");
var Services_2 = require("./protos/sylk/Services/v2/Services");
var Messages_2 = require("./protos/sylk/Messages/v2/Messages");
var Tags_1 = require("./protos/sylk/Tags/v2/Tags");
var Enums_2 = require("./protos/sylk/Enums/v2/Enums");
var EnumValues_2 = require("./protos/sylk/EnumValues/v2/EnumValues");
var Methods_2 = require("./protos/sylk/Methods/v2/Methods");
var Fields_2 = require("./protos/sylk/Fields/v2/Fields");
var Integrations_1 = require("./protos/sylk/Integrations/v2/Integrations");
var ActivityLog_v1 = __importStar(require("./protos/sylk/ActivityLog/v1/ActivityLog"));
var SylkApi_v1 = __importStar(require("./protos/sylk/SylkApi/v1/SylkApi"));
var Folders_v2 = __importStar(require("./protos/sylk/Folders/v2/Folders"));
var Packages_v2 = __importStar(require("./protos/sylk/Packages/v2/Packages"));
var Services_v2 = __importStar(require("./protos/sylk/Services/v2/Services"));
var Messages_v2 = __importStar(require("./protos/sylk/Messages/v2/Messages"));
var Tags_v2 = __importStar(require("./protos/sylk/Tags/v2/Tags"));
var Enums_v2 = __importStar(require("./protos/sylk/Enums/v2/Enums"));
var EnumValues_v2 = __importStar(require("./protos/sylk/EnumValues/v2/EnumValues"));
var Methods_v2 = __importStar(require("./protos/sylk/Methods/v2/Methods"));
var Fields_v2 = __importStar(require("./protos/sylk/Fields/v2/Fields"));
var Integrations_v2 = __importStar(require("./protos/sylk/Integrations/v2/Integrations"));
var interceptorsProviders = [];
var _DEFAULT_OPTION = {
    "grpc.keepalive_time_ms": 120000,
    "grpc.http2.min_time_between_pings_ms": 120000,
    "grpc.keepalive_timeout_ms": 20000,
    "grpc.http2.max_pings_without_data": 0,
    "grpc.keepalive_permit_without_calls": 1,
    "interceptors": interceptorsProviders,
};
var DEFAULT_CLIENT_OPTS = {
    host: "localhost",
    port: 44880,
    metadata: new grpc_js_1.Metadata(),
    channelCreds: grpc_js_1.credentials.createInsecure()
};
var PackagesV1 = /** @class */ (function () {
    function PackagesV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Packages_v1_client = new Packages_1.PackagesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    PackagesV1.prototype.GetPackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.getPackage.bind(this.Packages_v1_client))(SylkApi_v1.GetPackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.getPackage(SylkApi_v1.GetPackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV1.prototype.CreatePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.createPackage.bind(this.Packages_v1_client))(SylkApi_v1.CreatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.createPackage(SylkApi_v1.CreatePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV1.prototype.DeletePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.deletePackage.bind(this.Packages_v1_client))(SylkApi_v1.DeletePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.deletePackage(SylkApi_v1.DeletePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV1.prototype.UpdatePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v1_client.updatePackage.bind(this.Packages_v1_client))(SylkApi_v1.UpdatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v1_client.updatePackage(SylkApi_v1.UpdatePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV1.prototype.ListPackages = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Packages_v1_client.listPackages(SylkApi_v1.ListPackagesRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    return PackagesV1;
}());
exports.PackagesV1 = PackagesV1;
var MethodsV1 = /** @class */ (function () {
    function MethodsV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Methods_v1_client = new Methods_1.MethodsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    MethodsV1.prototype.CreateMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.createMethod.bind(this.Methods_v1_client))(SylkApi_v1.CreateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.createMethod(SylkApi_v1.CreateMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV1.prototype.GetMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.getMethod.bind(this.Methods_v1_client))(SylkApi_v1.GetMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.getMethod(SylkApi_v1.GetMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV1.prototype.DeleteMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.deleteMethod.bind(this.Methods_v1_client))(SylkApi_v1.DeleteMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.deleteMethod(SylkApi_v1.DeleteMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV1.prototype.UpdateMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v1_client.updateMethod.bind(this.Methods_v1_client))(SylkApi_v1.UpdateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v1_client.updateMethod(SylkApi_v1.UpdateMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    return MethodsV1;
}());
exports.MethodsV1 = MethodsV1;
var UsersV1 = /** @class */ (function () {
    function UsersV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Users_v1_client = new Users_1.UsersClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    UsersV1.prototype.CreateUser = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.createUser.bind(this.Users_v1_client))(SylkApi_v1.CreateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.createUser(SylkApi_v1.CreateUserRequest.fromJSON(request), metadata, callback);
        }
    };
    UsersV1.prototype.GetAccessToken = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.getAccessToken.bind(this.Users_v1_client))(SylkApi_v1.GetAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.getAccessToken(SylkApi_v1.GetAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    };
    UsersV1.prototype.CreateAccessToken = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.createAccessToken.bind(this.Users_v1_client))(SylkApi_v1.CreateAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.createAccessToken(SylkApi_v1.CreateAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    };
    UsersV1.prototype.GetUser = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.getUser.bind(this.Users_v1_client))(SylkApi_v1.GetUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.getUser(SylkApi_v1.GetUserRequest.fromJSON(request), metadata, callback);
        }
    };
    UsersV1.prototype.ListAccessTokens = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Users_v1_client.listAccessTokens(SylkApi_v1.ListAccessTokensRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    UsersV1.prototype.RevokeAccessToken = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.revokeAccessToken.bind(this.Users_v1_client))(SylkApi_v1.RevokeAccessTokenRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.revokeAccessToken(SylkApi_v1.RevokeAccessTokenRequest.fromJSON(request), metadata, callback);
        }
    };
    UsersV1.prototype.UpdateUser = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Users_v1_client.updateUser.bind(this.Users_v1_client))(SylkApi_v1.UpdateUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Users_v1_client.updateUser(SylkApi_v1.UpdateUserRequest.fromJSON(request), metadata, callback);
        }
    };
    return UsersV1;
}());
exports.UsersV1 = UsersV1;
var EnumsV1 = /** @class */ (function () {
    function EnumsV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Enums_v1_client = new Enums_1.EnumsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    EnumsV1.prototype.GetEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.getEnum.bind(this.Enums_v1_client))(SylkApi_v1.GetEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.getEnum(SylkApi_v1.GetEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV1.prototype.UpdateEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.updateEnum.bind(this.Enums_v1_client))(SylkApi_v1.UpdateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.updateEnum(SylkApi_v1.UpdateEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV1.prototype.DeleteEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.deleteEnum.bind(this.Enums_v1_client))(SylkApi_v1.DeleteEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.deleteEnum(SylkApi_v1.DeleteEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV1.prototype.CreateEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v1_client.createEnum.bind(this.Enums_v1_client))(SylkApi_v1.CreateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v1_client.createEnum(SylkApi_v1.CreateEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    return EnumsV1;
}());
exports.EnumsV1 = EnumsV1;
var MessagesV1 = /** @class */ (function () {
    function MessagesV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Messages_v1_client = new Messages_1.MessagesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    MessagesV1.prototype.GetMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.getMessage.bind(this.Messages_v1_client))(SylkApi_v1.GetMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.getMessage(SylkApi_v1.GetMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV1.prototype.UpdateMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.updateMessage.bind(this.Messages_v1_client))(SylkApi_v1.UpdateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.updateMessage(SylkApi_v1.UpdateMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV1.prototype.CreateMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.createMessage.bind(this.Messages_v1_client))(SylkApi_v1.CreateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.createMessage(SylkApi_v1.CreateMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV1.prototype.DeleteMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v1_client.deleteMessage.bind(this.Messages_v1_client))(SylkApi_v1.DeleteMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v1_client.deleteMessage(SylkApi_v1.DeleteMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    return MessagesV1;
}());
exports.MessagesV1 = MessagesV1;
var ActivitiesV1 = /** @class */ (function () {
    function ActivitiesV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Activities_v1_client = new Activities_1.ActivitiesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    ActivitiesV1.prototype.ListActivityLogs = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Activities_v1_client.listActivityLogs(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    ActivitiesV1.prototype.GetActivityLogs = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Activities_v1_client.getActivityLogs.bind(this.Activities_v1_client))(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata);
        }
        else {
            return this.Activities_v1_client.getActivityLogs(ActivityLog_v1.ListActivityLogsRequest.fromJSON(request), metadata, callback);
        }
    };
    return ActivitiesV1;
}());
exports.ActivitiesV1 = ActivitiesV1;
var OrganizationsV1 = /** @class */ (function () {
    function OrganizationsV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Organizations_v1_client = new Organizations_1.OrganizationsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    OrganizationsV1.prototype.AcceprUserInvite = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.acceprUserInvite.bind(this.Organizations_v1_client))(SylkApi_v1.AcceptUserInviteRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.acceprUserInvite(SylkApi_v1.AcceptUserInviteRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.GetOrganization = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.getOrganization.bind(this.Organizations_v1_client))(SylkApi_v1.GetOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.getOrganization(SylkApi_v1.GetOrganizationRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.UpdateOrganization = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateOrganization.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateOrganizationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateOrganization(SylkApi_v1.UpdateOrganizationRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.ListOrganizations = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Organizations_v1_client.listOrganizations(SylkApi_v1.ListOrganizationsRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    OrganizationsV1.prototype.AddUser = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.addUser.bind(this.Organizations_v1_client))(SylkApi_v1.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.addUser(SylkApi_v1.AddUserRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.UpdateUserStatus = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateUserStatus.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateUserStatus(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.RemoveUser = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.removeUser.bind(this.Organizations_v1_client))(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.removeUser(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    };
    OrganizationsV1.prototype.UpdateUserRole = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Organizations_v1_client.updateUserRole.bind(this.Organizations_v1_client))(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Organizations_v1_client.updateUserRole(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    };
    return OrganizationsV1;
}());
exports.OrganizationsV1 = OrganizationsV1;
var FieldsV1 = /** @class */ (function () {
    function FieldsV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Fields_v1_client = new Fields_1.FieldsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    FieldsV1.prototype.CreateField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.createField.bind(this.Fields_v1_client))(SylkApi_v1.CreateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.createField(SylkApi_v1.CreateFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV1.prototype.GetField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.getField.bind(this.Fields_v1_client))(SylkApi_v1.GetFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.getField(SylkApi_v1.GetFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV1.prototype.DeleteField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.deleteField.bind(this.Fields_v1_client))(SylkApi_v1.DeleteFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.deleteField(SylkApi_v1.DeleteFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV1.prototype.UpdateField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v1_client.updateField.bind(this.Fields_v1_client))(SylkApi_v1.UpdateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v1_client.updateField(SylkApi_v1.UpdateFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    return FieldsV1;
}());
exports.FieldsV1 = FieldsV1;
var ProjectsV1 = /** @class */ (function () {
    function ProjectsV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Projects_v1_client = new Projects_1.ProjectsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    ProjectsV1.prototype.UpdateUserRoleProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateUserRoleProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateUserRoleProject(SylkApi_v1.UpdateUserRoleRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.RemoveUserProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.removeUserProject.bind(this.Projects_v1_client))(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.removeUserProject(SylkApi_v1.RemoveUserRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.AddUserProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.addUserProject.bind(this.Projects_v1_client))(SylkApi_v1.AddUserRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.addUserProject(SylkApi_v1.AddUserRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.GetProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.getProject.bind(this.Projects_v1_client))(SylkApi_v1.GetProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.getProject(SylkApi_v1.GetProjectRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.UpdateProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateProject(SylkApi_v1.UpdateProjectRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.CreateProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.createProject.bind(this.Projects_v1_client))(SylkApi_v1.CreateProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.createProject(SylkApi_v1.CreateProjectRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.DeleteProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.deleteProject.bind(this.Projects_v1_client))(SylkApi_v1.DeleteProjectRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.deleteProject(SylkApi_v1.DeleteProjectRequest.fromJSON(request), metadata, callback);
        }
    };
    ProjectsV1.prototype.ListProjects = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Projects_v1_client.listProjects(SylkApi_v1.ListProjectsRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    ProjectsV1.prototype.UpdateUserStatusProject = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Projects_v1_client.updateUserStatusProject.bind(this.Projects_v1_client))(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata);
        }
        else {
            return this.Projects_v1_client.updateUserStatusProject(SylkApi_v1.UpdateUserStatusRequest.fromJSON(request), metadata, callback);
        }
    };
    return ProjectsV1;
}());
exports.ProjectsV1 = ProjectsV1;
var EnumValuesV1 = /** @class */ (function () {
    function EnumValuesV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.EnumValues_v1_client = new EnumValues_1.EnumValuesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    EnumValuesV1.prototype.GetEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.getEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.GetEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.getEnumValue(SylkApi_v1.GetEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV1.prototype.CreateEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.createEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.CreateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.createEnumValue(SylkApi_v1.CreateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV1.prototype.DeleteEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.deleteEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.DeleteEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.deleteEnumValue(SylkApi_v1.DeleteEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV1.prototype.UpdateEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v1_client.updateEnumValue.bind(this.EnumValues_v1_client))(SylkApi_v1.UpdateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v1_client.updateEnumValue(SylkApi_v1.UpdateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    return EnumValuesV1;
}());
exports.EnumValuesV1 = EnumValuesV1;
var ServicesV1 = /** @class */ (function () {
    function ServicesV1(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Services_v1_client = new Services_1.ServicesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    ServicesV1.prototype.CreateService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.createService.bind(this.Services_v1_client))(SylkApi_v1.CreateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.createService(SylkApi_v1.CreateServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV1.prototype.GetService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.getService.bind(this.Services_v1_client))(SylkApi_v1.GetServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.getService(SylkApi_v1.GetServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV1.prototype.UpdateService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.updateService.bind(this.Services_v1_client))(SylkApi_v1.UpdateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.updateService(SylkApi_v1.UpdateServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV1.prototype.ListServices = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Services_v1_client.listServices(SylkApi_v1.ListServicesRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    ServicesV1.prototype.DeleteService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v1_client.deleteService.bind(this.Services_v1_client))(SylkApi_v1.DeleteServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v1_client.deleteService(SylkApi_v1.DeleteServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    return ServicesV1;
}());
exports.ServicesV1 = ServicesV1;
var FoldersV2 = /** @class */ (function () {
    function FoldersV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Folders_v2_client = new Folders_1.FoldersClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    FoldersV2.prototype.GetFolder = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.getFolder.bind(this.Folders_v2_client))(Folders_v2.GetFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.getFolder(Folders_v2.GetFolderRequest.fromJSON(request), metadata, callback);
        }
    };
    FoldersV2.prototype.CreateFolder = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.createFolder.bind(this.Folders_v2_client))(Folders_v2.CreateFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.createFolder(Folders_v2.CreateFolderRequest.fromJSON(request), metadata, callback);
        }
    };
    FoldersV2.prototype.ListFolders = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Folders_v2_client.listFolders(Folders_v2.ListFoldersRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    FoldersV2.prototype.DeleteFolder = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.deleteFolder.bind(this.Folders_v2_client))(Folders_v2.DeleteFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.deleteFolder(Folders_v2.DeleteFolderRequest.fromJSON(request), metadata, callback);
        }
    };
    FoldersV2.prototype.UpdateFolder = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Folders_v2_client.updateFolder.bind(this.Folders_v2_client))(Folders_v2.UpdateFolderRequest.fromJSON(request), metadata);
        }
        else {
            return this.Folders_v2_client.updateFolder(Folders_v2.UpdateFolderRequest.fromJSON(request), metadata, callback);
        }
    };
    return FoldersV2;
}());
exports.FoldersV2 = FoldersV2;
var PackagesV2 = /** @class */ (function () {
    function PackagesV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Packages_v2_client = new Packages_2.PackagesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    PackagesV2.prototype.GetPackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.getPackage.bind(this.Packages_v2_client))(Packages_v2.GetPackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.getPackage(Packages_v2.GetPackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV2.prototype.CreatePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.createPackage.bind(this.Packages_v2_client))(Packages_v2.CreatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.createPackage(Packages_v2.CreatePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV2.prototype.DeletePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.deletePackage.bind(this.Packages_v2_client))(Packages_v2.DeletePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.deletePackage(Packages_v2.DeletePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    PackagesV2.prototype.UpdatePackage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Packages_v2_client.updatePackage.bind(this.Packages_v2_client))(Packages_v2.UpdatePackageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Packages_v2_client.updatePackage(Packages_v2.UpdatePackageRequest.fromJSON(request), metadata, callback);
        }
    };
    return PackagesV2;
}());
exports.PackagesV2 = PackagesV2;
var ServicesV2 = /** @class */ (function () {
    function ServicesV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Services_v2_client = new Services_2.ServicesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    ServicesV2.prototype.GetService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.getService.bind(this.Services_v2_client))(Services_v2.GetServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.getService(Services_v2.GetServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV2.prototype.DeleteService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.deleteService.bind(this.Services_v2_client))(Services_v2.DeleteServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.deleteService(Services_v2.DeleteServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV2.prototype.CreateService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.createService.bind(this.Services_v2_client))(Services_v2.CreateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.createService(Services_v2.CreateServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    ServicesV2.prototype.UpdateService = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Services_v2_client.updateService.bind(this.Services_v2_client))(Services_v2.UpdateServiceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Services_v2_client.updateService(Services_v2.UpdateServiceRequest.fromJSON(request), metadata, callback);
        }
    };
    return ServicesV2;
}());
exports.ServicesV2 = ServicesV2;
var MessagesV2 = /** @class */ (function () {
    function MessagesV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Messages_v2_client = new Messages_2.MessagesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    MessagesV2.prototype.GetMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.getMessage.bind(this.Messages_v2_client))(Messages_v2.GetMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.getMessage(Messages_v2.GetMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV2.prototype.CreateMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.createMessage.bind(this.Messages_v2_client))(Messages_v2.CreateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.createMessage(Messages_v2.CreateMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV2.prototype.UpdateMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.updateMessage.bind(this.Messages_v2_client))(Messages_v2.UpdateMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.updateMessage(Messages_v2.UpdateMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    MessagesV2.prototype.DeleteMessage = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Messages_v2_client.deleteMessage.bind(this.Messages_v2_client))(Messages_v2.DeleteMessageRequest.fromJSON(request), metadata);
        }
        else {
            return this.Messages_v2_client.deleteMessage(Messages_v2.DeleteMessageRequest.fromJSON(request), metadata, callback);
        }
    };
    return MessagesV2;
}());
exports.MessagesV2 = MessagesV2;
var TagsV2 = /** @class */ (function () {
    function TagsV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Tags_v2_client = new Tags_1.TagsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    TagsV2.prototype.GetTag = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.getTag.bind(this.Tags_v2_client))(Tags_v2.GetTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.getTag(Tags_v2.GetTagRequest.fromJSON(request), metadata, callback);
        }
    };
    TagsV2.prototype.UpdateTag = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.updateTag.bind(this.Tags_v2_client))(Tags_v2.UpdateTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.updateTag(Tags_v2.UpdateTagRequest.fromJSON(request), metadata, callback);
        }
    };
    TagsV2.prototype.CreateTag = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.createTag.bind(this.Tags_v2_client))(Tags_v2.CreateTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.createTag(Tags_v2.CreateTagRequest.fromJSON(request), metadata, callback);
        }
    };
    TagsV2.prototype.DeleteTag = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.deleteTag.bind(this.Tags_v2_client))(Tags_v2.DeleteTagRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.deleteTag(Tags_v2.DeleteTagRequest.fromJSON(request), metadata, callback);
        }
    };
    TagsV2.prototype.TagResource = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.tagResource.bind(this.Tags_v2_client))(Tags_v2.TagResourceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.tagResource(Tags_v2.TagResourceRequest.fromJSON(request), metadata, callback);
        }
    };
    TagsV2.prototype.ListTags = function (request, metadata, callback) {
        var _this = this;
        if (metadata === void 0) { metadata = this.metadata; }
        return new rxjs_1.Observable(function (subscriber) {
            var stream = _this.Tags_v2_client.listTags(Tags_v2.ListTagsRequest.fromJSON(request), metadata);
            stream.on('data', function (res) {
                subscriber.next(res);
            }).on('end', function () {
                subscriber.complete();
            }).on('error', function (err) {
                subscriber.error(err);
                subscriber.complete();
            });
        });
    };
    TagsV2.prototype.UntagResource = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Tags_v2_client.untagResource.bind(this.Tags_v2_client))(Tags_v2.UntagResourceRequest.fromJSON(request), metadata);
        }
        else {
            return this.Tags_v2_client.untagResource(Tags_v2.UntagResourceRequest.fromJSON(request), metadata, callback);
        }
    };
    return TagsV2;
}());
exports.TagsV2 = TagsV2;
var EnumsV2 = /** @class */ (function () {
    function EnumsV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Enums_v2_client = new Enums_2.EnumsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    EnumsV2.prototype.GetEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.getEnum.bind(this.Enums_v2_client))(Enums_v2.GetEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.getEnum(Enums_v2.GetEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV2.prototype.CreateEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.createEnum.bind(this.Enums_v2_client))(Enums_v2.CreateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.createEnum(Enums_v2.CreateEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV2.prototype.DeleteEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.deleteEnum.bind(this.Enums_v2_client))(Enums_v2.DeleteEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.deleteEnum(Enums_v2.DeleteEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumsV2.prototype.UpdateEnum = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Enums_v2_client.updateEnum.bind(this.Enums_v2_client))(Enums_v2.UpdateEnumRequest.fromJSON(request), metadata);
        }
        else {
            return this.Enums_v2_client.updateEnum(Enums_v2.UpdateEnumRequest.fromJSON(request), metadata, callback);
        }
    };
    return EnumsV2;
}());
exports.EnumsV2 = EnumsV2;
var EnumValuesV2 = /** @class */ (function () {
    function EnumValuesV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.EnumValues_v2_client = new EnumValues_2.EnumValuesClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    EnumValuesV2.prototype.GetEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.getEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.GetEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.getEnumValue(EnumValues_v2.GetEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV2.prototype.CreateEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.createEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.CreateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.createEnumValue(EnumValues_v2.CreateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV2.prototype.UpdateEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.updateEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.UpdateEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.updateEnumValue(EnumValues_v2.UpdateEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    EnumValuesV2.prototype.DeleteEnumValue = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.EnumValues_v2_client.deleteEnumValue.bind(this.EnumValues_v2_client))(EnumValues_v2.DeleteEnumValueRequest.fromJSON(request), metadata);
        }
        else {
            return this.EnumValues_v2_client.deleteEnumValue(EnumValues_v2.DeleteEnumValueRequest.fromJSON(request), metadata, callback);
        }
    };
    return EnumValuesV2;
}());
exports.EnumValuesV2 = EnumValuesV2;
var MethodsV2 = /** @class */ (function () {
    function MethodsV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Methods_v2_client = new Methods_2.MethodsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    MethodsV2.prototype.GetMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.getMethod.bind(this.Methods_v2_client))(Methods_v2.GetMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.getMethod(Methods_v2.GetMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV2.prototype.CreateMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.createMethod.bind(this.Methods_v2_client))(Methods_v2.CreateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.createMethod(Methods_v2.CreateMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV2.prototype.UpdateMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.updateMethod.bind(this.Methods_v2_client))(Methods_v2.UpdateMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.updateMethod(Methods_v2.UpdateMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    MethodsV2.prototype.DeleteMethod = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Methods_v2_client.deleteMethod.bind(this.Methods_v2_client))(Methods_v2.DeleteMethodRequest.fromJSON(request), metadata);
        }
        else {
            return this.Methods_v2_client.deleteMethod(Methods_v2.DeleteMethodRequest.fromJSON(request), metadata, callback);
        }
    };
    return MethodsV2;
}());
exports.MethodsV2 = MethodsV2;
var FieldsV2 = /** @class */ (function () {
    function FieldsV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Fields_v2_client = new Fields_2.FieldsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    FieldsV2.prototype.GetField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.getField.bind(this.Fields_v2_client))(Fields_v2.GetFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.getField(Fields_v2.GetFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV2.prototype.CreateField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.createField.bind(this.Fields_v2_client))(Fields_v2.CreateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.createField(Fields_v2.CreateFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV2.prototype.UpdateField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.updateField.bind(this.Fields_v2_client))(Fields_v2.UpdateFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.updateField(Fields_v2.UpdateFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    FieldsV2.prototype.DeleteField = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Fields_v2_client.deleteField.bind(this.Fields_v2_client))(Fields_v2.DeleteFieldRequest.fromJSON(request), metadata);
        }
        else {
            return this.Fields_v2_client.deleteField(Fields_v2.DeleteFieldRequest.fromJSON(request), metadata, callback);
        }
    };
    return FieldsV2;
}());
exports.FieldsV2 = FieldsV2;
var IntegrationsV2 = /** @class */ (function () {
    function IntegrationsV2(opts) {
        var _a = __assign(__assign({}, DEFAULT_CLIENT_OPTS), opts), host = _a.host, metadata = _a.metadata, port = _a.port, channelCreds = _a.channelCreds;
        this.host = host;
        this.port = port;
        this.metadata = metadata;
        this.metadata.add('sylk-version', '0.2.0');
        this.Integrations_v2_client = new Integrations_1.IntegrationsClient("".concat(this.host, ":").concat(this.port), channelCreds, _DEFAULT_OPTION);
    }
    IntegrationsV2.prototype.GetIntegration = function (request, metadata, callback) {
        if (metadata === void 0) { metadata = this.metadata; }
        if (callback === undefined) {
            return (0, util_1.promisify)(this.Integrations_v2_client.getIntegration.bind(this.Integrations_v2_client))(Integrations_v2.GetIntegrationRequest.fromJSON(request), metadata);
        }
        else {
            return this.Integrations_v2_client.getIntegration(Integrations_v2.GetIntegrationRequest.fromJSON(request), metadata, callback);
        }
    };
    return IntegrationsV2;
}());
exports.IntegrationsV2 = IntegrationsV2;
