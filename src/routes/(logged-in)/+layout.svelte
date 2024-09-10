<script lang="ts">
	import { mainPanelWidth } from '$lib/classes';
	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { page } from '$app/stores';
	import { selectedEntityStore } from '$lib/stores/selectedEntityStore.js';

	export let data;

	function formatTitleFromPath(path: string) {
		return path
			.split('/')
			.map((p) => p.replace(/-/g, ' ').replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
			.join(' ');
	}

	function handleChangeInvestingEntity(event) {
		const entity = data.user.investingEntities.filter((entity) => entity.id === event.target.value);
		console.log({ entity });
		$selectedEntityStore = entity[0];
	}

	let user = data.user;
</script>

<NavBar />

<Header marginForNav={true} />

<main class="flex min-h-[calc(100vh-60px)] flex-col p-5 md:ml-[10rem] {mainPanelWidth} ">
	<div class="flex items-end justify-between">
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
				<SelectInput name="company">
					{#each $selectedEntityStore.companies as company}
						<option value={company.id}>{company.attributes[0].stringValue}</option>
					{/each}
				</SelectInput>
			{/if}
		</div>
	</div>

	<slot />

	<!-- Empty div for bottom nav -->
	<div class="h-[100px] w-full md:hidden"></div>
</main>
