"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsClient = exports.ProjectsService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("./SylkApi");
exports.ProjectsService = {
    /** [webezyio] - */
    getProject: {
        path: "/Projects/GetProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetProjectResponse.decode(value); },
    },
    /** [webezyio] - */
    updateProject: {
        path: "/Projects/UpdateProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateProjectResponse.decode(value); },
    },
    /** [webezyio] - */
    deleteProject: {
        path: "/Projects/DeleteProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteProjectResponse.decode(value); },
    },
    /** [webezyio] - */
    addUserProject: {
        path: "/Projects/AddUserProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.AddUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.AddUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.AddUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.AddUserResponse.decode(value); },
    },
    /** [webezyio] - */
    updateUserRoleProject: {
        path: "/Projects/UpdateUserRoleProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserRoleRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateUserRoleRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserRoleResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateUserRoleResponse.decode(value); },
    },
    /** [webezyio] - */
    updateUserStatusProject: {
        path: "/Projects/UpdateUserStatusProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserStatusRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateUserStatusRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserStatusResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateUserStatusResponse.decode(value); },
    },
    /** [webezyio] - */
    removeUserProject: {
        path: "/Projects/RemoveUserProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.RemoveUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.RemoveUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.RemoveUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.RemoveUserResponse.decode(value); },
    },
    /** [webezyio] - */
    listProjects: {
        path: "/Projects/ListProjects",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.ListProjectsRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.ListProjectsRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetProjectResponse.decode(value); },
    },
    /** [webezyio] - */
    createProject: {
        path: "/Projects/CreateProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateProjectResponse.decode(value); },
    },
};
exports.ProjectsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectsService, "Projects");
