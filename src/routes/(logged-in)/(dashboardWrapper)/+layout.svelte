<script lang="ts">
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';

	import { page } from '$app/stores';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore.js';
	import { selectedCompanyStore } from '$lib/stores/selectedCompanyStore.js';

	export let data;
	function formatTitleFromPath(path: string) {
		return path
			.split('/')
			.map((p) => p.replace(/-/g, ' ').replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
			.join(' ');
	}

	function handleChangeInvestingEntity(event) {
		const entity = data.user.investingEntities.filter((entity) => entity.id === event.target.value);
		$selectedEntityStore = entity[0];
		$selectedCompanyStore = entity[0].companies[0];
	}
	function handleChangeCompany(event) {
		const company = $selectedEntityStore.companies.filter(
			(company) => company.id === event.target.value
		);
		$selectedCompanyStore = company[0];
	}

	let user = data.user;

	if ($selectedEntityStore === null) {
		$selectedEntityStore = data.user.investingEntities[0];
		$selectedCompanyStore = data.user.investingEntities[0].companies[0];
	}

	console.log({ $selectedEntityStore, $selectedCompanyStore });
</script>

<div class="mb-5 flex items-end justify-between">
	<h1 class="text-5xl">{formatTitleFromPath($page.url.pathname)}</h1>

	<div class="flex items-end justify-between space-x-5">
		<span class="inline-flex font-spartan uppercase tracking-widest">Investing Entity</span>
		{#if user && user.investingEntities}
			<SelectInput name="investingEntity" on:change={handleChangeInvestingEntity}>
				{#each user.investingEntities as entity}
					<option value={entity.id}>{entity.name}</option>
				{/each}
			</SelectInput>
		{/if}
		<span class="inline-flex font-spartan uppercase tracking-widest">Investments</span>
		{#if $selectedEntityStore && $selectedEntityStore.companies}
			<SelectInput name="company" on:change={handleChangeCompany}>
				{#each $selectedEntityStore.companies as company}
					<option value={company.id}>{company.attributes[0].stringValue}</option>
				{/each}
			</SelectInput>
		{/if}
	</div>
</div>

<slot />
