<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import LineItem from '$lib/components/LineItem.svelte';
	import { selectedCompanyStore } from '$lib/stores/selectedCompanyStore';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	import { fly } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import type { ActionData, PageData } from './$types';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import toast from 'svelte-french-toast';
	import ManageCompanyForm from '$lib/components/formComponents/ManageCompanyForm.svelte';
	import TextAreaInput from '$lib/components/formComponents/TextAreaInput.svelte';
	import AttributeExpander from '$lib/components/AttributeExpander.svelte';

	export let form: ActionData;
	export let data: PageData;

	let loading = false;

	$: selectedEntity = data.user.investingEntities.filter(
		(entity) => entity.id === $selectedEntityStore
	)[0];

	$: console.log({ selectedEntity });

	$: if (form?.success) {
		console.log('success', form);
		toast.success(form.message, { position: 'top-center' });
	}

	$: if (form?.error) {
		toast.error(form?.error, { position: 'top-center' });
	}
	// console.log({ $selectedEntityStore, $selectedCompanyStore });
</script>

<div class="space-y-5">
	{#if selectedEntity}
		<div class="flex space-x-5">
			<Card heading="{selectedEntity?.name}'s Details">
				<div class="space-y-5">
					<div>
						Address: {selectedEntity.address}
					</div>
					<div>
						Strategy: {selectedEntity.strategy}
					</div>

					<div>
						Type: {selectedEntity.entityType}
					</div>
				</div>
			</Card>

			<Card heading="{selectedEntity?.name}'s Investments" className="space-y-5">
				<div class="divide-y">
					{#each selectedEntity.companies as company (company.id)}
						<div in:fly={{ x: -20 }} class="flex w-full py-5">
							{#each company.attributes as attribute}
								<a href="investments/{company.id}" class="flex w-full items-center justify-between">
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
						<p>No companies yet, add one below!</p>
					{/each}
				</div>

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
					<input type="hidden" name="investing_entity_id" value={selectedEntity.id} />
					<SmallButton type="submit" label="Add Investment" disabled={loading} {loading}
					></SmallButton>
				</form>
			</Card>
		</div>

		<div class="rounded-lg bg-light-grey-04 p-5 shadow-08dp dark:bg-grey-04">
			<div class="space-y-5 border-b">
				<h1>Investment Criteria</h1>
				<p>click to edit</p>
				<custom-table class="grid grid-cols-5 text-left">
					<th class=" py-2">Criteria</th>
					<th class=" py-2">Required</th>
					<th class=" py-2">Enabled</th>
					<th class=" py-2">Rules</th>
				</custom-table>
			</div>

			{#each selectedEntity.investmentCriteria as criteriaObject, index (criteriaObject.field.id)}
				<AttributeExpander {criteriaObject} {index} />
			{/each}
		</div>
	{/if}
</div>
