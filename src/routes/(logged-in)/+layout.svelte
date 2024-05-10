<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: console.log({ data });
</script>

<NavBar />

<Header />

<main class="mt-[80px] h-[calc(100vh-80px)] overflow-hidden p-5 md:ml-[10rem]">
	<slot />
</main>
