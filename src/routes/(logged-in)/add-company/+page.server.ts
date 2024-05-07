import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ request }) => {
		console.log({ request });
		// TODO fetch mutation for add-company
	}
};
