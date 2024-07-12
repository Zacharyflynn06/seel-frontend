import type { Record } from "./public/record";
import { GetUser$result, GetUser$input } from "../artifacts/GetUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { AskCollection$result, AskCollection$input } from "../artifacts/AskCollection";
import { AskCollectionStore } from "../plugins/houdini-svelte/stores/AskCollection";
import { AskSeel$result, AskSeel$input } from "../artifacts/AskSeel";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input } from "../artifacts/AddDocumentToCollectionUrl";
import { AddDocumentToCollectionUrlStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollectionUrl";

type KeyValuePair = {
    key: string;
    value: string;
};

type CompanyAttributeIdInput = {
    companyId: string;
    fieldId: string;
};

export declare type CacheTypeDef = {
    types: {
        Company: {
            idFields: {
                id: string;
            };
            fields: {
                attributes: {
                    type: (Record<CacheTypeDef, "CompanyAttribute">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        CompanyAttribute: {
            idFields: never;
            fields: {
                field: {
                    type: Record<CacheTypeDef, "Field">;
                    args: never;
                };
                value: {
                    type: Record<CacheTypeDef, "FieldValue">;
                    args: never;
                };
            };
            fragments: [];
        };
        Field: {
            idFields: {
                id: string;
            };
            fields: {
                description: {
                    type: string;
                    args: never;
                };
                fieldType: {
                    type: Record<CacheTypeDef, "FieldType">;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldType: {
            idFields: {
                id: string;
            };
            fields: {
                description: {
                    type: string;
                    args: never;
                };
                formatString: {
                    type: string | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                typeGraphQL: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValue: {
            idFields: never;
            fields: {
                booleanValue: {
                    type: boolean | null;
                    args: never;
                };
                dateTimeValue: {
                    type: any | null;
                    args: never;
                };
                dateValue: {
                    type: any | null;
                    args: never;
                };
                emailValue: {
                    type: any | null;
                    args: never;
                };
                floatValue: {
                    type: number | null;
                    args: never;
                };
                intValue: {
                    type: number | null;
                    args: never;
                };
                ipAddressValue: {
                    type: any | null;
                    args: never;
                };
                jsonValue: {
                    type: any | null;
                    args: never;
                };
                phoneValue: {
                    type: any | null;
                    args: never;
                };
                stringValue: {
                    type: string | null;
                    args: never;
                };
                timeValue: {
                    type: any | null;
                    args: never;
                };
                timestampValue: {
                    type: any | null;
                    args: never;
                };
                urlValue: {
                    type: any | null;
                    args: never;
                };
            };
            fragments: [];
        };
        InvestingEntity: {
            idFields: {
                id: string;
            };
            fields: {
                address: {
                    type: string;
                    args: never;
                };
                entityType: {
                    type: InvestingEntityType;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                investmentCriteria: {
                    type: (Record<CacheTypeDef, "InvestmentCriterion">)[];
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                strategy: {
                    type: InvestingEntityStrategy;
                    args: never;
                };
                users: {
                    type: (Record<CacheTypeDef, "User">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        InvestmentCriterion: {
            idFields: never;
            fields: {
                field: {
                    type: Record<CacheTypeDef, "Field">;
                    args: never;
                };
                investingEntity: {
                    type: Record<CacheTypeDef, "InvestingEntity">;
                    args: never;
                };
                required: {
                    type: boolean;
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
                askCollection: {
                    type: string;
                    args: {
                        collectionName: string;
                        query: string;
                    };
                };
                documentUploadUrl: {
                    type: string;
                    args: {
                        clientLookupName: string;
                        userId: string;
                    };
                };
                getCompanies: {
                    type: (Record<CacheTypeDef, "Company">)[];
                    args: never;
                };
                getCompany: {
                    type: Record<CacheTypeDef, "Company"> | null;
                    args: {
                        id: string;
                    };
                };
                getCompanyAttribute: {
                    type: Record<CacheTypeDef, "CompanyAttribute"> | null;
                    args: {
                        input: CompanyAttributeIdInput;
                    };
                };
                getField: {
                    type: Record<CacheTypeDef, "Field"> | null;
                    args: {
                        id: string;
                    };
                };
                getFieldType: {
                    type: Record<CacheTypeDef, "FieldType"> | null;
                    args: {
                        id: string;
                    };
                };
                getFieldTypes: {
                    type: (Record<CacheTypeDef, "FieldType">)[];
                    args: never;
                };
                getFields: {
                    type: (Record<CacheTypeDef, "Field">)[];
                    args: never;
                };
                getInvestingEntities: {
                    type: (Record<CacheTypeDef, "InvestingEntity">)[];
                    args: never;
                };
                getInvestingEntity: {
                    type: Record<CacheTypeDef, "InvestingEntity"> | null;
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
                getUsers: {
                    type: (Record<CacheTypeDef, "User">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        User: {
            idFields: {
                id: string;
            };
            fields: {
                email: {
                    type: string;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                investingEntities: {
                    type: (Record<CacheTypeDef, "InvestingEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[AddDocumentToCollectionUrlStore, AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input], [AskSeelStore, AskSeel$result, AskSeel$input], [AskCollectionStore, AskCollection$result, AskCollection$input], [GetUserStore, GetUser$result, GetUser$input]];
};