<script lang="ts">
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
</script>

<slot />
