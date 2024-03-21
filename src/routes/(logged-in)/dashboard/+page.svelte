<script lang="ts">
	import Spinner from '$lib/components/Spinner.svelte';
	import Dashboard from '$lib/components/pages/Dashboard.svelte';

	import type { PageData } from './$houdini';
	import { ClientsQueryStore } from '$houdini';
	export let data: PageData;

	$: ({ EmailsQuery } = data);

	$: console.log(ClientsQueryStore);
</script>

{#if $EmailsQuery.fetching}
	<Spinner />
{:else}
	<Dashboard />
{/if}
