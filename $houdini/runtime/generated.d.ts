import type { Record } from "./public/record";
import { DashboardQuery$result, DashboardQuery$input } from "../artifacts/DashboardQuery";
import { DashboardQueryStore } from "../plugins/houdini-svelte/stores/DashboardQuery";
import { EmailsQuery$result, EmailsQuery$input } from "../artifacts/EmailsQuery";
import { EmailsQueryStore } from "../plugins/houdini-svelte/stores/EmailsQuery";
import { ClientsQuery$result, ClientsQuery$input } from "../artifacts/ClientsQuery";
import { ClientsQueryStore } from "../plugins/houdini-svelte/stores/ClientsQuery";

export declare type CacheTypeDef = {
    types: {
        Client: {
            idFields: {
                id: string;
            };
            fields: {
                config: {
                    type: object;
                    args: never;
                };
                display_name: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                lookup_name: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        EmailData: {
            idFields: {
                id: string;
            };
            fields: {
                any_additional_founders: {
                    type: string | null;
                    args: never;
                };
                burn_rate: {
                    type: number | null;
                    args: never;
                };
                category: {
                    type: string | null;
                    args: never;
                };
                client_id: {
                    type: string;
                    args: never;
                };
                company_name: {
                    type: string | null;
                    args: never;
                };
                competitors: {
                    type: string | null;
                    args: never;
                };
                complete: {
                    type: boolean | null;
                    args: never;
                };
                differentiation_from_competitors: {
                    type: string | null;
                    args: never;
                };
                first_time_founder: {
                    type: boolean | null;
                    args: never;
                };
                full_time: {
                    type: boolean | null;
                    args: never;
                };
                funding_round: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                is_saas: {
                    type: boolean | null;
                    args: never;
                };
                is_us_based: {
                    type: boolean | null;
                    args: never;
                };
                location: {
                    type: string | null;
                    args: never;
                };
                next_steps: {
                    type: string | null;
                    args: never;
                };
                response_message_id: {
                    type: string | null;
                    args: never;
                };
                s3_bucket: {
                    type: string;
                    args: never;
                };
                s3_key: {
                    type: string;
                    args: never;
                };
                sender_email: {
                    type: string | null;
                    args: never;
                };
                sender_job_title: {
                    type: string | null;
                    args: never;
                };
                sender_name: {
                    type: string | null;
                    args: never;
                };
                thread_id: {
                    type: string;
                    args: never;
                };
                university: {
                    type: string | null;
                    args: never;
                };
                women_founded_or_owned: {
                    type: boolean | null;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                clients: {
                    type: ((Record<CacheTypeDef, "Client"> | null))[] | null;
                    args: never;
                };
                emails: {
                    type: ((Record<CacheTypeDef, "EmailData"> | null))[] | null;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[ClientsQueryStore, ClientsQuery$result, ClientsQuery$input], [EmailsQueryStore, EmailsQuery$result, EmailsQuery$input], [DashboardQueryStore, DashboardQuery$result, DashboardQuery$input]];
};