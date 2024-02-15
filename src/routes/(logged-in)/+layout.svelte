<script>
	import Header from '$lib/components/Header.svelte';
	import NavBar from '$lib/components/nav/NavBar.svelte';
</script>

<!-- navbar and header are position fixed -->
<NavBar />

<Header />

<div class="mt-20">
	<slot />
</div>
