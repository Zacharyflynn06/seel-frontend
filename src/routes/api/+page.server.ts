import { AddDocumentToCollectionUrlStore } from '$houdini';
import { generateUploadURL } from '$lib/utilities/GenerateSignedUrl.js';
import { json } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const store = new AddDocumentToCollectionUrlStore();
		const url = await store.fetch({ event });
		console.log({ url });
		return url;
	}
};
