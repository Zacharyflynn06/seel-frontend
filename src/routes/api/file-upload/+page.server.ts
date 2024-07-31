import { AddDocumentToCollectionUrlStore } from '$houdini';

export const actions = {
	default: async (event) => {
		const store = new AddDocumentToCollectionUrlStore();
		const url = await store.fetch({ event });
		if (url.data?.addDocumentToCollectionUrl) {
			return { url: url.data?.addDocumentToCollectionUrl };
		}
		return;
	}
};
