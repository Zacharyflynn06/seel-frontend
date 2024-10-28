import {
	AddDocumentToCollectionStore,
	DeleteDocumentCollectionStore,
	GetCompanyStore,
	SendMessageToChatStore,
	UpsertChatStore,
	UpsertDocumentCollectionStore,
	ValidateCompanyStore,
	type UpsertDocumentCollectionInput
} from '$houdini';
import type { Actions } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async (event) => {
	const companyId = event.params.companyId;

	const getCompanyStore = new GetCompanyStore();
	const getCompanyRes = await getCompanyStore.fetch({ event, variables: { id: companyId } });

	if (getCompanyRes.errors) {
		return {
			error: getCompanyRes.errors[0].message
		};
	}
	const company = getCompanyRes.data?.getCompany;

	if (!company) {
		return {
			error: 'Company not found'
		};
	}

	const validateCompanyStore = new ValidateCompanyStore();
	const validateCompanyRes = await validateCompanyStore.fetch({
		event,
		variables: { companyId: companyId }
	});

	return {
		company: company,
		investingEntity: company.investingEntity,
		validateCompany: validateCompanyRes.data?.validateCompany
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
	send_message: async (event) => {
		const data = await event.request.formData();
		const chatId = data.get('chat_id')?.toString();
		const message = data.get('user_input')?.toString();
		// let subscription = new ChatEventStore();
		const messageStore = new SendMessageToChatStore();

		if (!chatId) {
			return {
				error: true,
				message: 'Chat id not found'
			};
		}
		if (!message) {
			return {
				error: true,
				message: 'Message not found'
			};
		}

		const sendMessageRes = await messageStore.mutate({ id: chatId, message: message }, { event });

		if (sendMessageRes.errors) {
			return {
				error: true,
				message: sendMessageRes.errors[0].message
			};
		}
		const sendMessageBody = await sendMessageRes.data?.sendMessageToChat;

		console.log({ sendMessageBody });
		return {
			answer: sendMessageBody
		};
	},
	add_new_document_collection: async (event) => {
		const data = await event.request.formData();

		const name = data.get('documentCollectionName')?.toString();
		const investingEntityId = data.get('investingEntityId')?.toString();
		const companyId = data.get('companyId')?.toString();
		const userId = event?.locals?.user?.id;
		const store = new UpsertDocumentCollectionStore();

		if (!name || !investingEntityId || !companyId) {
			return { error: 'All fields are required' };
		}

		const input: UpsertDocumentCollectionInput = {
			name: name,
			investingEntityId: investingEntityId,
			companyId: companyId,
			userId: userId
		};

		const res = await store.mutate({ input }, { event });

		if (res.errors) {
			console.log({ error: res.errors[0].message });
			return { error: res.errors[0].message };
		}

		return {
			success: true,
			message: 'Successfully added new document collection'
		};
	},

	delete_document_collection: async (event) => {
		const data = await event.request.formData();
		const documentCollectionId = data.get('document_collection_id')?.toString();

		const store = new DeleteDocumentCollectionStore();

		if (!documentCollectionId) {
			return {
				error: 'Document collection id not found'
			};
		}

		try {
			await store.mutate({ id: documentCollectionId }, { event }).then((res) => {
				console.log({ res });
			});
			return {
				success: true,
				message: 'Successfully deleted document collection'
			};
		} catch (error) {
			console.log((error as Error).message);
			return { error: (error as Error).message };
		}
	},

	start_chat: async (event) => {
		const data = await event.request.formData();
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
