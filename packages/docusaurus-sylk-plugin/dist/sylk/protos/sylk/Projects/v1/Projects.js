"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsClient = exports.ProjectsService = void 0;
/* eslint-disable */
var grpc_js_1 = require("@grpc/grpc-js");
var SylkApi_1 = require("../../SylkApi/v1/SylkApi");
exports.ProjectsService = {
    /** [sylk] - None */
    updateUserRoleProject: {
        path: "/sylk.Projects.v1.Projects/UpdateUserRoleProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserRoleRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateUserRoleRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserRoleResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateUserRoleResponse.decode(value); },
    },
    /** [sylk] - None */
    removeUserProject: {
        path: "/sylk.Projects.v1.Projects/RemoveUserProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.RemoveUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.RemoveUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.RemoveUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.RemoveUserResponse.decode(value); },
    },
    /** [sylk] - None */
    addUserProject: {
        path: "/sylk.Projects.v1.Projects/AddUserProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.AddUserRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.AddUserRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.AddUserResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.AddUserResponse.decode(value); },
    },
    /** [sylk] - None */
    getProject: {
        path: "/sylk.Projects.v1.Projects/GetProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.GetProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetProjectResponse.decode(value); },
    },
    /** [sylk] - None */
    updateProject: {
        path: "/sylk.Projects.v1.Projects/UpdateProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateProjectResponse.decode(value); },
    },
    /** [sylk] - None */
    createProject: {
        path: "/sylk.Projects.v1.Projects/CreateProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.CreateProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.CreateProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.CreateProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.CreateProjectResponse.decode(value); },
    },
    /** [sylk] - None */
    deleteProject: {
        path: "/sylk.Projects.v1.Projects/DeleteProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteProjectRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.DeleteProjectRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.DeleteProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.DeleteProjectResponse.decode(value); },
    },
    /** [sylk] - None */
    listProjects: {
        path: "/sylk.Projects.v1.Projects/ListProjects",
        requestStream: false,
        responseStream: true,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.ListProjectsRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.ListProjectsRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.GetProjectResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.GetProjectResponse.decode(value); },
    },
    /** [sylk] - None */
    updateUserStatusProject: {
        path: "/sylk.Projects.v1.Projects/UpdateUserStatusProject",
        requestStream: false,
        responseStream: false,
        requestSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserStatusRequest.encode(value).finish()); },
        requestDeserialize: function (value) { return SylkApi_1.UpdateUserStatusRequest.decode(value); },
        responseSerialize: function (value) { return Buffer.from(SylkApi_1.UpdateUserStatusResponse.encode(value).finish()); },
        responseDeserialize: function (value) { return SylkApi_1.UpdateUserStatusResponse.decode(value); },
    },
};
exports.ProjectsClient = (0, grpc_js_1.makeGenericClientConstructor)(exports.ProjectsService, "sylk.Projects.v1.Projects");
