import { dev } from '$app/environment';
import { fail } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request?.formData();
		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		try {
			const cognitoUser = await Auth.signIn(email, password);

			cookies?.set('session_id', cognitoUser.username, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: dev,
				maxAge: 60 * 60 * 12 // 12 hours
			});
			return { success: true };
			// redirect(300, '/dashboard');
		} catch (error) {
			return { error: (error as Error).message };
		}
	}
};
