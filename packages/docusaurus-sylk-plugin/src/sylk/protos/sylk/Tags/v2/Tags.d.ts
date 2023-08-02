/// <reference types="node" />
import { CallOptions, ChannelCredentials, Client, ClientOptions, ClientReadableStream, ClientUnaryCall, handleServerStreamingCall, handleUnaryCall, Metadata, ServiceError, UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "../../../google/protobuf/empty";
/** sylk.build Generated proto DO NOT EDIT */
/** [sylk.Tags.v2.Tag] - None */
export interface Tag {
    name: string;
}
/** [sylk.Tags.v2.GetTagRequest] - None */
export interface GetTagRequest {
    projectId: string;
    package: string;
    name: string;
}
/** [sylk.Tags.v2.CreateTagRequest] - None */
export interface CreateTagRequest {
    projectId: string;
    package: string;
    tag?: Tag;
}
/** [sylk.Tags.v2.DeleteTagRequest] - None */
export interface DeleteTagRequest {
    projectId: string;
    package: string;
    name: string;
}
/** [sylk.Tags.v2.UpdateTagRequest] - None */
export interface UpdateTagRequest {
    update?: Tag;
    tag: string;
    projectId: string;
    package: string;
}
/** [sylk.Tags.v2.TagResourceRequest] - None */
export interface TagResourceRequest {
    projectId: string;
    package: string;
    tag: string;
    resource: string;
}
/** [sylk.Tags.v2.ListTagsRequest] - None */
export interface ListTagsRequest {
    projectId: string;
    package: string;
}
/** [sylk.Tags.v2.UntagResourceRequest] - None */
export interface UntagResourceRequest {
    projectId: string;
    package: string;
    tag: string;
    resource: string;
}
export declare const Tag: {
    encode(message: Tag, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Tag;
    fromJSON(object: any): Tag;
    toJSON(message: Tag): unknown;
    create<I extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K in Exclude<keyof I, "name">]: never; }>(base?: I | undefined): Tag;
    fromPartial<I_1 extends {
        name?: string | undefined;
    } & {
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "name">]: never; }>(object: I_1): Tag;
};
export declare const GetTagRequest: {
    encode(message: GetTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetTagRequest;
    fromJSON(object: any): GetTagRequest;
    toJSON(message: GetTagRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof GetTagRequest>]: never; }>(base?: I | undefined): GetTagRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof GetTagRequest>]: never; }>(object: I_1): GetTagRequest;
};
export declare const CreateTagRequest: {
    encode(message: CreateTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreateTagRequest;
    fromJSON(object: any): CreateTagRequest;
    toJSON(message: CreateTagRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: {
            name?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K in Exclude<keyof I["tag"], "name">]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof CreateTagRequest>]: never; }>(base?: I | undefined): CreateTagRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: {
            name?: string | undefined;
        } | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["tag"], "name">]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof CreateTagRequest>]: never; }>(object: I_1): CreateTagRequest;
};
export declare const DeleteTagRequest: {
    encode(message: DeleteTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DeleteTagRequest;
    fromJSON(object: any): DeleteTagRequest;
    toJSON(message: DeleteTagRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DeleteTagRequest>]: never; }>(base?: I | undefined): DeleteTagRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DeleteTagRequest>]: never; }>(object: I_1): DeleteTagRequest;
};
export declare const UpdateTagRequest: {
    encode(message: UpdateTagRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdateTagRequest;
    fromJSON(object: any): UpdateTagRequest;
    toJSON(message: UpdateTagRequest): unknown;
    create<I extends {
        update?: {
            name?: string | undefined;
        } | undefined;
        tag?: string | undefined;
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        update?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K in Exclude<keyof I["update"], "name">]: never; }) | undefined;
        tag?: string | undefined;
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UpdateTagRequest>]: never; }>(base?: I | undefined): UpdateTagRequest;
    fromPartial<I_1 extends {
        update?: {
            name?: string | undefined;
        } | undefined;
        tag?: string | undefined;
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        update?: ({
            name?: string | undefined;
        } & {
            name?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["update"], "name">]: never; }) | undefined;
        tag?: string | undefined;
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof UpdateTagRequest>]: never; }>(object: I_1): UpdateTagRequest;
};
export declare const TagResourceRequest: {
    encode(message: TagResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TagResourceRequest;
    fromJSON(object: any): TagResourceRequest;
    toJSON(message: TagResourceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & { [K in Exclude<keyof I, keyof TagResourceRequest>]: never; }>(base?: I | undefined): TagResourceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof TagResourceRequest>]: never; }>(object: I_1): TagResourceRequest;
};
export declare const ListTagsRequest: {
    encode(message: ListTagsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListTagsRequest;
    fromJSON(object: any): ListTagsRequest;
    toJSON(message: ListTagsRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ListTagsRequest>]: never; }>(base?: I | undefined): ListTagsRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ListTagsRequest>]: never; }>(object: I_1): ListTagsRequest;
};
export declare const UntagResourceRequest: {
    encode(message: UntagResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UntagResourceRequest;
    fromJSON(object: any): UntagResourceRequest;
    toJSON(message: UntagResourceRequest): unknown;
    create<I extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & { [K in Exclude<keyof I, keyof UntagResourceRequest>]: never; }>(base?: I | undefined): UntagResourceRequest;
    fromPartial<I_1 extends {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & {
        projectId?: string | undefined;
        package?: string | undefined;
        tag?: string | undefined;
        resource?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof UntagResourceRequest>]: never; }>(object: I_1): UntagResourceRequest;
};
export type TagsService = typeof TagsService;
export declare const TagsService: {
    /** [sylk] - None */
    readonly getTag: {
        readonly path: "/sylk.Tags.v2.Tags/GetTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: GetTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => GetTagRequest;
        readonly responseSerialize: (value: Tag) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Tag;
    };
    /** [sylk] - None */
    readonly updateTag: {
        readonly path: "/sylk.Tags.v2.Tags/UpdateTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpdateTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpdateTagRequest;
        readonly responseSerialize: (value: Tag) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Tag;
    };
    /** [sylk] - None */
    readonly createTag: {
        readonly path: "/sylk.Tags.v2.Tags/CreateTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: CreateTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => CreateTagRequest;
        readonly responseSerialize: (value: Tag) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Tag;
    };
    /** [sylk] - None */
    readonly deleteTag: {
        readonly path: "/sylk.Tags.v2.Tags/DeleteTag";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: DeleteTagRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => DeleteTagRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** [sylk] - None */
    readonly tagResource: {
        readonly path: "/sylk.Tags.v2.Tags/TagResource";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: TagResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => TagResourceRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    /** [sylk] - None */
    readonly listTags: {
        readonly path: "/sylk.Tags.v2.Tags/ListTags";
        readonly requestStream: false;
        readonly responseStream: true;
        readonly requestSerialize: (value: ListTagsRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => ListTagsRequest;
        readonly responseSerialize: (value: Tag) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Tag;
    };
    /** [sylk] - None */
    readonly untagResource: {
        readonly path: "/sylk.Tags.v2.Tags/UntagResource";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UntagResourceRequest) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UntagResourceRequest;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
};
export interface TagsServer extends UntypedServiceImplementation {
    /** [sylk] - None */
    getTag: handleUnaryCall<GetTagRequest, Tag>;
    /** [sylk] - None */
    updateTag: handleUnaryCall<UpdateTagRequest, Tag>;
    /** [sylk] - None */
    createTag: handleUnaryCall<CreateTagRequest, Tag>;
    /** [sylk] - None */
    deleteTag: handleUnaryCall<DeleteTagRequest, Empty>;
    /** [sylk] - None */
    tagResource: handleUnaryCall<TagResourceRequest, Empty>;
    /** [sylk] - None */
    listTags: handleServerStreamingCall<ListTagsRequest, Tag>;
    /** [sylk] - None */
    untagResource: handleUnaryCall<UntagResourceRequest, Empty>;
}
export interface TagsClient extends Client {
    /** [sylk] - None */
    getTag(request: GetTagRequest, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    getTag(request: GetTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    getTag(request: GetTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    /** [sylk] - None */
    updateTag(request: UpdateTagRequest, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    updateTag(request: UpdateTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    updateTag(request: UpdateTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    /** [sylk] - None */
    createTag(request: CreateTagRequest, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    createTag(request: CreateTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    createTag(request: CreateTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Tag) => void): ClientUnaryCall;
    /** [sylk] - None */
    deleteTag(request: DeleteTagRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteTag(request: DeleteTagRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    deleteTag(request: DeleteTagRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** [sylk] - None */
    tagResource(request: TagResourceRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    tagResource(request: TagResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    tagResource(request: TagResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    /** [sylk] - None */
    listTags(request: ListTagsRequest, options?: Partial<CallOptions>): ClientReadableStream<Tag>;
    listTags(request: ListTagsRequest, metadata?: Metadata, options?: Partial<CallOptions>): ClientReadableStream<Tag>;
    /** [sylk] - None */
    untagResource(request: UntagResourceRequest, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    untagResource(request: UntagResourceRequest, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    untagResource(request: UntagResourceRequest, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
}
export declare const TagsClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): TagsClient;
    service: typeof TagsService;
};
