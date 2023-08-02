/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { SylkProjectConfigs } from "../../SylkConfigs/v1/SylkConfigs";
import { SylkOrganization } from "../../SylkOrganization/v1/SylkOrganization";
import { SylkPackage } from "../../SylkPackage/v1/SylkPackage";
import { SylkProject } from "../../SylkProject/v1/SylkProject";
import { SylkService } from "../../SylkService/v1/SylkService";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Sylk.v1.SylkJson] - None */
export interface SylkJson {
    /** [sylk.Sylk.v1.SylkJson.sylk_version] - The sylk cli version used to generate project resources */
    sylkVersion: string;
    /** [sylk.Sylk.v1.SylkJson.project] - Sylk project metadata */
    project?: SylkProject;
    /** [sylk.Sylk.v1.SylkJson.organization] - The project assigned organization, the details under this field are used to authenticate to sylk.build api's when trying to publish and pull resources from remote project */
    organization?: SylkOrganization;
    services: {
        [key: string]: SylkService;
    };
    /** [sylk.Sylk.v1.SylkJson.packages] - Sylk project packages map for the project, the map key should be as follows: "protos/<version>/<package>.proto" and the value should be a valid `SylkPackage` */
    packages: {
        [key: string]: SylkPackage;
    };
    /** [sylk.Sylk.v1.SylkJson.configs] - Sylk project configurations */
    configs?: SylkProjectConfigs;
}
export interface SylkJson_ServicesEntry {
    key: string;
    value?: SylkService;
}
export interface SylkJson_PackagesEntry {
    key: string;
    value?: SylkPackage;
}
export declare const SylkJson: {
    encode(message: SylkJson, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson;
    fromJSON(object: any): SylkJson;
    toJSON(message: SylkJson): unknown;
    create<I extends {
        sylkVersion?: string | undefined;
        project?: {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        services?: {
            [x: string]: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } | undefined;
        configs?: {
            description?: string | undefined;
            host?: string | undefined;
            template?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: string[] | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } | undefined;
    } & {
        sylkVersion?: string | undefined;
        project?: ({
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: ({
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] & ({
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            } & {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            } & { [K in Exclude<keyof I["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_1 in Exclude<keyof I["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & { [K_2 in Exclude<keyof I["project"]["server"], "language">]: never; }) | undefined;
            packageName?: string | undefined;
            extensions?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_3 in Exclude<keyof I["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_4 in Exclude<keyof I["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["project"], keyof SylkProject>]: never; }) | undefined;
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & { [K_6 in Exclude<keyof I["organization"], keyof SylkOrganization>]: never; }) | undefined;
        services?: ({
            [x: string]: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_7 in Exclude<keyof I["services"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] & ({
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_8 in Exclude<keyof I["services"][string]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_9 in Exclude<keyof I["services"][string]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_10 in Exclude<keyof I["services"][string]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_11 in Exclude<keyof I["services"][string]["methods"], keyof {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_12 in Exclude<keyof I["services"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_13 in Exclude<keyof I["services"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["services"][string], keyof SylkService>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I["services"], string | number>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                messages?: ({
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] & ({
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                } & {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_16 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_17 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: ({
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] & ({
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: ({
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] & ({
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        } & {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        } & { [K_18 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_19 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[]>]: never; }) | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: ({
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } & {
                            [x: string]: ({
                                [x: string]: any;
                            } & {
                                [x: string]: any;
                            } & { [K_20 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_21 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_22 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_23 in Exclude<keyof I["packages"][string]["messages"][number]["fields"], keyof {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_24 in Exclude<keyof I["packages"][string]["messages"][number], keyof import("../../SylkMessage/v1/SylkMessage").SylkMessage>]: never; })[] & { [K_25 in Exclude<keyof I["packages"][string]["messages"], keyof {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_26 in Exclude<keyof I["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_27 in Exclude<keyof I["packages"][string]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                } & {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: ({
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] & ({
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    } & {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    } & { [K_28 in Exclude<keyof I["packages"][string]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_29 in Exclude<keyof I["packages"][string]["enums"][number]["values"], keyof {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[]>]: never; }) | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                } & { [K_30 in Exclude<keyof I["packages"][string]["enums"][number], keyof import("../../SylkEnum/v1/SylkEnum").SylkEnum>]: never; })[] & { [K_31 in Exclude<keyof I["packages"][string]["enums"], keyof {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_32 in Exclude<keyof I["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_33 in Exclude<keyof I["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I["packages"], string | number>]: never; }) | undefined;
        configs?: ({
            description?: string | undefined;
            host?: string | undefined;
            template?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: string[] | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & {
            description?: string | undefined;
            host?: string | undefined;
            template?: ({
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & {
                include?: (string[] & string[] & { [K_35 in Exclude<keyof I["configs"]["template"]["include"], keyof string[]>]: never; }) | undefined;
                exclude?: (string[] & string[] & { [K_36 in Exclude<keyof I["configs"]["template"]["exclude"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & { [K_37 in Exclude<keyof I["configs"]["template"], keyof import("../../SylkConfigs/v1/SylkConfigs").SylkTemplateConfigs>]: never; }) | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: (string[] & string[] & { [K_38 in Exclude<keyof I["configs"]["plugins"], keyof string[]>]: never; }) | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & { [K_39 in Exclude<keyof I["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
    } & { [K_40 in Exclude<keyof I, keyof SylkJson>]: never; }>(base?: I | undefined): SylkJson;
    fromPartial<I_1 extends {
        sylkVersion?: string | undefined;
        project?: {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } | undefined;
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        services?: {
            [x: string]: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } | undefined;
        configs?: {
            description?: string | undefined;
            host?: string | undefined;
            template?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: string[] | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } | undefined;
    } & {
        sylkVersion?: string | undefined;
        project?: ({
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] | undefined;
            server?: {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            packageName?: string | undefined;
            extensions?: {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] | undefined;
        } & {
            description?: string | undefined;
            javaPackage?: string | undefined;
            goPackage?: string | undefined;
            name?: string | undefined;
            uri?: string | undefined;
            clients?: ({
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[] & ({
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            } & {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            } & { [K_41 in Exclude<keyof I_1["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_42 in Exclude<keyof I_1["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & { [K_43 in Exclude<keyof I_1["project"]["server"], "language">]: never; }) | undefined;
            packageName?: string | undefined;
            extensions?: ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[] & ({
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            } & { [K_44 in Exclude<keyof I_1["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_45 in Exclude<keyof I_1["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_46 in Exclude<keyof I_1["project"], keyof SylkProject>]: never; }) | undefined;
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } & { [K_47 in Exclude<keyof I_1["organization"], keyof SylkOrganization>]: never; }) | undefined;
        services?: ({
            [x: string]: {
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                dependencies?: string[] | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["services"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                description?: string | undefined;
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                methods?: ({
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[] & ({
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_49 in Exclude<keyof I_1["services"][string]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_50 in Exclude<keyof I_1["services"][string]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_51 in Exclude<keyof I_1["services"][string]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_52 in Exclude<keyof I_1["services"][string]["methods"], keyof {
                    clientStreaming?: boolean | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    name?: string | undefined;
                    serverStreaming?: boolean | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_53 in Exclude<keyof I_1["services"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_54 in Exclude<keyof I_1["services"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I_1["services"][string], keyof SylkService>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["services"], string | number>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                messages?: {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                messages?: ({
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[] & ({
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                } & {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_57 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_58 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: ({
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] & ({
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: ({
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] & ({
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        } & {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        } & { [K_59 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_60 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[]>]: never; }) | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: ({
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } & {
                            [x: string]: ({
                                [x: string]: any;
                            } & {
                                [x: string]: any;
                            } & { [K_61 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_62 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_63 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_64 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"], keyof {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_65 in Exclude<keyof I_1["packages"][string]["messages"][number], keyof import("../../SylkMessage/v1/SylkMessage").SylkMessage>]: never; })[] & { [K_66 in Exclude<keyof I_1["packages"][string]["messages"], keyof {
                    extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                    description?: string | undefined;
                    kind?: string | undefined;
                    fields?: {
                        type?: string | undefined;
                        uri?: string | undefined;
                        oneofFields?: {
                            enumType?: string | undefined;
                            fullName?: string | undefined;
                            uri?: string | undefined;
                            messageType?: string | undefined;
                            fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                            name?: string | undefined;
                            description?: string | undefined;
                            label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                            index?: number | undefined;
                            kind?: string | undefined;
                        }[] | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        enumType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        kind?: string | undefined;
                        fullName?: string | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_67 in Exclude<keyof I_1["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_68 in Exclude<keyof I_1["packages"][string]["extensions"], string | number>]: never; }) | undefined;
                type?: string | undefined;
                description?: string | undefined;
                enums?: ({
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[] & ({
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                } & {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: ({
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] & ({
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    } & {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    } & { [K_69 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_70 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"], keyof {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[]>]: never; }) | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                } & { [K_71 in Exclude<keyof I_1["packages"][string]["enums"][number], keyof import("../../SylkEnum/v1/SylkEnum").SylkEnum>]: never; })[] & { [K_72 in Exclude<keyof I_1["packages"][string]["enums"], keyof {
                    type?: string | undefined;
                    kind?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        kind?: string | undefined;
                        description?: string | undefined;
                        index?: number | undefined;
                        uri?: string | undefined;
                        name?: string | undefined;
                        number?: number | undefined;
                        fullName?: string | undefined;
                        type?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    uri?: string | undefined;
                    fullName?: string | undefined;
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_73 in Exclude<keyof I_1["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_74 in Exclude<keyof I_1["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_75 in Exclude<keyof I_1["packages"], string | number>]: never; }) | undefined;
        configs?: ({
            description?: string | undefined;
            host?: string | undefined;
            template?: {
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: string[] | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & {
            description?: string | undefined;
            host?: string | undefined;
            template?: ({
                include?: string[] | undefined;
                exclude?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & {
                include?: (string[] & string[] & { [K_76 in Exclude<keyof I_1["configs"]["template"]["include"], keyof string[]>]: never; }) | undefined;
                exclude?: (string[] & string[] & { [K_77 in Exclude<keyof I_1["configs"]["template"]["exclude"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & { [K_78 in Exclude<keyof I_1["configs"]["template"], keyof import("../../SylkConfigs/v1/SylkConfigs").SylkTemplateConfigs>]: never; }) | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: (string[] & string[] & { [K_79 in Exclude<keyof I_1["configs"]["plugins"], keyof string[]>]: never; }) | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & { [K_80 in Exclude<keyof I_1["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
    } & { [K_81 in Exclude<keyof I_1, keyof SylkJson>]: never; }>(object: I_1): SylkJson;
};
export declare const SylkJson_ServicesEntry: {
    encode(message: SylkJson_ServicesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson_ServicesEntry;
    fromJSON(object: any): SylkJson_ServicesEntry;
    toJSON(message: SylkJson_ServicesEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K in Exclude<keyof I["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_1 in Exclude<keyof I["value"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_3 in Exclude<keyof I["value"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["value"]["methods"], keyof {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_5 in Exclude<keyof I["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["value"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["value"], keyof SylkService>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof SylkJson_ServicesEntry>]: never; }>(base?: I | undefined): SylkJson_ServicesEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            dependencies?: string[] | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            dependencies?: (string[] & string[] & { [K_9 in Exclude<keyof I_1["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            description?: string | undefined;
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            type?: string | undefined;
            methods?: ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[] & ({
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_10 in Exclude<keyof I_1["value"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I_1["value"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            } & { [K_12 in Exclude<keyof I_1["value"]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_13 in Exclude<keyof I_1["value"]["methods"], keyof {
                clientStreaming?: boolean | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                name?: string | undefined;
                serverStreaming?: boolean | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                uri?: string | undefined;
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_14 in Exclude<keyof I_1["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_15 in Exclude<keyof I_1["value"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I_1["value"], keyof SylkService>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof SylkJson_ServicesEntry>]: never; }>(object: I_1): SylkJson_ServicesEntry;
};
export declare const SylkJson_PackagesEntry: {
    encode(message: SylkJson_PackagesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson_PackagesEntry;
    fromJSON(object: any): SylkJson_PackagesEntry;
    toJSON(message: SylkJson_PackagesEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            messages?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            messages?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            messages?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] & ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K in Exclude<keyof I["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] & ({
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: ({
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] & ({
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    } & {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[]>]: never; }) | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_4 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_6 in Exclude<keyof I["value"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_7 in Exclude<keyof I["value"]["messages"][number]["fields"], keyof {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["value"]["messages"][number], keyof import("../../SylkMessage/v1/SylkMessage").SylkMessage>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["messages"], keyof {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_10 in Exclude<keyof I["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["value"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] & ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                } & {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                } & { [K_12 in Exclude<keyof I["value"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_13 in Exclude<keyof I["value"]["enums"][number]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            } & { [K_14 in Exclude<keyof I["value"]["enums"][number], keyof import("../../SylkEnum/v1/SylkEnum").SylkEnum>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["enums"], keyof {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_16 in Exclude<keyof I["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_17 in Exclude<keyof I["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_18 in Exclude<keyof I, keyof SylkJson_PackagesEntry>]: never; }>(base?: I | undefined): SylkJson_PackagesEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            messages?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            messages?: {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            messages?: ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[] & ({
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            } & {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_19 in Exclude<keyof I_1["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I_1["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: ({
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] & ({
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: ({
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] & ({
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    } & {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    } & { [K_21 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_22 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[]>]: never; }) | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_23 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_24 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_25 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_26 in Exclude<keyof I_1["value"]["messages"][number]["fields"], keyof {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_27 in Exclude<keyof I_1["value"]["messages"][number], keyof import("../../SylkMessage/v1/SylkMessage").SylkMessage>]: never; })[] & { [K_28 in Exclude<keyof I_1["value"]["messages"], keyof {
                extensionType?: import("../../SylkCommons/v1/SylkCommons").SylkExtensions | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                fullName?: string | undefined;
                type?: string | undefined;
                description?: string | undefined;
                kind?: string | undefined;
                fields?: {
                    type?: string | undefined;
                    uri?: string | undefined;
                    oneofFields?: {
                        enumType?: string | undefined;
                        fullName?: string | undefined;
                        uri?: string | undefined;
                        messageType?: string | undefined;
                        fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        name?: string | undefined;
                        description?: string | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        index?: number | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    name?: string | undefined;
                    description?: string | undefined;
                    enumType?: string | undefined;
                    fieldType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    kind?: string | undefined;
                    fullName?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_29 in Exclude<keyof I_1["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_30 in Exclude<keyof I_1["value"]["extensions"], string | number>]: never; }) | undefined;
            type?: string | undefined;
            description?: string | undefined;
            enums?: ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[] & ({
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            } & {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] & ({
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                } & {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                } & { [K_31 in Exclude<keyof I_1["value"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["enums"][number]["values"], keyof {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            } & { [K_33 in Exclude<keyof I_1["value"]["enums"][number], keyof import("../../SylkEnum/v1/SylkEnum").SylkEnum>]: never; })[] & { [K_34 in Exclude<keyof I_1["value"]["enums"], keyof {
                type?: string | undefined;
                kind?: string | undefined;
                description?: string | undefined;
                values?: {
                    kind?: string | undefined;
                    description?: string | undefined;
                    index?: number | undefined;
                    uri?: string | undefined;
                    name?: string | undefined;
                    number?: number | undefined;
                    fullName?: string | undefined;
                    type?: string | undefined;
                }[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
                fullName?: string | undefined;
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_35 in Exclude<keyof I_1["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_36 in Exclude<keyof I_1["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_37 in Exclude<keyof I_1, keyof SylkJson_PackagesEntry>]: never; }>(object: I_1): SylkJson_PackagesEntry;
};
