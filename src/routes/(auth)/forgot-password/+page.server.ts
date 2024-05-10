import { fail } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';

export const actions = {
	forgotPassword: async ({ request, locals }) => {
		const data = await request.formData();

		const email = data.get('email');

		if (typeof email !== 'string' || !email) {
			return fail(400, { invalid: true });
		}

		try {
			const forgotPasswordRequest = await Auth.forgotPassword(email);
			if (forgotPasswordRequest) {
				// console.log({ forgotPasswordRequest });
				return { success: true };
			}
		} catch (error) {
			return fail(400, { error: 'Invalid Email' });
		}
	}
};
