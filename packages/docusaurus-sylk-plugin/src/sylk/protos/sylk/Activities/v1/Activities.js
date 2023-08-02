"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesClient = exports.ActivitiesService = void 0;
/* eslint-disable */
const grpc_js_1 = require("@grpc/grpc-js");
const ActivityLog_1 = require("../../ActivityLog/v1/ActivityLog");
exports.ActivitiesService = {
    /** [sylk] - None */
    listActivityLogs: {
        path: "/sylk.Activities.v1.Activities/ListActivityLogs",
        requestStream: false,
        responseStream: true,
        requestSerialize: (value) => Buffer.from(ActivityLog_1.ListActivityLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => ActivityLog_1.ListActivityLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ActivityLog_1.ActivityLog.encode(value).finish()),
        responseDeserialize: (value) => ActivityLog_1.ActivityLog.decode(value),
    },
    /** [sylk] - None */
    getActivityLogs: {
        path: "/sylk.Activities.v1.Activities/GetActivityLogs",
        requestStream: false,
        responseStream: false,
        requestSerialize: (value) => Buffer.from(ActivityLog_1.ListActivityLogsRequest.encode(value).finish()),
        requestDeserialize: (value) => ActivityLog_1.ListActivityLogsRequest.decode(value),
        responseSerialize: (value) => Buffer.from(ActivityLog_1.GetActivityLogsResponse.encode(value).finish()),
        responseDeserialize: (value) => ActivityLog_1.GetActivityLogsResponse.decode(value),
    },
};
exports.ActivitiesClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ActivitiesService, "sylk.Activities.v1.Activities");
//# sourceMappingURL=Activities.js.map