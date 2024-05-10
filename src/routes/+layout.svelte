<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { themeStore } from '$lib/stores/themeStore';
	import { page } from '$app/stores';
	import type { PageData } from './$types';

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

<slot />
