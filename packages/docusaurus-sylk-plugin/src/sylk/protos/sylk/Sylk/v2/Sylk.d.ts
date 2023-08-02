/// <reference types="node" />
import _m0 from "protobufjs/minimal";
import { SylkProjectConfigs } from "../../SylkConfigs/v1/SylkConfigs";
import { SylkOrganization } from "../../SylkOrganization/v1/SylkOrganization";
import { SylkPackage } from "../../SylkPackage/v2/SylkPackage";
import { SylkProject } from "../../SylkProject/v1/SylkProject";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Sylk.v2.SylkJson] - None */
export interface SylkJson {
    organization?: SylkOrganization;
    packages: {
        [key: string]: SylkPackage;
    };
    configs?: SylkProjectConfigs;
    sylkVersion: string;
    project?: SylkProject;
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
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
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
    } & {
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
        } & { [K in Exclude<keyof I["organization"], keyof SylkOrganization>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                    tag?: string | undefined;
                }[] & ({
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
                    tag?: string | undefined;
                } & {
                    dependencies?: (string[] & string[] & { [K_1 in Exclude<keyof I["packages"][string]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_2 in Exclude<keyof I["packages"][string]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_3 in Exclude<keyof I["packages"][string]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["packages"][string]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_5 in Exclude<keyof I["packages"][string]["services"][number]["methods"], keyof {
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
                        } & { [K_6 in Exclude<keyof I["packages"][string]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_7 in Exclude<keyof I["packages"][string]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_8 in Exclude<keyof I["packages"][string]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_9 in Exclude<keyof I["packages"][string]["services"], keyof {
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
                    tag?: string | undefined;
                }[]>]: never; }) | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                        } & { [K_10 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_11 in Exclude<keyof I["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_12 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_13 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_14 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_15 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_16 in Exclude<keyof I["packages"][string]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_17 in Exclude<keyof I["packages"][string]["messages"][number]["fields"], keyof {
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
                    tag?: string | undefined;
                    inlines?: ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] & ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & { [K_18 in Exclude<keyof I["packages"][string]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_19 in Exclude<keyof I["packages"][string]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_20 in Exclude<keyof I["packages"][string]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_21 in Exclude<keyof I["packages"][string]["messages"], keyof {
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    } & { [K_22 in Exclude<keyof I["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_23 in Exclude<keyof I["packages"][string]["extensions"], string | number>]: never; }) | undefined;
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
                    tag?: string | undefined;
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
                    tag?: string | undefined;
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
                    } & { [K_24 in Exclude<keyof I["packages"][string]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_25 in Exclude<keyof I["packages"][string]["enums"][number]["values"], keyof {
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
                    tag?: string | undefined;
                } & { [K_26 in Exclude<keyof I["packages"][string]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_27 in Exclude<keyof I["packages"][string]["enums"], keyof {
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
                    tag?: string | undefined;
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_28 in Exclude<keyof I["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_29 in Exclude<keyof I["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_30 in Exclude<keyof I["packages"], string | number>]: never; }) | undefined;
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
                include?: (string[] & string[] & { [K_31 in Exclude<keyof I["configs"]["template"]["include"], keyof string[]>]: never; }) | undefined;
                exclude?: (string[] & string[] & { [K_32 in Exclude<keyof I["configs"]["template"]["exclude"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & { [K_33 in Exclude<keyof I["configs"]["template"], keyof import("../../SylkConfigs/v1/SylkConfigs").SylkTemplateConfigs>]: never; }) | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: (string[] & string[] & { [K_34 in Exclude<keyof I["configs"]["plugins"], keyof string[]>]: never; }) | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & { [K_35 in Exclude<keyof I["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
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
            } & { [K_36 in Exclude<keyof I["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_37 in Exclude<keyof I["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & { [K_38 in Exclude<keyof I["project"]["server"], "language">]: never; }) | undefined;
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
            } & { [K_39 in Exclude<keyof I["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_40 in Exclude<keyof I["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_41 in Exclude<keyof I["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_42 in Exclude<keyof I, keyof SylkJson>]: never; }>(base?: I | undefined): SylkJson;
    fromPartial<I_1 extends {
        organization?: {
            orgId?: string | undefined;
            name?: string | undefined;
            owner?: string | undefined;
            domain?: string | undefined;
        } | undefined;
        packages?: {
            [x: string]: {
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
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
    } & {
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
        } & { [K_43 in Exclude<keyof I_1["organization"], keyof SylkOrganization>]: never; }) | undefined;
        packages?: ({
            [x: string]: {
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } | undefined;
        } & {
            [x: string]: ({
                services?: {
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
                    tag?: string | undefined;
                }[] | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                }[] | undefined;
                package?: string | undefined;
                dependencies?: string[] | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & {
                services?: ({
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
                    tag?: string | undefined;
                }[] & ({
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
                    tag?: string | undefined;
                } & {
                    dependencies?: (string[] & string[] & { [K_44 in Exclude<keyof I_1["packages"][string]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                            } & { [K_45 in Exclude<keyof I_1["packages"][string]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_46 in Exclude<keyof I_1["packages"][string]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                        inputType?: string | undefined;
                        outputType?: string | undefined;
                        uri?: string | undefined;
                    } & { [K_47 in Exclude<keyof I_1["packages"][string]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_48 in Exclude<keyof I_1["packages"][string]["services"][number]["methods"], keyof {
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
                        } & { [K_49 in Exclude<keyof I_1["packages"][string]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_50 in Exclude<keyof I_1["packages"][string]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                    tag?: string | undefined;
                } & { [K_51 in Exclude<keyof I_1["packages"][string]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_52 in Exclude<keyof I_1["packages"][string]["services"], keyof {
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
                    tag?: string | undefined;
                }[]>]: never; }) | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                        } & { [K_53 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_54 in Exclude<keyof I_1["packages"][string]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                        } & { [K_55 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_56 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                            } & { [K_57 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                        } & { [K_58 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                        index?: number | undefined;
                        label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                        keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                        valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    } & { [K_59 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_60 in Exclude<keyof I_1["packages"][string]["messages"][number]["fields"], keyof {
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
                    tag?: string | undefined;
                    inlines?: ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[] & ({
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    } & { [K_61 in Exclude<keyof I_1["packages"][string]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_62 in Exclude<keyof I_1["packages"][string]["messages"][number]["inlines"], keyof {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_63 in Exclude<keyof I_1["packages"][string]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_64 in Exclude<keyof I_1["packages"][string]["messages"], keyof {
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
                    tag?: string | undefined;
                    inlines?: {
                        typeUrl?: string | undefined;
                        value?: Buffer | undefined;
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
                    } & { [K_65 in Exclude<keyof I_1["packages"][string]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_66 in Exclude<keyof I_1["packages"][string]["extensions"], string | number>]: never; }) | undefined;
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
                    tag?: string | undefined;
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
                    tag?: string | undefined;
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
                    } & { [K_67 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_68 in Exclude<keyof I_1["packages"][string]["enums"][number]["values"], keyof {
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
                    tag?: string | undefined;
                } & { [K_69 in Exclude<keyof I_1["packages"][string]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_70 in Exclude<keyof I_1["packages"][string]["enums"], keyof {
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
                    tag?: string | undefined;
                }[]>]: never; }) | undefined;
                package?: string | undefined;
                dependencies?: (string[] & string[] & { [K_71 in Exclude<keyof I_1["packages"][string]["dependencies"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                uri?: string | undefined;
            } & { [K_72 in Exclude<keyof I_1["packages"][string], keyof SylkPackage>]: never; }) | undefined;
        } & { [K_73 in Exclude<keyof I_1["packages"], string | number>]: never; }) | undefined;
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
                include?: (string[] & string[] & { [K_74 in Exclude<keyof I_1["configs"]["template"]["include"], keyof string[]>]: never; }) | undefined;
                exclude?: (string[] & string[] & { [K_75 in Exclude<keyof I_1["configs"]["template"]["exclude"], keyof string[]>]: never; }) | undefined;
                name?: string | undefined;
                description?: string | undefined;
                outPath?: string | undefined;
                includeCode?: boolean | undefined;
                author?: string | undefined;
            } & { [K_76 in Exclude<keyof I_1["configs"]["template"], keyof import("../../SylkConfigs/v1/SylkConfigs").SylkTemplateConfigs>]: never; }) | undefined;
            port?: number | undefined;
            currentVersion?: string | undefined;
            plugins?: (string[] & string[] & { [K_77 in Exclude<keyof I_1["configs"]["plugins"], keyof string[]>]: never; }) | undefined;
            protoBasePath?: string | undefined;
            protoCompiledPath?: string | undefined;
        } & { [K_78 in Exclude<keyof I_1["configs"], keyof SylkProjectConfigs>]: never; }) | undefined;
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
            } & { [K_79 in Exclude<keyof I_1["project"]["clients"][number], keyof import("../../SylkClient/v1/SylkClient").SylkClient>]: never; })[] & { [K_80 in Exclude<keyof I_1["project"]["clients"], keyof {
                outDir?: string | undefined;
                language?: import("../../SylkClient/v1/SylkClient").SylkClientLanguages | undefined;
            }[]>]: never; }) | undefined;
            server?: ({
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & {
                language?: import("../../SylkServer/v1/SylkServer").SylkServerLanguages | undefined;
            } & { [K_81 in Exclude<keyof I_1["project"]["server"], "language">]: never; }) | undefined;
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
            } & { [K_82 in Exclude<keyof I_1["project"]["extensions"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_83 in Exclude<keyof I_1["project"]["extensions"], keyof {
                typeUrl?: string | undefined;
                value?: Buffer | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_84 in Exclude<keyof I_1["project"], keyof SylkProject>]: never; }) | undefined;
    } & { [K_85 in Exclude<keyof I_1, keyof SylkJson>]: never; }>(object: I_1): SylkJson;
};
export declare const SylkJson_PackagesEntry: {
    encode(message: SylkJson_PackagesEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SylkJson_PackagesEntry;
    fromJSON(object: any): SylkJson_PackagesEntry;
    toJSON(message: SylkJson_PackagesEntry): unknown;
    create<I extends {
        key?: string | undefined;
        value?: {
            services?: {
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
                tag?: string | undefined;
            }[] | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            services?: {
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
                tag?: string | undefined;
            }[] | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
                tag?: string | undefined;
            }[] & ({
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
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K in Exclude<keyof I["value"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_1 in Exclude<keyof I["value"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_2 in Exclude<keyof I["value"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_3 in Exclude<keyof I["value"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_4 in Exclude<keyof I["value"]["services"][number]["methods"], keyof {
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
                    } & { [K_5 in Exclude<keyof I["value"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_6 in Exclude<keyof I["value"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_7 in Exclude<keyof I["value"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_8 in Exclude<keyof I["value"]["services"], keyof {
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
                tag?: string | undefined;
            }[]>]: never; }) | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                    } & { [K_9 in Exclude<keyof I["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_10 in Exclude<keyof I["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_11 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_13 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_14 in Exclude<keyof I["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_15 in Exclude<keyof I["value"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_16 in Exclude<keyof I["value"]["messages"][number]["fields"], keyof {
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
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I["value"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_20 in Exclude<keyof I["value"]["messages"], keyof {
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                } & { [K_21 in Exclude<keyof I["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["value"]["extensions"], string | number>]: never; }) | undefined;
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
                tag?: string | undefined;
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
                tag?: string | undefined;
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
                } & { [K_23 in Exclude<keyof I["value"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_24 in Exclude<keyof I["value"]["enums"][number]["values"], keyof {
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
                tag?: string | undefined;
            } & { [K_25 in Exclude<keyof I["value"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_26 in Exclude<keyof I["value"]["enums"], keyof {
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
                tag?: string | undefined;
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_27 in Exclude<keyof I["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_28 in Exclude<keyof I["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I, keyof SylkJson_PackagesEntry>]: never; }>(base?: I | undefined): SylkJson_PackagesEntry;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: {
            services?: {
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
                tag?: string | undefined;
            }[] | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } | undefined;
    } & {
        key?: string | undefined;
        value?: ({
            services?: {
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
                tag?: string | undefined;
            }[] | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
            }[] | undefined;
            package?: string | undefined;
            dependencies?: string[] | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & {
            services?: ({
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
                tag?: string | undefined;
            }[] & ({
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
                tag?: string | undefined;
            } & {
                dependencies?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["value"]["services"][number]["dependencies"], keyof string[]>]: never; }) | undefined;
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
                        } & { [K_31 in Exclude<keyof I_1["value"]["services"][number]["methods"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_32 in Exclude<keyof I_1["value"]["services"][number]["methods"][number]["extensions"], string | number>]: never; }) | undefined;
                    inputType?: string | undefined;
                    outputType?: string | undefined;
                    uri?: string | undefined;
                } & { [K_33 in Exclude<keyof I_1["value"]["services"][number]["methods"][number], keyof import("../../SylkMethod/v1/SylkMethod").SylkMethod>]: never; })[] & { [K_34 in Exclude<keyof I_1["value"]["services"][number]["methods"], keyof {
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
                    } & { [K_35 in Exclude<keyof I_1["value"]["services"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_36 in Exclude<keyof I_1["value"]["services"][number]["extensions"], string | number>]: never; }) | undefined;
                tag?: string | undefined;
            } & { [K_37 in Exclude<keyof I_1["value"]["services"][number], keyof import("../../SylkService/v2/SylkService").SylkService>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["services"], keyof {
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
                tag?: string | undefined;
            }[]>]: never; }) | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                    } & { [K_39 in Exclude<keyof I_1["value"]["messages"][number]["extensions"][string], string | number>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["messages"][number]["extensions"], string | number>]: never; }) | undefined;
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
                    } & { [K_41 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"][number], keyof import("../../SylkField/v1/SylkField").SylkOneOfField>]: never; })[] & { [K_42 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["oneofFields"], keyof {
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
                        } & { [K_43 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"][string], string | number>]: never; }) | undefined;
                    } & { [K_44 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number]["extensions"], string | number>]: never; }) | undefined;
                    index?: number | undefined;
                    label?: import("../../SylkField/v1/SylkField").SylkFieldLabels | undefined;
                    keyType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                    valueType?: import("../../SylkField/v1/SylkField").SylkFieldTypes | undefined;
                } & { [K_45 in Exclude<keyof I_1["value"]["messages"][number]["fields"][number], keyof import("../../SylkField/v1/SylkField").SylkField>]: never; })[] & { [K_46 in Exclude<keyof I_1["value"]["messages"][number]["fields"], keyof {
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
                tag?: string | undefined;
                inlines?: ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[] & ({
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                } & { [K_47 in Exclude<keyof I_1["value"]["messages"][number]["inlines"][number], keyof import("../../../google/protobuf/any").Any>]: never; })[] & { [K_48 in Exclude<keyof I_1["value"]["messages"][number]["inlines"], keyof {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_49 in Exclude<keyof I_1["value"]["messages"][number], keyof import("../../SylkMessage/v2/SylkMessage").SylkMessage>]: never; })[] & { [K_50 in Exclude<keyof I_1["value"]["messages"], keyof {
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
                tag?: string | undefined;
                inlines?: {
                    typeUrl?: string | undefined;
                    value?: Buffer | undefined;
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
                } & { [K_51 in Exclude<keyof I_1["value"]["extensions"][string], string | number>]: never; }) | undefined;
            } & { [K_52 in Exclude<keyof I_1["value"]["extensions"], string | number>]: never; }) | undefined;
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
                tag?: string | undefined;
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
                tag?: string | undefined;
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
                } & { [K_53 in Exclude<keyof I_1["value"]["enums"][number]["values"][number], keyof import("../../SylkEnumValue/v1/SylkEnumValue").SylkEnumValue>]: never; })[] & { [K_54 in Exclude<keyof I_1["value"]["enums"][number]["values"], keyof {
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
                tag?: string | undefined;
            } & { [K_55 in Exclude<keyof I_1["value"]["enums"][number], keyof import("../../SylkEnum/v2/SylkEnum").SylkEnum>]: never; })[] & { [K_56 in Exclude<keyof I_1["value"]["enums"], keyof {
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
                tag?: string | undefined;
            }[]>]: never; }) | undefined;
            package?: string | undefined;
            dependencies?: (string[] & string[] & { [K_57 in Exclude<keyof I_1["value"]["dependencies"], keyof string[]>]: never; }) | undefined;
            name?: string | undefined;
            uri?: string | undefined;
        } & { [K_58 in Exclude<keyof I_1["value"], keyof SylkPackage>]: never; }) | undefined;
    } & { [K_59 in Exclude<keyof I_1, keyof SylkJson_PackagesEntry>]: never; }>(object: I_1): SylkJson_PackagesEntry;
};
