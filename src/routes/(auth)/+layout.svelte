<script lang="ts">
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';

	let gate = true;
</script>

<LandingPageHeader />

{#if !gate}
	<!-- content here -->

	<AuthWrapper>
		<slot />
	</AuthWrapper>
{:else}
	<div class="gradient-animation flex h-screen w-full items-center justify-center">
		<div class="h- flex w-full items-center justify-center font-spartan text-3xl">
			Under Construction
		</div>
	</div>
{/if}
