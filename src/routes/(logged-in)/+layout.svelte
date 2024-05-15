<script lang="ts">
	import { flexCenter } from '$lib/classes';
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
	import type { PageData } from '../$types';

	export let data: PageData;

	$: console.log({ data });
</script>

<NavBar />

<Header />

<main class="md:ml-[10rem]">
	<!-- Empty div for header margin -->
	<div class=" w-full">
		<div class="h-[80px]"></div>
		<!-- Main Content -->
		<div class="md:{flexCenter} p-5">
			<slot />
		</div>
	</div>
	<!-- Empty div for bottom nav -->
	<div class="h-[100px] w-full md:hidden"></div>
</main>
