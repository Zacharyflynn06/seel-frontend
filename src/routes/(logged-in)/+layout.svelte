<script>
	import { mainPanelWidth } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
</script>

<!-- navbar and header are position fixed -->

<NavBar />

<main class="h-[100dvh] md:ml-[10rem] {mainPanelWidth}">
	<Header />

	<slot />
</main>
