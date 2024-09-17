<script>
	import { enhance } from '$app/forms';
	import ConfirmDeleteButton from '$lib/components/buttons/ConfirmDeleteButton.svelte';
	import Spinner from '$lib/components/Spinner.svelte';

	let loading = false;

	export let company;
</script>

<form
	use:enhance={() => {
		// We don't need to reset loading spinner as it is removed
		loading = true;
		return async ({ update }) => {
			update();
		};
	}}
	action="?/delete_company"
	method="POST"
>
	<input type="hidden" name="company_id" value={company.id} />

	{#if loading}
		<Spinner />
	{:else}
		<ConfirmDeleteButton />
	{/if}
</form>
