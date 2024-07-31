import type { Record } from "./public/record";
import { GetUser$result, GetUser$input } from "../artifacts/GetUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { GetUsers$result, GetUsers$input } from "../artifacts/GetUsers";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import { GetInvestingEntities$result, GetInvestingEntities$input } from "../artifacts/GetInvestingEntities";
import { GetInvestingEntitiesStore } from "../plugins/houdini-svelte/stores/GetInvestingEntities";
import { GetInvestingEntity$result, GetInvestingEntity$input } from "../artifacts/GetInvestingEntity";
import { GetInvestingEntityStore } from "../plugins/houdini-svelte/stores/GetInvestingEntity";
import { AskSeel$result, AskSeel$input } from "../artifacts/AskSeel";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";
import { GetCompany$result, GetCompany$input } from "../artifacts/GetCompany";
import { GetCompanyStore } from "../plugins/houdini-svelte/stores/GetCompany";
import { AskCollection$result, AskCollection$input } from "../artifacts/AskCollection";
import { AskCollectionStore } from "../plugins/houdini-svelte/stores/AskCollection";
import { AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input } from "../artifacts/AddDocumentToCollectionUrl";
import { AddDocumentToCollectionUrlStore } from "../plugins/houdini-svelte/stores/AddDocumentToCollectionUrl";

type CompanyAttributeIdInput = {
    companyId: string;
    fieldId: string;
};

export declare type CacheTypeDef = {
    types: {
        Chat: {
            idFields: {
                id: string;
            };
            fields: {
                documentCollection: {
                    type: Record<CacheTypeDef, "DocumentCollection">;
                    args: never;
                };
                history: {
                    type: (Record<CacheTypeDef, "ChatMessage">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User">;
                    args: never;
                };
            };
            fragments: [];
        };
        ChatMessage: {
            idFields: never;
            fields: {
                response: {
                    type: string | null;
                    args: never;
                };
                userMessage: {
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
                attributes: {
                    type: (Record<CacheTypeDef, "CompanyAttribute">)[];
                    args: never;
                };
                documentCollections: {
                    type: (Record<CacheTypeDef, "DocumentCollection">)[];
                    args: never;
                };
                documents: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                investingEntity: {
                    type: Record<CacheTypeDef, "InvestingEntity"> | null;
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
        DocumentCollection: {
            idFields: {
                id: string;
            };
            fields: {
                company: {
                    type: Record<CacheTypeDef, "Company"> | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                documents: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                investingEntity: {
                    type: Record<CacheTypeDef, "InvestingEntity"> | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User"> | null;
                    args: never;
                };
            };
            fragments: [];
        };
        DocumentMetadata: {
            idFields: {
                id: string;
            };
            fields: {
                company: {
                    type: Record<CacheTypeDef, "Company"> | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                downloadUrl: {
                    type: any | null;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                investingEntity: {
                    type: Record<CacheTypeDef, "InvestingEntity"> | null;
                    args: never;
                };
                mimeType: {
                    type: string | null;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                uploadUrl: {
                    type: any;
                    args: never;
                };
                user: {
                    type: Record<CacheTypeDef, "User"> | null;
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
                companies: {
                    type: (Record<CacheTypeDef, "Company">)[];
                    args: never;
                };
                documentCollections: {
                    type: (Record<CacheTypeDef, "DocumentCollection">)[];
                    args: never;
                };
                documents: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
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
                getAllDocumentMetadata: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
                    args: never;
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
                getSingleDocumentMetadata: {
                    type: Record<CacheTypeDef, "DocumentMetadata"> | null;
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
                documentCollections: {
                    type: (Record<CacheTypeDef, "DocumentCollection">)[];
                    args: never;
                };
                documents: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
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
                investingEntities: {
                    type: (Record<CacheTypeDef, "InvestingEntity">)[];
                    args: never;
                };
            };
            fragments: [];
        };
    };
    lists: {};
    queries: [[AddDocumentToCollectionUrlStore, AddDocumentToCollectionUrl$result, AddDocumentToCollectionUrl$input], [AskCollectionStore, AskCollection$result, AskCollection$input], [GetCompanyStore, GetCompany$result, GetCompany$input], [AskSeelStore, AskSeel$result, AskSeel$input], [GetInvestingEntityStore, GetInvestingEntity$result, GetInvestingEntity$input], [GetInvestingEntitiesStore, GetInvestingEntities$result, GetInvestingEntities$input], [GetUsersStore, GetUsers$result, GetUsers$input], [GetUserStore, GetUser$result, GetUser$input]];
};