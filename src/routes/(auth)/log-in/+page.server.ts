import { getAllInvestingEntities } from '$lib/services/investingEntity';
import { fail } from '@sveltejs/kit';
import { signIn, fetchAuthSession, signOut } from 'aws-amplify/auth';

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

			const { tokens } = await fetchAuthSession();
			const accessToken = tokens?.accessToken.toString();

			if (!accessToken) {
				return fail(400, { error: 'Invalid email or password' });
			}

			cookies?.set('session_id', accessToken, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				secure: process.env.NODE_ENV === 'production',
				maxAge: 60 * 60 * 24 * 7
			});

			return { success: true };
		} catch (error) {
			return { error: (error as Error).message };
		}
	}
};
