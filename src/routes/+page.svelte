<script lang="ts">
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';
	import LandingPage from '$lib/components/pages/LandingPage.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: console.log({ data });
</script>

<LandingPageHeader />
<LandingPage />
