import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	add_investing_entity: async (event) => {
		const data = await event.request.formData();
	}
};
