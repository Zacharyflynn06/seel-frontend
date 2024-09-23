<script>
	import { enhance } from '$app/forms';
	import ConfirmDeleteButton from '$lib/components/buttons/ConfirmDeleteButton.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let loading = false;

	export let documentCollection;
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			update();
			loading = false;
		};
	}}
	action="?/delete_document_collection"
	method="POST"
>
	<input type="hidden" name="document_collection_id" value={documentCollection.id} />

	{#if loading}
		<Spinner />
	{:else}
		<ConfirmDeleteButton />
	{/if}
</form>
