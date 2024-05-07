<script lang="ts">
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';
</script>

<LandingPageHeader />

<AuthWrapper>
	<slot />
</AuthWrapper>
