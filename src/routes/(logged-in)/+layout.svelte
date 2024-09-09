<script lang="ts">
	import { mainPanelWidth } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';

	import SelectInput from '$lib/components/formComponents/SelectInput.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	$: ({ user } = data);

	import { page } from '$app/stores';
	import { currentInvestingEntityStore } from '$lib/stores/currentInvestingEntityStore';

	function formatTitleFromPath(path: string) {
		return path
			.split('/')
			.map((p) => p.replace(/-/g, ' ').replace(/(^|\s)\S/g, (l) => l.toUpperCase()))
			.join(' ');
	}

	function handleChangeInvestingEntity(event) {
		let entity = data.user.investingEntities.filter((entity) => entity.id === event.target.value);
		currentInvestingEntityStore.set(entity[0]);
	}
</script>

<NavBar />

<Header marginForNav={true} />

<main class="flex min-h-[calc(100vh-60px)] flex-col space-y-5 p-5 md:ml-[10rem] {mainPanelWidth} ">
	<div class="flex items-end justify-between">
		<h1>{formatTitleFromPath($page.url.pathname)}</h1>

		<div class="flex items-end space-x-5">
			<span class="inline-flex font-spartan uppercase tracking-widest">Investing Entity</span>
			{#if user && user.investingEntities}
				<SelectInput name="investingEntity" on:change={handleChangeInvestingEntity}>
					{#each user.investingEntities as entity}
						<option value={entity.id}>{entity.name}</option>
					{/each}
				</SelectInput>
			{/if}
		</div>
	</div>
	<slot />

	<!-- Empty div for bottom nav -->
	<div class="h-[100px] w-full md:hidden"></div>
</main>
