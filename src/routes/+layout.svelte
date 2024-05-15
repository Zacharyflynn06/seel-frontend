<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import Header from '$lib/components/Header.svelte';

	onMount(() => {
		// this listens for the system to change dark mode preference
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
			if (e.matches) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		});

		if ($themeStore.theme === 'dark') {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<Header />

<slot />
