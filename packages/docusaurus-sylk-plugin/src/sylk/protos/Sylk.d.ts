import _m0 from "protobufjs/minimal";
import { SylkProjectConfigs } from "./SylkConfigs";
import { SylkOrganization } from "./SylkOrganization";
import { SylkPackage } from "./SylkPackage";
import { SylkProject } from "./SylkProject";
import { SylkService } from "./SylkService";
/** Webezy.io Generated proto DO NOT EDIT */
/** [sylk.Sylk.v1.SylkJson] - */
export interface SylkJson {
    /** [sylk.Sylk.v1.SylkJson.organization] - The project assigned organization, the details under this field are used to authenticate to sylk.build api's when trying to publish and pull resources from remote project */
    organization?: SylkOrganization;
    /** [sylk.Sylk.v1.SylkJson.packages] - Sylk project packages map for the project, the map key should be as follows: "protos/<version>/<package>.proto" and the value should be a valid `SylkPackage` */
    packages: {
        [key: string]: SylkPackage;
    };
    /** [sylk.Sylk.v1.SylkJson.services] - */
    services: {
        [key: string]: SylkService;
    };
    /** [sylk.Sylk.v1.SylkJson.configs] - Sylk project configurations */
    configs?: SylkProjectConfigs;
    /** [sylk.Sylk.v1.SylkJson.sylk_version] - The sylk cli version used to generate project resources */
    sylkVersion: string;
    /** [sylk.Sylk.v1.SylkJson.project] - Sylk project metadata */
    project?: SylkProject;
}
export interface SylkJson_PackagesEntry {
    key: string;
    value?: SylkPackage;
}
export interface SylkJson_ServicesEntry {
    key: string;
    value?: SylkService;
}
export declare const SylkJson: {
    encode(message: SylkJson, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson;
    fromJSON(object: any): SylkJson;
    toJSON(message: SylkJson): unknown;
    create<I extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        services?: {
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        configs?: {
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } | undefined;
        sylkVersion?: string | undefined;
        project?: {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & { [K in Exclude<keyof I["organization"], keyof SylkOrganization>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: ({
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } & {
                            [x: string]: ({
                                [x: string]: any;
                            } & {
                                [x: string]: any;
                            } & { [K_1 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_2 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        oneofFields?: ({
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] & ({
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        } & {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        } & { [K_3 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_4 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_6 in Exclude<keyof I["packages"][string]["messages"][number]["fields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    type?: string | undefined;
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
                        } & { [K_7 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_8 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                } & { [K_9 in Exclude<keyof I["packages"][string]["messages"][number], keyof import("./SylkMessage").SylkMessage>]: never; })[] & { [K_10 in Exclude<keyof I["packages"][string]["messages"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[]>]: never; }) | undefined;
                enums?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    } & { [K_11 in Exclude<keyof I["packages"][string]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_12 in Exclude<keyof I["packages"][string]["enums"][number]["values"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[]>]: never; }) | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_13 in Exclude<keyof I["packages"][string]["enums"][number], keyof import("./SylkEnum").SylkEnum>]: never; })[] & { [K_14 in Exclude<keyof I["packages"][string]["enums"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: (string[] & string[] & { [K_15 in Exclude<keyof I["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_16 in Exclude<keyof I["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["packages"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_18 in Exclude<keyof I["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_19 in Exclude<keyof I["packages"], string | number>]: never; }) | undefined;
        services?: ({
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
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
                        } & { [K_20 in Exclude<keyof I["services"][string]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_21 in Exclude<keyof I["services"][string]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["services"][string]["methods"][number], keyof import("./SylkMethod").SylkMethod>]: never; })[] & { [K_23 in Exclude<keyof I["services"][string]["methods"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                dependencies?: (string[] & string[] & { [K_24 in Exclude<keyof I["services"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_25 in Exclude<keyof I["services"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["services"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_27 in Exclude<keyof I["services"][string], keyof SylkService>]: never; }) | undefined;
        } & { [K_28 in Exclude<keyof I["services"], string | number>]: never; }) | undefined;
        configs?: ({
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } & {
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } & { [K_29 in Exclude<keyof I["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
        sylkVersion?: string | undefined;
        project?: ({
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] & ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & { [K_30 in Exclude<keyof I["project"]["clients"][number], keyof import("./SylkClient").SylkClient>]: never; })[] & { [K_31 in Exclude<keyof I["project"]["clients"], keyof {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[]>]: never; }) | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_32 in Exclude<keyof I["project"]["server"], "language">]: never; }) | undefined;
            description?: string | undefined;
        } & { [K_33 in Exclude<keyof I["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_34 in Exclude<keyof I, keyof SylkJson>]: never; }>(base?: I | undefined): SylkJson;
    fromPartial<I_1 extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        services?: {
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } | undefined;
        configs?: {
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } | undefined;
        sylkVersion?: string | undefined;
        project?: {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } | undefined;
    } & {
        organization?: ({
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & {
            orgId?: string | undefined;
            name?: string | undefined;
            domain?: string | undefined;
            owner?: string | undefined;
        } & { [K_35 in Exclude<keyof I_1["organization"], keyof SylkOrganization>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] | undefined;
                enums?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                package?: string | undefined;
                messages?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: ({
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } & {
                            [x: string]: ({
                                [x: string]: any;
                            } & {
                                [x: string]: any;
                            } & { [K_36 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_37 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        oneofFields?: ({
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] & ({
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        } & {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        } & { [K_38 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_39 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[]>]: never; }) | undefined;
                    } & { [K_40 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_41 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[]>]: never; }) | undefined;
                    type?: string | undefined;
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
                        } & { [K_42 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_43 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                } & { [K_44 in Exclude<keyof I_1["packages"][string]["messages"][number], keyof import("./SylkMessage").SylkMessage>]: never; })[] & { [K_45 in Exclude<keyof I_1["packages"][string]["messages"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        keyType?: import("./SylkField").SylkFieldTypes | undefined;
                        valueType?: import("./SylkField").SylkFieldTypes | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                        index?: number | undefined;
                        extensions?: {
                            [x: string]: {
                                [x: string]: any;
                            } | undefined;
                        } | undefined;
                        oneofFields?: {
                            uri?: string | undefined;
                            name?: string | undefined;
                            fullName?: string | undefined;
                            description?: string | undefined;
                            fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                            label?: import("./SylkField").SylkFieldLabels | undefined;
                            messageType?: string | undefined;
                            enumType?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    extensionType?: import("./SylkCommons").SylkExtensions | undefined;
                }[]>]: never; }) | undefined;
                enums?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    } & { [K_46 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_47 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[]>]: never; }) | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_48 in Exclude<keyof I_1["packages"][string]["enums"][number], keyof import("./SylkEnum").SylkEnum>]: never; })[] & { [K_49 in Exclude<keyof I_1["packages"][string]["enums"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    values?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        index?: number | undefined;
                        number?: number | undefined;
                        description?: string | undefined;
                        type?: string | undefined;
                        kind?: string | undefined;
                    }[] | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                description?: string | undefined;
                type?: string | undefined;
                dependencies?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_51 in Exclude<keyof I_1["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_52 in Exclude<keyof I_1["packages"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_53 in Exclude<keyof I_1["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I_1["packages"], string | number>]: never; }) | undefined;
        services?: ({
            [x: string]: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] | undefined;
                type?: string | undefined;
                dependencies?: string[] | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                methods?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
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
                        } & { [K_55 in Exclude<keyof I_1["services"][string]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_56 in Exclude<keyof I_1["services"][string]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                } & { [K_57 in Exclude<keyof I_1["services"][string]["methods"][number], keyof import("./SylkMethod").SylkMethod>]: never; })[] & { [K_58 in Exclude<keyof I_1["services"][string]["methods"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    clientStreaming?: boolean | undefined;
                    serverStreaming?: boolean | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                dependencies?: (string[] & string[] & { [K_59 in Exclude<keyof I_1["services"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                extensions?: ({
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } & {
                    [x: string]: ({
                        [x: string]: any;
                    } & {
                        [x: string]: any;
                    } & { [K_60 in Exclude<keyof I_1["services"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I_1["services"][string]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_62 in Exclude<keyof I_1["services"][string], keyof SylkService>]: never; }) | undefined;
        } & { [K_63 in Exclude<keyof I_1["services"], string | number>]: never; }) | undefined;
        configs?: ({
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } & {
            host?: string | undefined;
            port?: number | undefined;
            description?: string | undefined;
            currentVersion?: string | undefined;
        } & { [K_64 in Exclude<keyof I_1["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
        sylkVersion?: string | undefined;
        project?: ({
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } | undefined;
            description?: string | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            packageName?: string | undefined;
            clients?: ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[] & ({
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            } & { [K_65 in Exclude<keyof I_1["project"]["clients"][number], keyof import("./SylkClient").SylkClient>]: never; })[] & { [K_66 in Exclude<keyof I_1["project"]["clients"], keyof {
                language?: import("./SylkClient").SylkClientLanguages | undefined;
                outDir?: string | undefined;
            }[]>]: never; }) | undefined;
            goPackage?: string | undefined;
            javaPackage?: string | undefined;
            server?: ({
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("./SylkServer").SylkServerLanguages | undefined;
            } & { [K_67 in Exclude<keyof I_1["project"]["server"], "language">]: never; }) | undefined;
            description?: string | undefined;
        } & { [K_68 in Exclude<keyof I_1["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_69 in Exclude<keyof I_1, keyof SylkJson>]: never; }>(object: I_1): SylkJson;
};
export declare const SylkJson_PackagesEntry: {
    encode(message: SylkJson_PackagesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson_PackagesEntry;
    fromJSON(object: any): SylkJson_PackagesEntry;
    toJSON(message: SylkJson_PackagesEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_1 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    oneofFields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & { [K_2 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_4 in Exclude<keyof I["value"]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_5 in Exclude<keyof I["value"]["messages"][number]["fields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
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
                    } & { [K_6 in Exclude<keyof I["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_7 in Exclude<keyof I["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & { [K_8 in Exclude<keyof I["value"]["messages"][number], keyof import("./SylkMessage").SylkMessage>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["messages"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[]>]: never; }) | undefined;
            enums?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_11 in Exclude<keyof I["value"]["enums"][number]["values"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_12 in Exclude<keyof I["value"]["enums"][number], keyof import("./SylkEnum").SylkEnum>]: never; })[] & { [K_13 in Exclude<keyof I["value"]["enums"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_14 in Exclude<keyof I["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_15 in Exclude<keyof I["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_16 in Exclude<keyof I["value"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_18 in Exclude<keyof I, keyof SylkJson_PackagesEntry>]: never; }>(base?: I | undefined): SylkJson_PackagesEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] | undefined;
            enums?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            package?: string | undefined;
            messages?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: ({
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } & {
                        [x: string]: ({
                            [x: string]: any;
                        } & {
                            [x: string]: any;
                        } & { [K_19 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_20 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    oneofFields?: ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] & ({
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    } & { [K_21 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("./SylkField").SylkOneOfField>]: never; })[] & { [K_22 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number], keyof import("./SylkField").SylkField>]: never; })[] & { [K_24 in Exclude<keyof I_1["value"]["messages"][number]["fields"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
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
                    } & { [K_25 in Exclude<keyof I_1["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I_1["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            } & { [K_27 in Exclude<keyof I_1["value"]["messages"][number], keyof import("./SylkMessage").SylkMessage>]: never; })[] & { [K_28 in Exclude<keyof I_1["value"]["messages"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                fields?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    description?: string | undefined;
                    fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                    label?: import("./SylkField").SylkFieldLabels | undefined;
                    keyType?: import("./SylkField").SylkFieldTypes | undefined;
                    valueType?: import("./SylkField").SylkFieldTypes | undefined;
                    messageType?: string | undefined;
                    enumType?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                    index?: number | undefined;
                    extensions?: {
                        [x: string]: {
                            [x: string]: any;
                        } | undefined;
                    } | undefined;
                    oneofFields?: {
                        uri?: string | undefined;
                        name?: string | undefined;
                        fullName?: string | undefined;
                        description?: string | undefined;
                        fieldType?: import("./SylkField").SylkFieldTypes | undefined;
                        label?: import("./SylkField").SylkFieldLabels | undefined;
                        messageType?: string | undefined;
                        enumType?: string | undefined;
                    }[] | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
                extensionType?: import("./SylkCommons").SylkExtensions | undefined;
            }[]>]: never; }) | undefined;
            enums?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                } & { [K_29 in Exclude<keyof I_1["value"]["enums"][number]["values"][number], keyof import("./SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_30 in Exclude<keyof I_1["value"]["enums"][number]["values"], keyof {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[]>]: never; }) | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            } & { [K_31 in Exclude<keyof I_1["value"]["enums"][number], keyof import("./SylkEnum").SylkEnum>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["enums"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                values?: {
                    uri?: string | undefined;
                    name?: string | undefined;
                    fullName?: string | undefined;
                    index?: number | undefined;
                    number?: number | undefined;
                    description?: string | undefined;
                    type?: string | undefined;
                    kind?: string | undefined;
                }[] | undefined;
                type?: string | undefined;
                kind?: string | undefined;
            }[]>]: never; }) | undefined;
            description?: string | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_33 in Exclude<keyof I_1["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            extensions?: ({
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } & {
                [x: string]: ({
                    [x: string]: any;
                } & {
                    [x: string]: any;
                } & { [K_34 in Exclude<keyof I_1["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_35 in Exclude<keyof I_1["value"]["extensions"], string | number>]: never; }) | undefined;
        } & { [K_36 in Exclude<keyof I_1["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_37 in Exclude<keyof I_1, keyof SylkJson_PackagesEntry>]: never; }>(object: I_1): SylkJson_PackagesEntry;
};
export declare const SylkJson_ServicesEntry: {
    encode(message: SylkJson_ServicesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson_ServicesEntry;
    fromJSON(object: any): SylkJson_ServicesEntry;
    toJSON(message: SylkJson_ServicesEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
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
                    } & { [K in Exclude<keyof I["value"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_1 in Exclude<keyof I["value"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["value"]["methods"][number], keyof import("./SylkMethod").SylkMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["methods"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_4 in Exclude<keyof I["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
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
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] | undefined;
            type?: string | undefined;
            dependencies?: string[] | undefined;
            extensions?: {
                [x: string]: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        } & {
            uri?: string | undefined;
            name?: string | undefined;
            fullName?: string | undefined;
            description?: string | undefined;
            methods?: ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[] & ({
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            } & {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
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
                    } & { [K_9 in Exclude<keyof I_1["value"]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I_1["value"]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I_1["value"]["methods"][number], keyof import("./SylkMethod").SylkMethod>]: never; })[] & { [K_12 in Exclude<keyof I_1["value"]["methods"], keyof {
                uri?: string | undefined;
                name?: string | undefined;
                fullName?: string | undefined;
                description?: string | undefined;
                inputType?: string | undefined;
                outputType?: string | undefined;
                clientStreaming?: boolean | undefined;
                serverStreaming?: boolean | undefined;
                type?: string | undefined;
                kind?: string | undefined;
                extensions?: {
                    [x: string]: {
                        [x: string]: any;
                    } | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            type?: string | undefined;
            dependencies?: (string[] & string[] & { [K_13 in Exclude<keyof I_1["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
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
