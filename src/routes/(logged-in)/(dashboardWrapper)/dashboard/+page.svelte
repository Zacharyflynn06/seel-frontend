<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	import type { ActionData, PageData } from './$types';
	import toast from 'svelte-french-toast';
	import AttributeExpander from '$lib/components/AttributeExpander.svelte';
	export let form: ActionData;
	export let data: PageData;

	$: selectedEntity = data?.user?.investingEntities.filter(
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

	function sortInvestmentCriteriaByAttribute(investmentCriteria) {
		return investmentCriteria.sort((a, b) => a.field.name.localeCompare(b.field.name));
	}

	$: sortedInvestmentCriteria = sortInvestmentCriteriaByAttribute(
		selectedEntity?.investmentCriteria
	);
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

			{#each sortedInvestmentCriteria as criteriaObject, index (criteriaObject.field.id)}
				<AttributeExpander {criteriaObject} {index} />
			{/each}
		</div>
	{/if}
</div>
