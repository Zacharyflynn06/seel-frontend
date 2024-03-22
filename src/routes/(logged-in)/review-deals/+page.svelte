<script lang="ts">
	import LoadingPage from '$lib/components/pages/LoadingPage.svelte';
	import ReviewDealsPage from '$lib/components/pages/ReviewDealsPage.svelte';
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ ReviewDealsQuery } = data);
	$: emails = $ReviewDealsQuery.data?.emails;
</script>

{#if $ReviewDealsQuery.fetching}
	<LoadingPage />
{:else}
	<ReviewDealsPage {emails} />
{/if}
