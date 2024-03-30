export type EmailsQuery = {
    readonly "input": EmailsQuery$input;
    readonly "result": EmailsQuery$result | undefined;
};

export type EmailsQuery$result = {
    readonly emails: ({
        readonly any_additional_founders: string | null;
        readonly burn_rate: number | null;
        readonly women_founded_or_owned: boolean | null;
        readonly university: string | null;
        readonly thread_id: string;
        readonly sender_name: string | null;
        readonly sender_job_title: string | null;
        readonly s3_bucket: string;
        readonly sender_email: string | null;
        readonly s3_key: string;
        readonly response_message_id: string | null;
        readonly next_steps: string | null;
        readonly location: string | null;
        readonly is_us_based: boolean | null;
        readonly is_saas: boolean | null;
        readonly id: string;
        readonly funding_round: string | null;
        readonly full_time: boolean | null;
        readonly first_time_founder: boolean | null;
        readonly differentiation_from_competitors: string | null;
        readonly complete: boolean | null;
        readonly competitors: string | null;
        readonly company_name: string | null;
        readonly client_id: string;
        readonly category: string | null;
    } | null)[] | null;
};

export type EmailsQuery$input = null;

export type EmailsQuery$artifact = {
    "name": "EmailsQuery";
    "kind": "HoudiniQuery";
    "hash": "3a44e1c1c89bea6b9d5c04033215e93bfc28892d9cd7831bf94ab6d1fdf51490";
    "raw": `query EmailsQuery {
  emails {
    any_additional_founders
    burn_rate
    women_founded_or_owned
    university
    thread_id
    sender_name
    sender_job_title
    s3_bucket
    sender_email
    s3_key
    response_message_id
    next_steps
    location
    is_us_based
    is_saas
    id
    funding_round
    full_time
    first_time_founder
    differentiation_from_competitors
    complete
    competitors
    company_name
    client_id
    category
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "emails": {
                "type": "EmailData";
                "keyRaw": "emails";
                "nullable": true;
                "selection": {
                    "fields": {
                        "any_additional_founders": {
                            "type": "String";
                            "keyRaw": "any_additional_founders";
                            "nullable": true;
                            "visible": true;
                        };
                        "burn_rate": {
                            "type": "Int";
                            "keyRaw": "burn_rate";
                            "nullable": true;
                            "visible": true;
                        };
                        "women_founded_or_owned": {
                            "type": "Boolean";
                            "keyRaw": "women_founded_or_owned";
                            "nullable": true;
                            "visible": true;
                        };
                        "university": {
                            "type": "String";
                            "keyRaw": "university";
                            "nullable": true;
                            "visible": true;
                        };
                        "thread_id": {
                            "type": "String";
                            "keyRaw": "thread_id";
                            "visible": true;
                        };
                        "sender_name": {
                            "type": "String";
                            "keyRaw": "sender_name";
                            "nullable": true;
                            "visible": true;
                        };
                        "sender_job_title": {
                            "type": "String";
                            "keyRaw": "sender_job_title";
                            "nullable": true;
                            "visible": true;
                        };
                        "s3_bucket": {
                            "type": "String";
                            "keyRaw": "s3_bucket";
                            "visible": true;
                        };
                        "sender_email": {
                            "type": "String";
                            "keyRaw": "sender_email";
                            "nullable": true;
                            "visible": true;
                        };
                        "s3_key": {
                            "type": "String";
                            "keyRaw": "s3_key";
                            "visible": true;
                        };
                        "response_message_id": {
                            "type": "String";
                            "keyRaw": "response_message_id";
                            "nullable": true;
                            "visible": true;
                        };
                        "next_steps": {
                            "type": "String";
                            "keyRaw": "next_steps";
                            "nullable": true;
                            "visible": true;
                        };
                        "location": {
                            "type": "String";
                            "keyRaw": "location";
                            "nullable": true;
                            "visible": true;
                        };
                        "is_us_based": {
                            "type": "Boolean";
                            "keyRaw": "is_us_based";
                            "nullable": true;
                            "visible": true;
                        };
                        "is_saas": {
                            "type": "Boolean";
                            "keyRaw": "is_saas";
                            "nullable": true;
                            "visible": true;
                        };
                        "id": {
                            "type": "String";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "funding_round": {
                            "type": "String";
                            "keyRaw": "funding_round";
                            "nullable": true;
                            "visible": true;
                        };
                        "full_time": {
                            "type": "Boolean";
                            "keyRaw": "full_time";
                            "nullable": true;
                            "visible": true;
                        };
                        "first_time_founder": {
                            "type": "Boolean";
                            "keyRaw": "first_time_founder";
                            "nullable": true;
                            "visible": true;
                        };
                        "differentiation_from_competitors": {
                            "type": "String";
                            "keyRaw": "differentiation_from_competitors";
                            "nullable": true;
                            "visible": true;
                        };
                        "complete": {
                            "type": "Boolean";
                            "keyRaw": "complete";
                            "nullable": true;
                            "visible": true;
                        };
                        "competitors": {
                            "type": "String";
                            "keyRaw": "competitors";
                            "nullable": true;
                            "visible": true;
                        };
                        "company_name": {
                            "type": "String";
                            "keyRaw": "company_name";
                            "nullable": true;
                            "visible": true;
                        };
                        "client_id": {
                            "type": "String";
                            "keyRaw": "client_id";
                            "visible": true;
                        };
                        "category": {
                            "type": "String";
                            "keyRaw": "category";
                            "nullable": true;
                            "visible": true;
                        };
                    };
                };
                "visible": true;
            };
        };
    };
    "pluginData": {
        "houdini-svelte": {};
    };
    "policy": "CacheOrNetwork";
    "partial": true;
};