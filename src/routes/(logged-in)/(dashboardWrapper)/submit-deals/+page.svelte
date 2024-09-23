<script lang="ts">
	import { enhance } from '$app/forms';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	import toast from 'svelte-french-toast';
	import type { ActionData, PageData } from './$types';
	import Card from '$lib/components/Card.svelte';
	import { redirect } from '@sveltejs/kit';
	import { goto } from '$app/navigation';

	let loading = false;

	export let data: PageData;

	export let form: ActionData;

	$: selectedEntity = data.user.investingEntities.filter(
		(entity) => entity.id === $selectedEntityStore
	)[0];

	$: if (form?.success) {
		loading = false;
		toast.success(form.message, { position: 'top-center' });
		goto('/review-deals');
	}
</script>

<Card heading="Submit Deals">
	<div class="space-y-5">
		<p>Add a new investment for {selectedEntity?.name}:</p>
		<form
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					update();
					loading = false;
				};
			}}
			action="?/add_new_company"
			method="POST"
			class="block space-y-5"
		>
			<TextInput label="Investment Name" name="company_name" type="text" required></TextInput>
			<input type="hidden" name="investing_entity_id" value={selectedEntity.id} />
			<SmallButton type="submit" label="Add Investment" disabled={loading} {loading}></SmallButton>
		</form>
	</div>
</Card>
