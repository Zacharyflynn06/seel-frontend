<script lang="ts">
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<main class="flex min-h-[calc(100vh-60px)] items-center justify-center p-5">
	<slot />
</main>
