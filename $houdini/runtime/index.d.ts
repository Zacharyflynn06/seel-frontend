import { UpsertUserStore } from "../plugins/houdini-svelte/stores/UpsertUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "mutation UpsertUser($email: String!, $id: String!) {\n\tupsertUser(user: { email: $email, id: $id }) {\n\t\temail\n\t\tid\n\t}\n}\n"
): UpsertUserStore;

export function graphql(
    str: "query GetUser($id: String!) {\n\tgetUser(id: $id) {\n\t\tid\n\t\temail\n\t}\n}\n"
): GetUserStore;

export function graphql(
    str: "query AskSeel($question: String!) {\n\task(question: $question)\n}\n"
): AskSeelStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;