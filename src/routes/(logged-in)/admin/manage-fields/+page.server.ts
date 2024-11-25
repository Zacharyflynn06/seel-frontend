import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {};

// export const actions: Actions = {
// 	add_field: async (event) => {
// 		const data = await event.request.formData();
// 		const store = new UpsertFieldStore();

// 		const input: UpsertFieldInput = {
// 			name: data?.get('name')?.toString() as UpsertFieldInput['name'],
// 			fieldTypeId: data?.get('fieldTypeId')?.toString() as UpsertFieldInput['fieldTypeId'],
// 			description: data?.get('description')?.toString() as UpsertFieldInput['description']
// 		};
// 		try {
// 			const res = await store.mutate({ input }, { event });
// 			if (res.errors) {
// 				return { error: res.errors[0].message };
// 			}
// 			return { success: true, message: 'Successfully added new field' };
// 		} catch (error) {
// 			console.log((error as Error).message);
// 			return { error: (error as Error).message };
// 		}
// 	}
// };
