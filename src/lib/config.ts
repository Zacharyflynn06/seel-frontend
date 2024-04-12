const p: NodeJS.ProcessEnv = process?.env ? process.env : import.meta.env;

export const GRAPHQL_API_KEY = p.VITE_GRAPHQL_API_KEY;
export const GRAPHQL_ENDPOINT = p.VITE_GRAPHQL_ENDPOINT;

export const COGNITO_USER_POOL_ID: string | undefined = p.VITE_COGNITO_USER_POOL_ID;
export const COGNITO_CLIENT_ID: string | undefined = p.VITE_COGNITO_CLIENT_ID;
export const COGNITO_CLIENT_SECRET: string | undefined = p.VITE_COGNITO_CLIENT_SECRET;
export const COGNITO_ISSUER: string | undefined = p.VITE_COGNITO_ISSUER;

export const S3_PUBLIC_ACCESS_KEY: string | undefined = p.VITE_S3_PUBLIC_ACCESS_KEY;
export const S3_PRIVATE_ACCESS_KEY: string | undefined = p.VITE_S3_PRIVATE_ACCESS_KEY;
export const AWS_REGION: string | undefined = p.VITE_AWS_REGION;

export const AUTH_SECRET = p.VITE_AUTH_SECRET;
