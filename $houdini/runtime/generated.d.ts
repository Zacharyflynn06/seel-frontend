import type { Record } from "./public/record";
import { GetUser$result, GetUser$input } from "../artifacts/GetUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { AskSeel$result, AskSeel$input } from "../artifacts/AskSeel";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input } from "../artifacts/AddDocumentToCollectionUrl";
import { AddDocumentToCollectionUrlStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollectionUrl";
import { AskCollection$result, AskCollection$input } from "../artifacts/AskCollection";
import { AskCollectionStore } from "../plugins/houdini-svelte/stores/AskCollection";

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
                    type: (Record<CacheTypeDef, "FieldValueAWSDate"> | Record<CacheTypeDef, "FieldValueAWSDateTime"> | Record<CacheTypeDef, "FieldValueAWSEmail"> | Record<CacheTypeDef, "FieldValueAWSIPAddress"> | Record<CacheTypeDef, "FieldValueAWSJSON"> | Record<CacheTypeDef, "FieldValueAWSPhone"> | Record<CacheTypeDef, "FieldValueAWSTime"> | Record<CacheTypeDef, "FieldValueAWSTimestamp"> | Record<CacheTypeDef, "FieldValueAWSURL"> | Record<CacheTypeDef, "FieldValueBoolean"> | Record<CacheTypeDef, "FieldValueFloat"> | Record<CacheTypeDef, "FieldValueInt"> | Record<CacheTypeDef, "FieldValueString">)[];
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
                    type: Record<CacheTypeDef, "FieldValueAWSDate"> | Record<CacheTypeDef, "FieldValueAWSDateTime"> | Record<CacheTypeDef, "FieldValueAWSEmail"> | Record<CacheTypeDef, "FieldValueAWSIPAddress"> | Record<CacheTypeDef, "FieldValueAWSJSON"> | Record<CacheTypeDef, "FieldValueAWSPhone"> | Record<CacheTypeDef, "FieldValueAWSTime"> | Record<CacheTypeDef, "FieldValueAWSTimestamp"> | Record<CacheTypeDef, "FieldValueAWSURL"> | Record<CacheTypeDef, "FieldValueBoolean"> | Record<CacheTypeDef, "FieldValueFloat"> | Record<CacheTypeDef, "FieldValueInt"> | Record<CacheTypeDef, "FieldValueString">;
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
                typePostgres: {
                    type: FieldTypePostgres;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSDate: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSDateTime: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSEmail: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSIPAddress: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSJSON: {
            idFields: never;
            fields: {
                value: {
                    type: object;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSPhone: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSTime: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSTimestamp: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueAWSURL: {
            idFields: never;
            fields: {
                value: {
                    type: any;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueBoolean: {
            idFields: never;
            fields: {
                value: {
                    type: boolean;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueFloat: {
            idFields: never;
            fields: {
                value: {
                    type: number;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueInt: {
            idFields: never;
            fields: {
                value: {
                    type: number;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
                    args: never;
                };
            };
            fragments: [];
        };
        FieldValueString: {
            idFields: never;
            fields: {
                value: {
                    type: string;
                    args: never;
                };
                valueType: {
                    type: FieldValueType;
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
    queries: [[AskCollectionStore, AskCollection$result, AskCollection$input], [AddDocumentToCollectionUrlStore, AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input], [AskSeelStore, AskSeel$result, AskSeel$input], [GetUserStore, GetUser$result, GetUser$input]];
};