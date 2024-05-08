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

<main class="overflow-hidden md:ml-[10rem] md:mt-[80px] md:p-5">
	<slot />
</main>
