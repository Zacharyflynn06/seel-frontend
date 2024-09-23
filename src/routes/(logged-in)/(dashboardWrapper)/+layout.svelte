<script lang="ts">
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';

	import { page } from '$app/stores';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore.js';
	export let data;

	function formatTitleFromPath(path: string) {
		return path
			.split('/')
			.map((p) => p.replace(/-/g, ' ').replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
			.join(' ');
	}

	function handleChangeInvestingEntity(event: Event) {
		$selectedEntityStore = event?.currentTarget?.value;
	}

	$: user = data.user;

	$: if (!$selectedEntityStore) {
		$selectedEntityStore = user?.investingEntities[0].id;
	}

	$: console.log('layout', { user });
</script>

<div class="mb-5 flex flex-col space-y-10 md:flex-row md:items-end md:justify-between">
	<h1 class="text-5xl">{formatTitleFromPath($page.url.pathname)}</h1>

	<div class="flex flex-col justify-between md:flex-row md:items-end md:space-x-5">
		<span class="inline-flex font-spartan uppercase tracking-widest">Investing Entity</span>
		{#if user && user.investingEntities}
			<SelectInput name="investingEntity" on:change={handleChangeInvestingEntity}>
				{#each user.investingEntities as entity}
					<option value={entity.id}>{entity.name}</option>
				{/each}
			</SelectInput>
		{/if}
		<!-- <span class="inline-flex font-spartan uppercase tracking-widest">Investments</span>
		{#if $selectedEntityStore && $selectedEntityStore.companies}
			<SelectInput name="company" on:change={handleChangeCompany}>
				{#each $selectedEntityStore.companies as company}
					<option value={company.id}>{company.attributes[0].stringValue}</option>
				{/each}
			</SelectInput>
		{/if} -->
	</div>
</div>

<slot />
