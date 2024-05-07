<script>
	import { mainPanelWidth } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { currentAuthenticatedUser } from '$lib/session/session';

	$: if (!currentAuthenticatedUser()) {
		console.log('no user');
	}
	let gate = true;
</script>

{#if !gate}
	<NavBar />

	<Header />
	<main class="h-[calc(100vh-80px)] md:ml-[10rem] {mainPanelWidth} overflow-hidden">
		<slot />
	</main>
{:else}
	<LandingPageHeader />
	<div class="gradient-animation flex h-screen w-full items-center justify-center">
		<div class="h- flex w-full items-center justify-center font-spartan text-3xl">
			Under Construction
		</div>
	</div>
{/if}
