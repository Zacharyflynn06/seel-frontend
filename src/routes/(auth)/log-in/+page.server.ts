import { dev } from '$app/environment';
import { GetUserStore } from '$houdini';
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
			maxAge: 60 * 60 * 24 * 7 // one week
		});

		throw redirect(303, '/about');
		// } catch (error) {
		// 	console.log((error as Error).message);
		// 	return fail(400, { error: 'Invalid email or password, please try again' });
		// }

		// redirect(300, '/submit-deals');
	}
};
