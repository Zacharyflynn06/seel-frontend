/**\*\***\***\*\*** ✨ Codeium Command ⭐ **\*\***\***\*\***/

# Seel

Seel is a web application designed to simplify and enhance private equity and venture capital deal execution.

## Features

- Deal pipeline management
- Automated due diligence
- Investment memo generation
- Task management
- Collaboration tools

## Demo

A demo of the application is available at [seeldeals.com](https://seeldeals.com).

## Installation

To install the application, clone the repository and run `pnpm install` in the root directory.

## Configuration

The application requires an AWS account and configuration of the following services:

- AWS Cognito
- AWS AppSync
- AWS Lambda
- AWS S3

The application also requires configuration of the following environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `COGNITO_USER_POOL_ID`
- `COGNITO_APP_CLIENT_ID`
- `COGNITO_IDENTITY_POOL_ID`
- `APP_SYNC_API_KEY`
- `APP_SYNC_API_URL`
- `LAMBDA_FUNCTION_NAME`
- `S3_BUCKET_NAME`

## Development

To start the development server, run `pnpm run dev` in the root directory.

## Deployment

To deploy the application, run `pnpm run build` and then `pnpm run deploy` in the root directory.

The application is deployed to an S3 bucket and served through CloudFront.

## Security

The application uses AWS Cognito for authentication and authorization.

The application also uses AWS IAM roles to manage access to AWS services.

## License

The application is licensed under the MIT License. See [LICENSE](LICENSE) for details.
/**\*\*** 25aff3ea-88ea-4876-b0aa-83033c204699 **\*\*\***/
