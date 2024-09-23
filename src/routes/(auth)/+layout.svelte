<script lang="ts">
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<Header />

<AuthWrapper>
	<slot />
</AuthWrapper>
