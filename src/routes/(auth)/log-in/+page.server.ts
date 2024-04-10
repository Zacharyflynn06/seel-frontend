import { fail } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	login: async ({ request, locals }) => {
		const data = await request.formData();

		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		try {
			const user = await Auth.signIn(email, password);
			if (user) {
				locals.user = user;
				return { success: true };
			}
		} catch (error) {
			console.log((error as Error).message);
			return fail(400, { error: 'Invalid email or password, please try again' });
		}
	}
};
