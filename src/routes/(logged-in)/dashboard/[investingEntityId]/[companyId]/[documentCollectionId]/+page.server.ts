import {
	AddDocumentToCollectionStore,
	GetDocumentCollectionStore,
	UpsertChatStore
} from '$houdini';
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

	// console.log(data);

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
		const documentMetadataId = data.get('documentMetadataId')?.toString();

		const input = {
			documentMetadataId: documentMetadataId,
			documentCollectionId: documentCollectionId
		};

		const store = new AddDocumentToCollectionStore();

		if (!documentCollectionId || !documentMetadataId) {
			return {
				success: false,
				message: 'Document collection id or document metadata id not found'
			};
		}

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
	},

	ask_collection: async (event) => {
		const data = await event.request.formData();
		const userInput = data.get('user_input')?.toString();

		const documentCollectionId = data.get('documentCollectionId')?.toString();
		const userId = data.get('userId')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();
		const companyId = data.get('companyId')?.toString();

		const store = new UpsertChatStore();

		const input = {
			companyId: companyId,
			documentCollectionId: documentCollectionId,
			investingEntityId: investingEntityId,
			name: 'test',
			userId: userId
			// not sure what to use for a name
		};

		if (!documentCollectionId) {
			return {
				success: false,
				message: 'Document collection id not found'
			};
		}

		const res = await store.mutate({ input }, { event });

		const chatId = res.data?.upsertChat?.id;

		if (res.errors) {
			return {
				error: true,
				message: res.errors[0].message
			};
		}
		return {
			success: true,
			chatId: chatId
		};
	}
};
