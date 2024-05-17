import { UpsertUserStore } from "../plugins/houdini-svelte/stores/UpsertUser";
import { UpsertCompanyStore } from "../plugins/houdini-svelte/stores/UpsertCompany";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { AddDocumentToCollectionUrlStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollectionUrl";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "mutation UpsertUser($email: String!, $id: String!) {\n\tupsertUser(user: { email: $email, id: $id }) {\n\t\temail\n\t\tid\n\t}\n}\n"
): UpsertUserStore;

export function graphql(
    str: "mutation UpsertCompany($company: UpsertCompanyInput!) {\n\tupsertCompany(company: $company) {\n\t\tany_additional_founders\n\t\tburn_rate\n\t\tcategory\n\t\tcompany_name\n\t\tcompetitors\n\t\tdifferentiation_from_competitors\n\t\tfull_time\n\t\tfunding_round\n\t\tid\n\t\tis_us_based\n\t\tis_saas\n\t\tlocation\n\t\tnext_steps\n\t\tsource\n\t\tuniversity\n\t\twomen_founded_or_owned\n\t}\n}\n"
): UpsertCompanyStore;

export function graphql(
    str: "query GetUser($id: String!) {\n\tgetUser(id: $id) {\n\t\tid\n\t\temail\n\t}\n}\n"
): GetUserStore;

export function graphql(
    str: "query AskSeel($question: String!) {\n\task(question: $question)\n}\n"
): AskSeelStore;

export function graphql(
    str: "query AddDocumentToCollectionUrl($collectionName: String!) {\n\taddDocumentToCollectionUrl(collectionName: $collectionName)\n}\n"
): AddDocumentToCollectionUrlStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;