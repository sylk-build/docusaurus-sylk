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
Object.defineProperty(exports, "__esModule", { value: true });
var pluginOptionDefaults = {
    sylkDocsPath: './sylkdocs',
    sidebarPath: './sidebarsSylkdocs.js',
};
var contentDocOptionsDefaults = {
    routeBasePath: 'sylk',
    sidebarPath: './sidebarsSylkdocs.js',
};
function preset(context, options) {
    var pluginOptions = __assign(__assign({}, pluginOptionDefaults), options.sylk);
    var docOptions = __assign(__assign({ id: 'sylkdocs', path: pluginOptions.sylkDocsPath }, contentDocOptionsDefaults), options.docs);
    pluginOptions.routeBasePath = docOptions.routeBasePath;
    var config = {
        plugins: [
            [
                require.resolve('docusaurus-sylk-plugin'),
                pluginOptions,
            ],
            [
                '@docusaurus/plugin-content-docs',
                docOptions,
            ],
        ],
    };
    return config;
}
exports.default = preset;
