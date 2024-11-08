const COGNITO_CLIENT_ID = import.meta.env.VITE_COGNITO_CLIENT_ID;
const COGNITO_USER_POOL_ID = import.meta.env.VITE_COGNITO_USER_POOL_ID;

const awsConfig = {
	Auth: {
		Cognito: {
			userPoolClientId: COGNITO_CLIENT_ID,
			userPoolId: COGNITO_USER_POOL_ID,
			loginWith: {
				username: false,
				email: true, // Optional
				phone: false // Optional
			}
		}
	}
};

export default awsConfig;
