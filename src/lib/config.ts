const p: NodeJS.ProcessEnv = process?.env ? process.env : import.meta.env;

export const GRAPHQL_API_KEY = p.GRAPHQL_API_KEY;
export const GRAPHQL_ENDPOINT = p.GRAPHQL_ENDPOINT;

export const COGNITO_USER_POOL_ID: string | undefined = p.COGNITO_USER_POOL_ID;
export const COGNITO_CLIENT_ID: string | undefined = p.COGNITO_CLIENT_ID;
export const COGNITO_CLIENT_SECRET: string | undefined = p.COGNITO_CLIENT_SECRET;
export const COGNITO_ISSUER: string | undefined = p.COGNITO_ISSUER;

export const AUTH_SECRET = p.AUTH_SECRET;
