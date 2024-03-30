import { fail, type Actions, type Action, redirect } from '@sveltejs/kit';
import { Auth } from 'aws-amplify';
const login: Action = async ({ request }) => {
	const data = await request.formData();
	const email = data.get('email-address');
	const password = data.get('password');

	console.log({ email, password });

	if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
		return fail(400, { invalid: true });
	}

	const variable = await Auth.signIn(email, password)
		.then((user) => {
			console.log({ user });
			throw redirect(303, '/dashboard');
		})
		.catch((error) => {
			console.log({ error });
			return fail(400, { invalid: true });
		});

	console.log({ variable });
};
export const actions: Actions = { login };
