<script lang="ts">
	import { flexCenter, padHeader } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import type { PageData } from '../$types';

	import { page } from '$app/stores';

	export let data: PageData;

	$: console.log($page.url.pathname, data);
</script>

<NavBar />

<Header />

<main class="w-full md:ml-[10rem]">
	<div class="md:{flexCenter} p-5">
		<slot />
	</div>
	<!-- Empty div for bottom nav -->
	<div class="h-[100px] w-full md:hidden"></div>
</main>
