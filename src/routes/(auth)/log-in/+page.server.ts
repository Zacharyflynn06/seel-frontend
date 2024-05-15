import { dev } from '$app/environment';
import { fail, redirect } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	login: async ({ request, cookies, locals }) => {
		const data = await request?.formData();
		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		// try {
		const cognitoUser = await Auth.signIn(email, password);

		cookies?.set('session_id', cognitoUser.username, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: dev,
			maxAge: 60 * 60 // one hour
		});

		redirect(300, '/submit-deals');
		// } catch (error) {
		// 	console.log('page.server.ts', (error as Error).message);
		// }
	}
};
