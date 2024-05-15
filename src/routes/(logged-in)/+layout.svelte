<script lang="ts">
	import { flexCenter, mainPanelWidth, padHeader } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import { redirect } from '@sveltejs/kit';

	export let data;
</script>

<NavBar />

<Header marginForNav={true} />

<main
	class="flex min-h-[calc(100vh-60px)] flex-col items-center justify-center p-5 md:ml-[10rem] {mainPanelWidth} "
>
	<slot />

	<!-- Empty div for bottom nav -->
	<div class="h-[100px] w-full md:hidden"></div>
</main>
