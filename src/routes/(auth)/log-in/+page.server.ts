import { fail } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();

		const email = data.get('email-address');
		const password = data.get('password');

		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}

		try {
			const user = await Auth.signIn(email, password);
			console.log({ user });
			return { success: true };
		} catch (error) {
			return fail(400, { error: 'Invalid email or password, please try again' });
		}
	}
};
