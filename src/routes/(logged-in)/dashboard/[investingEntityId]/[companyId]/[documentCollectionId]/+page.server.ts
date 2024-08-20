import { AddDocumentToCollectionStore, GetDocumentCollectionStore } from '$houdini';
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

export const actions: Actions = {
	save_document_to_collection: async (event) => {
		const data = await event.request.formData();

		const documentCollectionId = data.get('documentCollectionId')?.toString();

		const input = {
			documentCollectionId: documentCollectionId
		};

		const store = new AddDocumentToCollectionStore();

		try {
			await store.mutate({ input }, { event }).then((res) => {
				console.log({ res });
			});

			return {
				success: true,
				message: 'Successfully saved document to collection'
			};
		} catch (error) {
			console.log((error as Error).message);
		}
	}
};
