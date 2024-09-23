<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import LineItem from '$lib/components/LineItem.svelte';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore';
	import { fly } from 'svelte/transition';

	import ManageCompanyForm from '$lib/components/formComponents/ManageCompanyForm.svelte';
	import type { ActionData, PageData } from './$types';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let data: PageData;

	let selectedInvestment = null;

	$: selectedEntity = data.user.investingEntities.filter(
		(entity) => entity.id === $selectedEntityStore
	)[0];

	$: if (selectedEntity.companies) {
		selectedInvestment = selectedEntity.companies[0];
	}
</script>

<div class="flex h-full space-x-5">
	<!-- <Card heading="Deals" className="space-y-5 h-full">
		<div class="flex w-full items-center justify-between">
			<button
				disabled={!selectedInvestment || selectedEntity.companies.indexOf(selectedInvestment) === 0}
				on:click={() => {
					const companies = selectedEntity.companies;
					const index = companies.indexOf(selectedInvestment);
					if (index > 0) {
						selectedInvestment = companies[index - 1];
					}
				}}
			>
				<ChevronLeft class="h-12 w-12" />
			</button>
			{#if selectedInvestment}
				<div class="min-h-[500px] w-full rounded-sm bg-white p-5 shadow-md">
					<h1>{selectedInvestment.attributes[0].stringValue}</h1>
					<div in:fly={{ x: -20 }} class="flex w-full py-5">
						<a
							href="investments/{selectedInvestment.id}"
							class="flex w-full items-center justify-between"
						>
							Manage Investment
						</a>
					</div>
				</div>
			{/if}
			<button
				disabled={!selectedInvestment ||
					selectedEntity.companies.indexOf(selectedInvestment) ===
						selectedEntity.companies.length - 1}
				on:click|preventDefault={() => {
					const index = selectedEntity.companies.indexOf(selectedInvestment);
					if (index < selectedEntity.companies.length - 1) {
						selectedInvestment = selectedEntity.companies[index + 1];
					}
				}}
			>
				<ChevronRight class="h-12 w-12" />
			</button>
		</div>
	</Card> -->

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
				<p>
					No companies yet, add one at <a class="underline" href="/submit-deals">Submit Deals</a>
				</p>
			{/each}
		</div>
	</Card>
</div>
