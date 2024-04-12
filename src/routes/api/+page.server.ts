import { generateUploadURL } from '$lib/utilities/GenerateSignedUrl.js';

export const actions = {
	default: async () => {
		const url = await generateUploadURL();
		return url;
	}
};
