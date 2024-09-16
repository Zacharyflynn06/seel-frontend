<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import LineItem from '$lib/components/LineItem.svelte';
	import { selectedCompanyStore } from '$lib/stores/selectedCompanyStore';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	import { fly, slide } from 'svelte/transition';
	import ManageCompanyForm from '../dashboard/[investingEntityId]/ManageCompanyForm.svelte';
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import toast from 'svelte-french-toast';

	export let form: ActionData;

	let loading = false;

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}
	console.log({ $selectedEntityStore, $selectedCompanyStore });
</script>

<Card heading="{$selectedEntityStore?.name}'s Investments">
	{#if $selectedEntityStore}
		<div class="divide-y">
			{#each $selectedEntityStore.companies as company (company.id)}
				<div in:fly={{ x: -20 }} class="flex w-full py-5">
					<!-- this is the roundabout way we are getting the company name for now -->
					{#each company.attributes as attribute}
						<a
							href="/dashboard/{$selectedEntityStore.id}/{company.id}"
							class="flex w-full items-center justify-between"
						>
							<div class="flex items-center space-x-5 text-lg">
								<LineItem>
									{attribute.stringValue}
								</LineItem>
							</div>
						</a>
					{/each}

					<ManageCompanyForm {company} />
				</div>
			{:else}
				<p>No companies yet, add one above!</p>
			{/each}
		</div>
	{/if}

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
		class="space-y-5"
	>
		<TextInput label="Investment Name" name="company_name" type="text" required></TextInput>
		<input type="hidden" name="$selectedEntityStoreId" value={$selectedEntityStore.id} />
		<SmallButton type="submit" label="Add Investment" {loading}></SmallButton>
	</form>
</Card>
