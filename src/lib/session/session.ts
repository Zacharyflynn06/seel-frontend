import { Auth } from 'aws-amplify';

export async function currentAuthenticatedUser() {
	try {
		const { username, userId, signInDetails } = await Auth.currentAuthenticatedUser();
		console.log(`The username: ${username}`);
		console.log(`The userId: ${userId}`);
		console.log(`The signInDetails: ${signInDetails}`);
	} catch (err) {
		console.log(err);
	}
}
