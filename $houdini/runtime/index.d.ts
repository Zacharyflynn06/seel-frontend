import { UpsertDocumentMetadataStore } from "../plugins/houdini-svelte/stores/UpsertDocumentMetadata";
import { UpsertUserStore } from "../plugins/houdini-svelte/stores/UpsertUser";
import { GetDocumentCollectionStore } from "../plugins/houdini-svelte/stores/GetDocumentCollection";
import { UpsertInvestingEntityStore } from "../plugins/houdini-svelte/stores/UpsertInvestingEntity";
import { UpsertFieldStore } from "../plugins/houdini-svelte/stores/UpsertField";
import { UpsertDocumentCollectionStore } from "../plugins/houdini-svelte/stores/UpsertDocumentCollection";
import { UpsertCompanyStore } from "../plugins/houdini-svelte/stores/UpsertCompany";
import { UpsertChatStore } from "../plugins/houdini-svelte/stores/UpsertChat";
import { SendMessageToChatStore } from "../plugins/houdini-svelte/stores/SendMessageToChat";
import { linkInvestingEntityToUserStore } from "../plugins/houdini-svelte/stores/linkInvestingEntityToUser";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import { GetInvestingEntityStore } from "../plugins/houdini-svelte/stores/GetInvestingEntity";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { GetInvestingEntitiesStore } from "../plugins/houdini-svelte/stores/GetInvestingEntities";
import { GetFieldsStore } from "../plugins/houdini-svelte/stores/GetFields";
import { GetCompanyStore } from "../plugins/houdini-svelte/stores/GetCompany";
import { DeleteCompanyStore } from "../plugins/houdini-svelte/stores/DeleteCompany";
import { ChatEventStore } from "../plugins/houdini-svelte/stores/ChatEvent";
import { AddDocumentToCollectionStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollection";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "mutation UpsertDocumentMetadata($input: UpsertDocumentMetadataInput!) {\n\tupsertDocumentMetadata(input: $input) {\n\t\tid\n\t\tuploadUrl\n\t\tdownloadUrl\n\t\tmimeType\n\t\tname\n\t}\n}\n"
): UpsertDocumentMetadataStore;

export function graphql(
    str: "mutation UpsertUser($email: String!, $id: String!) {\n\tupsertUser(user: { email: $email, id: $id }) {\n\t\temail\n\t\tid\n\t}\n}\n"
): UpsertUserStore;

export function graphql(
    str: "query GetDocumentCollection($id: ID!) {\n\tgetDocumentCollection(id: $id) {\n\t\tchats {\n\t\t\tid\n\t\t}\n\t\tname\n\t\tdocuments {\n\t\t\tid\n\t\t\tname\n\t\t}\n\t}\n}\n"
): GetDocumentCollectionStore;

export function graphql(
    str: "mutation UpsertInvestingEntity($input: UpsertInvestingEntityInput!) {\n\tupsertInvestingEntity(input: $input) {\n\t\taddress\n\t\tentityType\n\t\tid\n\t\tname\n\t\tstrategy\n\t}\n}\n"
): UpsertInvestingEntityStore;

export function graphql(
    str: "mutation UpsertField($input: UpsertFieldInput!) {\n\tupsertField(input: $input) {\n\t\tdescription\n\t\tid\n\t\tname\n\t\tfieldType {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n}\n"
): UpsertFieldStore;

export function graphql(
    str: "mutation UpsertDocumentCollection($input: UpsertDocumentCollectionInput!) {\n\tupsertDocumentCollection(input: $input) {\n\t\tcompany {\n\t\t\tid\n\t\t}\n\t\tchats {\n\t\t\tid\n\t\t}\n\t}\n}\n"
): UpsertDocumentCollectionStore;

export function graphql(
    str: "mutation UpsertCompany($input: UpsertCompanyInput!) {\n\tupsertCompany(input: $input) {\n\t\tid\n\t}\n}\n"
): UpsertCompanyStore;

export function graphql(
    str: "mutation UpsertChat($input: UpsertChatInput!) {\n\tupsertChat(input: $input) {\n\t\tid\n\t}\n}\n"
): UpsertChatStore;

export function graphql(
    str: "mutation SendMessageToChat($id: ID!, $message: String!) {\n\tsendMessageToChat(id: $id, message: $message)\n}\n"
): SendMessageToChatStore;

export function graphql(
    str: "mutation linkInvestingEntityToUser($input: LinkInvestingEntityToUserInput!) {\n\tlinkInvestingEntityToUser(input: $input) {\n\t\tid\n\t}\n}\n"
): linkInvestingEntityToUserStore;

export function graphql(str: "query GetUsers {\n\tgetUsers {\n\t\temail\n\t\tid\n\t}\n}\n"): GetUsersStore;

export function graphql(
    str: "query GetInvestingEntity($id: ID!) {\n\tgetInvestingEntity(id: $id) {\n\t\taddress\n\t\tcompanies {\n\t\t\tdocuments {\n\t\t\t\tname\n\t\t\t\tdownloadUrl\n\t\t\t\tid\n\t\t\t}\n\t\t\tattributes {\n\t\t\t\tfield {\n\t\t\t\t\tdescription\n\t\t\t\t\tid\n\t\t\t\t\tname\n\t\t\t\t}\n\n\t\t\t\tstringValue\n\t\t\t}\n\t\t\tid\n\t\t}\n\t\tentityType\n\t\tname\n\t\tstrategy\n\t\tinvestmentCriteria {\n\t\t\trequired\n\t\t}\n\t\tid\n\t}\n}\n"
): GetInvestingEntityStore;

export function graphql(
    str: "query GetUser($id: ID!) {\n\tgetUser(id: $id) {\n\t\temail\n\t\tid\n\t\tinvestingEntities {\n\t\t\tname\n\t\t\taddress\n\t\t\tentityType\n\t\t\tstrategy\n\t\t\tid\n\t\t\tcompanies {\n\t\t\t\tid\n\t\t\t\tattributes {\n\t\t\t\t\tfield {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tname\n\t\t\t\t\t\tdescription\n\t\t\t\t\t}\n\n\t\t\t\t\tstringValue\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n"
): GetUserStore;

export function graphql(
    str: "query GetInvestingEntities {\n\tgetInvestingEntities {\n\t\taddress\n\t\tentityType\n\t\tid\n\t\tname\n\t\tstrategy\n\t\tusers {\n\t\t\temail\n\t\t\tid\n\t\t}\n\t}\n}\n"
): GetInvestingEntitiesStore;

export function graphql(
    str: "query GetFields {\n\tgetFields {\n\t\tname\n\t\tid\n\t\tdescription\n\t}\n}\n"
): GetFieldsStore;

export function graphql(
    str: "query GetCompany($id: ID!) {\n\tgetCompany(id: $id) {\n\t\tid\n\t\tattributes {\n\t\t\tfield {\n\t\t\t\tdescription\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t\tstringValue\n\t\t}\n\n\t\tdocumentCollections {\n\t\t\tname\n\t\t\tid\n\t\t}\n\t}\n}\n"
): GetCompanyStore;

export function graphql(
    str: "mutation DeleteCompany($id: ID!) {\n\tdeleteCompany(id: $id) {\n\t\tid\n\t}\n}\n"
): DeleteCompanyStore;

export function graphql(
    str: "subscription ChatEvent($chatId: ID!) {\n\tchatEvent(chatId: $chatId) {\n\t\tchatId\n\t\teventType\n\t\ttext\n\t}\n}\n"
): ChatEventStore;

export function graphql(
    str: "mutation AddDocumentToCollection($input: DocumentCollectionAssociationIds!) {\n\taddDocumentToCollection(input: $input) {\n\t\tid\n\t}\n}\n"
): AddDocumentToCollectionStore;

export function graphql(
    str: "query AskSeel($question: String!) {\n\task(question: $question)\n}\n"
): AskSeelStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;