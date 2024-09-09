import { GetCompanyStore, UpsertDocumentCollectionStore } from '$houdini';
import type { Actions } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

export const load: PageLoad = async (event) => {
	const companyId = event.params.companyId;
	const investingEntityId = event.params.investingEntityId;

	const store = new GetCompanyStore();

	const { data } = await store.fetch({ event, variables: { id: companyId } });
	return {
		company: data?.getCompany,
		investingEntityId
	};
};

export const actions: Actions = {
	add_new_document_collection: async (event) => {
		const data = await event.request.formData();

		const name = data.get('documentCollectionName')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();
		const companyId = data.get('companyId')?.toString();
		const userId = event.locals.user.id;
		const store = new UpsertDocumentCollectionStore();

		const input = {
			name: name,
			investingEntityId: investingEntityId,
			companyId: companyId,
			userId: userId
		};

		try {
			await store.mutate({ input }, { event }).then((res) => {
				console.log('yes', { res });
			});

			return {
				success: true,
				message: 'Successfully added new company'
			};
		} catch (error) {
			console.log((error as Error).message);
		}
	}
};
