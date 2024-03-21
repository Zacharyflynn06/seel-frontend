import { EmailsQueryStore } from "../plugins/houdini-svelte/stores/EmailsQuery";
import { ClientsQueryStore } from "../plugins/houdini-svelte/stores/ClientsQuery";
import type { Cache as InternalCache } from "./cache/cache";
import type { CacheTypeDef } from "./generated";
import { Cache } from "./public";
export * from "./client";
export * from "./lib";

export function graphql(
    str: "query EmailsQuery {\n\temails {\n\t\tany_additional_founders\n\t\tburn_rate\n\t\twomen_founded_or_owned\n\t\tuniversity\n\t\tthread_id\n\t\tsender_name\n\t\tsender_job_title\n\t\ts3_bucket\n\t\tsender_email\n\t\ts3_key\n\t\tresponse_message_id\n\t\tnext_steps\n\t\tlocation\n\t\tis_us_based\n\t\tis_saas\n\t\tid\n\t\tfunding_round\n\t\tfull_time\n\t\tfirst_time_founder\n\t\tdifferentiation_from_competitors\n\t\tcomplete\n\t\tcompetitors\n\t\tcompany_name\n\t\tclient_id\n\t\tcategory\n\t}\n}\n"
): EmailsQueryStore;

export function graphql(
    str: "query ClientsQuery {\n\tclients {\n\t\tconfig\n\t\tdisplay_name\n\t\tid\n\t\tlookup_name\n\t}\n}\n"
): ClientsQueryStore;

export declare function graphql<_Payload, _Result = _Payload>(str: TemplateStringsArray): _Result;
export declare const cache: Cache<CacheTypeDef>;
export declare function getCache(): InternalCache;