<script>
	import NavBar from '$lib/components/nav/NavBar.svelte';
	// import { onMount } from 'svelte';
	import '../app.css';

	// onMount(() => {
	// 	document.documentElement.style.setProperty('--color-bg', '#020202');
	// });
</script>

<NavBar />

<slot />
