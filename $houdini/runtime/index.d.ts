import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { UpsertUserStore } from "../plugins/houdini-svelte/stores/UpsertUser";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { AskCollectionStore } from "../plugins/houdini-svelte/stores/AskCollection";
import { AddDocumentToCollectionUrlStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollectionUrl";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query GetUser($id: ID!) {\n\tgetUser(id: $id) {\n\t\tinvestingEntities {\n\t\t\tname\n\t\t\taddress\n\t\t\tentityType\n\t\t\tstrategy\n\t\t\tid\n\t\t}\n\t\temail\n\t\tid\n\t}\n}\n"
): GetUserStore;

export function graphql(
    str: "mutation UpsertUser($email: String!, $id: String!) {\n\tupsertUser(user: { email: $email, id: $id }) {\n\t\temail\n\t\tid\n\t}\n}\n"
): UpsertUserStore;

export function graphql(
    str: "query AskSeel($question: String!) {\n\task(question: $question)\n}\n"
): AskSeelStore;

export function graphql(
    str: "query AskCollection($collectionName: String!, $query: String!) {\n\taskCollection(collectionName: $collectionName, query: $query)\n}\n"
): AskCollectionStore;

export function graphql(
    str: "query AddDocumentToCollectionUrl($collectionName: String!) {\n\taddDocumentToCollectionUrl(collectionName: $collectionName)\n}\n"
): AddDocumentToCollectionUrlStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;