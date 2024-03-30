import { QueryStore } from '../runtime/stores/query'
import artifact from '$houdini/artifacts/ClientsQuery'
import { initClient } from '$houdini/plugins/houdini-svelte/runtime/client'

export class ClientsQueryStore extends QueryStore {
	constructor() {
		super({
			artifact,
			storeName: "ClientsQueryStore",
			variables: false,
		})
	}
}

export async function load_ClientsQuery(params) {
	await initClient()

	const store = new ClientsQueryStore()

	await store.fetch(params)

	return {
		ClientsQuery: store,
	}
}
