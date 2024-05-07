<script>
	import { mainPanelWidth } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { currentAuthenticatedUser } from '$lib/session/session';

	$: if (!currentAuthenticatedUser()) {
		console.log('no user');
	}
</script>

<NavBar />

<Header />
<main class="h-[calc(100vh-80px)] md:ml-[10rem] {mainPanelWidth} overflow-hidden">
	<slot />
</main>
