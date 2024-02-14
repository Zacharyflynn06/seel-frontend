<script>
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
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

<!-- navbar and header are position fixed -->
<NavBar />

<Header />

<div class="mt-20">
	<slot />
</div>
