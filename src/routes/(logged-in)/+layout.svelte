<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: console.log({ data });
</script>

<NavBar />

<Header />

<main class="mt-[72px] h-[calc(100vh-80px)] overflow-hidden sm:mt-[80px] md:ml-[10rem] md:p-5">
	<slot />
</main>
