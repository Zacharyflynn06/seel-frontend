import { fail } from '@sveltejs/kit';

export const actions = {
	upload: async ({ request }) => {
		console.log('submit deal was run');
		const formData = await request.formData();
		const fileUrl = formData.get('fileUrl');

		if (typeof fileUrl !== 'string' || !fileUrl) {
			return fail(400, { invalid: true });
		}

		return { success: true };
	}
};
