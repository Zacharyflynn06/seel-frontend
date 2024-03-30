import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/EmailsQuery'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class EmailsQueryStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "EmailsQueryStore",
			variables: false,
		})
	}
}

export async function load_EmailsQuery(params) {
	await initClient()

	const store = new EmailsQueryStore()

	await store.fetch(params)

	return {
		EmailsQuery: store,
	}
}
