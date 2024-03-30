<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';

	// this listens for the system to change dark mode preference
	onMount(() => {
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
			if (e.matches) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});
	});

	// $: console.log($page);
</script>

<LandingPageHeader />

<slot />
