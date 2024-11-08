import { dev } from '$app/environment';
import { fail } from '@sveltejs/kit';
import { signIn, signOut } from 'aws-amplify/auth';

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request?.formData();
		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		try {
			await signOut();
			const { isSignedIn } = await signIn({ username: email, password });

			if (!isSignedIn) {
				return fail(400, { error: 'Invalid email or password' });
			}

			cookies?.set('session_id', email, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: dev,
				maxAge: 60 * 60 * 24 * 7
			});

			return { success: true };
			// redirect(300, '/dashboard');
		} catch (error) {
			return { error: (error as Error).message };
		}
	}
};
