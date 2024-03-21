<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import '../app.css';

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

<slot />
