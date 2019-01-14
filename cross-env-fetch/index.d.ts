// Type definitions for node-fetch 2.1
// Project: https://github.com/bitinn/node-fetch
// Definitions by: Torsten Werner <https://github.com/torstenwerner>
//                 Niklas Lindgren <https://github.com/nikcorg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// Needed so that we don't require dom
interface _URLSearchParams {
    [Symbol.iterator](): IterableIterator<[string, string]>;
    /**
     * Returns an array of key, value pairs for every entry in the search params.
     */
    entries(): IterableIterator<[string, string]>;
    /**
     * Returns a list of keys in the search params.
     */
    keys(): IterableIterator<string>;
    /**
     * Returns a list of values in the search params.
     */
    values(): IterableIterator<string>;
}

export class Request {
    constructor(input: string | { href: string } | Request, init?: RequestInit);
    clone(): Request;
    context: RequestContext;
    headers: Headers;
    method: string;
    redirect: RequestRedirect;
    referrer: string;
    url: string;

    compress: boolean;
    counter: number;
    follow: number;
    hostname: string;
    port?: number;
    protocol: string;
    size: number;
    timeout: number;

    // Extends Body
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Buffer>;
    body: NodeJS.ReadableStream;
    bodyUsed: boolean;
    buffer(): Promise<Buffer>;
    json(): Promise<any>;
    text(): Promise<string>;
    textConverted(): Promise<string>;
}

export interface RequestInit {
    // whatwg/fetch standard options
    body?: BodyInit;
    headers?: HeaderInit | { [index: string]: string };
    method?: string;
    redirect?: RequestRedirect;

   compress?: boolean; // =true support gzip/deflate content encoding. false to disable
    follow?: number; // =20 maximum redirect count. 0 to not follow redirect
    size?: number; // =0 maximum response body size in bytes. 0 to disable
    timeout?: number; // =0 req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)

    // node-fetch does not support mode, cache or credentials options
}

export type RequestContext =
    "audio"
    | "beacon"
    | "cspreport"
    | "download"
    | "embed"
    | "eventsource"
    | "favicon"
    | "fetch"
    | "font"
    | "form"
    | "frame"
    | "hyperlink"
    | "iframe"
    | "image"
    | "imageset"
    | "import"
    | "internal"
    | "location"
    | "manifest"
    | "object"
    | "ping"
    | "plugin"
    | "prefetch"
    | "script"
    | "serviceworker"
    | "sharedworker"
    | "style"
    | "subresource"
    | "track"
    | "video"
    | "worker"
    | "xmlhttprequest"
    | "xslt";
export type RequestMode = "cors" | "no-cors" | "same-origin";
export type RequestRedirect = "error" | "follow" | "manual";
export type RequestCredentials = "omit" | "include" | "same-origin";

export type RequestCache =
    "default"
    | "force-cache"
    | "no-cache"
    | "no-store"
    | "only-if-cached"
    | "reload";

export class Headers implements Iterable<[string, string]> {
    constructor(init?: Headers | { [k: string]: string });
    forEach(callback: (value: string, name: string) => void): void;
    append(name: string, value: string): void;
    delete(name: string): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    raw(): { [k: string]: string[] };
    set(name: string, value: string): void;

    // Iterator methods
    entries(): Iterator<[string, string]>;
    keys(): Iterator<string>;
    values(): Iterator<[string]>;
    [Symbol.iterator](): Iterator<[string, string]>;
}

export interface FetchError extends Error {
    name: "FetchError";
}

export class Response {
    constructor(body?: BodyInit, init?: ResponseInit);
    static error(): Response;
    static redirect(url: string, status: number): Response;
    clone(): Response;
    headers: Headers;
    ok: boolean;
    size: number;
    status: number;
    statusText: string;
    timeout: number;
    type: ResponseType;
    url: string;

    // Extends Body
    arrayBuffer(): Promise<ArrayBuffer>;
    blob(): Promise<Buffer>;
    body: NodeJS.ReadableStream;
    bodyUsed: boolean;
    buffer(): Promise<Buffer>;
    json(): Promise<any>;
    text(): Promise<string>;
    textConverted(): Promise<string>;
}

export type ResponseType =
    "basic"
    | "cors"
    | "default"
    | "error"
    | "opaque"
    | "opaqueredirect";

export interface ResponseInit {
    headers?: HeaderInit;
    status: number;
    statusText?: string;
}

export type HeaderInit = Headers | string[];
export type BodyInit = ArrayBuffer | ArrayBufferView | NodeJS.ReadableStream | string | _URLSearchParams;
export type RequestInfo = string | Request;

export function fetch(
    url: string | Request,
    init?: RequestInit
): Promise<Response>;
export default fetch;