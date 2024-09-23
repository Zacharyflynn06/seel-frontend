import type { Record } from "./public/record";
import { ValidateCompany$result, ValidateCompany$input } from "../artifacts/ValidateCompany";
import { ValidateCompanyStore } from "../plugins/houdini-svelte/stores/ValidateCompany";
import { GetIvestmentCriteriaRulset$result, GetIvestmentCriteriaRulset$input } from "../artifacts/GetIvestmentCriteriaRulset";
import { GetIvestmentCriteriaRulsetStore } from "../plugins/houdini-svelte/stores/GetIvestmentCriteriaRulset";
import { GetUsers$result, GetUsers$input } from "../artifacts/GetUsers";
import { GetUsersStore } from "../plugins/houdini-svelte/stores/GetUsers";
import { GetUser$result, GetUser$input } from "../artifacts/GetUser";
import { GetUserStore } from "../plugins/houdini-svelte/stores/GetUser";
import { GetInvestingEntity$result, GetInvestingEntity$input } from "../artifacts/GetInvestingEntity";
import { GetInvestingEntityStore } from "../plugins/houdini-svelte/stores/GetInvestingEntity";
import { GetInvestingEntities$result, GetInvestingEntities$input } from "../artifacts/GetInvestingEntities";
import { GetInvestingEntitiesStore } from "../plugins/houdini-svelte/stores/GetInvestingEntities";
import { GetFields$result, GetFields$input } from "../artifacts/GetFields";
import { GetFieldsStore } from "../plugins/houdini-svelte/stores/GetFields";
import { GetCompany$result, GetCompany$input } from "../artifacts/GetCompany";
import { GetCompanyStore } from "../plugins/houdini-svelte/stores/GetCompany";
import { GetDocumentCollection$result, GetDocumentCollection$input } from "../artifacts/GetDocumentCollection";
import { GetDocumentCollectionStore } from "../plugins/houdini-svelte/stores/GetDocumentCollection";
import { AskSeel$result, AskSeel$input } from "../artifacts/AskSeel";
import { AskSeelStore } from "../plugins/houdini-svelte/stores/AskSeel";

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
                company: {
                    type: Record<CacheTypeDef, "Company"> | null;
                    args: never;
                };
                description: {
                    type: string | null;
                    args: never;
                };
                documentCollection: {
                    type: Record<CacheTypeDef, "DocumentCollection"> | null;
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
        ChatEvent: {
            idFields: never;
            fields: {
                chatId: {
                    type: string;
                    args: never;
                };
                eventType: {
                    type: ChatEventType;
                    args: never;
                };
                text: {
                    type: string | null;
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
                chats: {
                    type: (Record<CacheTypeDef, "Chat">)[];
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
                    type: Record<CacheTypeDef, "InvestingEntity">;
                    args: never;
                };
            };
            fragments: [];
        };
        CompanyAttribute: {
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
                field: {
                    type: Record<CacheTypeDef, "Field">;
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
                    type: object | null;
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
        CompanyAttributeValidation: {
            idFields: never;
            fields: {
                error: {
                    type: string | null;
                    args: never;
                };
                field: {
                    type: Record<CacheTypeDef, "Field"> | null;
                    args: never;
                };
                status: {
                    type: boolean;
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
                chats: {
                    type: (Record<CacheTypeDef, "Chat">)[];
                    args: never;
                };
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
                documentCollections: {
                    type: (Record<CacheTypeDef, "DocumentCollection">)[];
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
                    type: string | null;
                    args: never;
                };
                formatString: {
                    type: string | null;
                    args: never;
                };
                graphqlScalar: {
                    type: FieldValueType;
                    args: never;
                };
                id: {
                    type: string;
                    args: never;
                };
                isMultiSelect: {
                    type: boolean;
                    args: never;
                };
                isSingleSelect: {
                    type: boolean;
                    args: never;
                };
                name: {
                    type: string;
                    args: never;
                };
                options: {
                    type: (Record<CacheTypeDef, "FieldTypeOption">)[];
                    args: never;
                };
            };
            fragments: [];
        };
        FieldTypeOption: {
            idFields: {
                id: string;
            };
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
                fieldType: {
                    type: Record<CacheTypeDef, "FieldType">;
                    args: never;
                };
                floatValue: {
                    type: number | null;
                    args: never;
                };
                id: {
                    type: string;
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
                    type: object | null;
                    args: never;
                };
                name: {
                    type: string;
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
                    type: object | null;
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
                chats: {
                    type: (Record<CacheTypeDef, "Chat">)[];
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
                enabled: {
                    type: boolean;
                    args: never;
                };
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
                rules: {
                    type: object | null;
                    args: never;
                };
            };
            fragments: [];
        };
        __ROOT__: {
            idFields: {};
            fields: {
                ask: {
                    type: string;
                    args: {
                        question: string;
                    };
                };
                getAllDocumentMetadata: {
                    type: (Record<CacheTypeDef, "DocumentMetadata">)[];
                    args: never;
                };
                getChat: {
                    type: Record<CacheTypeDef, "Chat"> | null;
                    args: {
                        id: string;
                    };
                };
                getChats: {
                    type: (Record<CacheTypeDef, "Chat">)[];
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
                getDocumentCollection: {
                    type: Record<CacheTypeDef, "DocumentCollection"> | null;
                    args: {
                        id: string;
                    };
                };
                getDocumentCollections: {
                    type: (Record<CacheTypeDef, "DocumentCollection">)[];
                    args: never;
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
                getFieldTypeOption: {
                    type: Record<CacheTypeDef, "FieldTypeOption"> | null;
                    args: {
                        fieldTypeId: string;
                        fieldTypeOptionId: string;
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
                getInvestmentCriteriaRuleSet: {
                    type: object;
                    args: {
                        description: string;
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
                validateCompany: {
                    type: (Record<CacheTypeDef, "CompanyAttributeValidation">)[];
                    args: {
                        companyId: string;
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
                chats: {
                    type: (Record<CacheTypeDef, "Chat">)[];
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
    queries: [[AskSeelStore, AskSeel$result, AskSeel$input], [GetDocumentCollectionStore, GetDocumentCollection$result, GetDocumentCollection$input], [GetCompanyStore, GetCompany$result, GetCompany$input], [GetFieldsStore, GetFields$result, GetFields$input], [GetInvestingEntitiesStore, GetInvestingEntities$result, GetInvestingEntities$input], [GetInvestingEntityStore, GetInvestingEntity$result, GetInvestingEntity$input], [GetUserStore, GetUser$result, GetUser$input], [GetUsersStore, GetUsers$result, GetUsers$input], [GetIvestmentCriteriaRulsetStore, GetIvestmentCriteriaRulset$result, GetIvestmentCriteriaRulset$input], [ValidateCompanyStore, ValidateCompany$result, ValidateCompany$input]];
};