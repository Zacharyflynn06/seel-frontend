<script>
	import { mainPanelWidth } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { currentAuthenticatedUser } from '$lib/session/session';
	import { Auth } from 'aws-amplify';
</script>

<NavBar />

<main class="h-[100dvh] md:ml-[10rem] {mainPanelWidth}">
	<Header />

	<slot />
</main>
