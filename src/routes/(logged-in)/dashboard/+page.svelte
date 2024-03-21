<script lang="ts">
	import Dashboard from '$lib/components/pages/Dashboard.svelte';
	import LoadingPage from '$lib/components/pages/LoadingPage.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ DashboardQuery } = data);

	$: console.log({ $DashboardQuery });
</script>

{#if $DashboardQuery.fetching}
	<LoadingPage />
{:else}
	<Dashboard />
{/if}
