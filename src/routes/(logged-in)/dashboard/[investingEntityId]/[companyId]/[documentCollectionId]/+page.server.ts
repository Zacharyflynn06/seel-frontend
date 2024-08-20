import { GetDocumentCollectionStore } from '$houdini';
import type { Actions } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const documentCollectionId = event.params.documentCollectionId;
	const investingEntityId = event.params.investingEntityId;
	const companyId = event.params.companyId;

	const store = new GetDocumentCollectionStore();

	const { data } = await store.fetch({
		event,
		variables: {
			id: documentCollectionId
		}
	});

	console.log(data);

	return {
		documentCollection: data?.getDocumentCollection,
		investingEntityId,
		companyId
	};
};

// export const actions: Actions = {
// 	add_new_company: async (event) => {
// 		const data = await event.request.formData();

// 		const name = data.get('documentCollectionName')?.toString();
// 		const investingEntityId = data.get('investingEntityId')?.toString();
// 		const companyId = data.get('companyId')?.toString();
// 		const userId = event.locals.user.id;
// 		const store = new UpsertDocumentCollectionStore();

// 		const input = {
// 			name: name,
// 			investingEntityId: investingEntityId,
// 			companyId: companyId,
// 			userId: userId
// 		};

// 		try {
// 			await store.mutate({ input }, { event }).then((res) => {
// 				console.log('yes', { res });
// 			});

// 			return {
// 				success: true,
// 				message: 'Successfully added new company'
// 			};
// 		} catch (error) {
// 			console.log((error as Error).message);
// 		}
// 	}
// };
