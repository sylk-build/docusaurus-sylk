"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesClient = exports.ActivitiesService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var ActivityLog_1 = require("../../ActivityLog/v1/ActivityLog");
exports.ActivitiesService = {
    /** [sylk] - None */
    listActivityLogs: {
        path: "/sylk.Activities.v1.Activities/ListActivityLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(ActivityLog_1.ListActivityLogsRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return ActivityLog_1.ListActivityLogsRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(ActivityLog_1.ActivityLog.encode(value).finish()); },
        responseDeserialize: function (value) { return ActivityLog_1.ActivityLog.decode(value); },
    },
    /** [sylk] - None */
    getActivityLogs: {
        path: "/sylk.Activities.v1.Activities/GetActivityLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(ActivityLog_1.ListActivityLogsRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return ActivityLog_1.ListActivityLogsRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(ActivityLog_1.GetActivityLogsResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return ActivityLog_1.GetActivityLogsResponse.decode(value); },
    },
};
exports.ActivitiesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ActivitiesService, "sylk.Activities.v1.Activities");
