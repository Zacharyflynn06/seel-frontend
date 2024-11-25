import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {};

// export const actions: Actions = {
// 	add_investing_entity: async (event) => {
// 		const data = await event.request.formData();
// 		const store = new UpsertInvestingEntityStore();

// 		const input: UpsertInvestingEntityInput = {
// 			name: data.get('name')?.toString() as InvestingEntityType$options,
// 			address: data.get('address')?.toString() as InvestingEntityType$options,
// 			entityType: data.get('entityType')?.toString() as InvestingEntityType$options,
// 			strategy: data.get('strategy')?.toString() as InvestingEntityType$options
// 		};

// 		return await store.mutate({ input }, { event });
// 	},

// 	link_entity_and_user: async (event) => {
// 		const data = await event.request.formData();
// 		const store = new linkInvestingEntityToUserStore();

// 		const input: LinkInvestingEntityToUserInput = {
// 			userId: data.get('user_id')?.toString(),
// 			investingEntityId: data.get('entity_id')?.toString()
// 		};

// 		return await store.mutate({ input }, { event });
// 	}
// };
