import type { Record } from "./public/record";
import { AskSeel$result, AskSeel$input } from "../artifacts/AskSeel";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { GetUser$result, GetUser$input } from "../artifacts/GetUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";

type KeyValuePair = {
    key: string;
    value: string;
};

export declare type CacheTypeDef = {
    types: {
        Client: {
            idFields: {
                id: string;
            };
            fields: {
                companies: {
                    type: (Record<CacheTypeDef, "Company">)[] | null;
                    args: never;
                };
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
        Company: {
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
                client: {
                    type: Record<CacheTypeDef, "Client">;
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
                source: {
                    type: CompanySource;
                    args: never;
                };
                university: {
                    type: string | null;
                    args: never;
                };
                users: {
                    type: (Record<CacheTypeDef, "User">)[] | null;
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
                addDocumentToCollectionUrl: {
                    type: string;
                    args: {
                        collectionName: string;
                        metadata?: (KeyValuePair | null | undefined)[] | null | undefined;
                    };
                };
                ask: {
                    type: string;
                    args: {
                        question: string;
                    };
                };
                documentUploadUrl: {
                    type: string;
                    args: {
                        clientLookupName: string;
                        userId: string;
                    };
                };
                getCompany: {
                    type: Record<CacheTypeDef, "Company"> | null;
                    args: {
                        id: string;
                    };
                };
                getUser: {
                    type: Record<CacheTypeDef, "User"> | null;
                    args: {
                        id: string;
                    };
                };
            };
            fragments: [];
        };
        User: {
            idFields: {
                id: string;
            };
            fields: {
                companies: {
                    type: (Record<CacheTypeDef, "Company">)[] | null;
                    args: never;
                };
                email: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[GetUserStore, GetUser$result, GetUser$input], [AskSeelStore, AskSeel$result, AskSeel$input]];
};