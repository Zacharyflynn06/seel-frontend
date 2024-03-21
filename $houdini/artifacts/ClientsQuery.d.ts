export type ClientsQuery = {
    readonly "input": ClientsQuery$input;
    readonly "result": ClientsQuery$result | undefined;
};

export type ClientsQuery$result = {
    readonly clients: ({
        readonly config: object;
        readonly display_name: string;
        readonly id: string;
        readonly lookup_name: string;
    } | null)[] | null;
};

export type ClientsQuery$input = null;

export type ClientsQuery$artifact = {
    "name": "ClientsQuery";
    "kind": "HoudiniQuery";
    "hash": "82670b74ad622e6fcfa02012a7c0986900375ebef35f310d4b2a003789c707b6";
    "raw": `query ClientsQuery {
  clients {
    config
    display_name
    id
    lookup_name
  }
}
`;
    "rootType": "Query";
    "selection": {
        "fields": {
            "clients": {
                "type": "Client";
                "keyRaw": "clients";
                "nullable": true;
                "selection": {
                    "fields": {
                        "config": {
                            "type": "AWSJSON";
                            "keyRaw": "config";
                            "visible": true;
                        };
                        "display_name": {
                            "type": "String";
                            "keyRaw": "display_name";
                            "visible": true;
                        };
                        "id": {
                            "type": "String";
                            "keyRaw": "id";
                            "visible": true;
                        };
                        "lookup_name": {
                            "type": "String";
                            "keyRaw": "lookup_name";
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
    "partial": false;
};