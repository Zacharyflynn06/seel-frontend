<script lang="ts">
	import AuthWrapper from '$lib/components/AuthWrapper.svelte';
	import DarkModeToggleButton from '$lib/components/buttons/DarkModeToggleButton.svelte';
</script>

<header class="fixed inset-0 h-16 w-full bg-off-white shadow-08dp dark:bg-off-black">
	<div class="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-5">
		<a
			href="/"
			class="font-spartan text-4xl font-bold text-purple drop-shadow-xl dark:text-off-white">seel</a
		>
		<div>
			<!-- intentionally empty -->
		</div>
		<div>
			<DarkModeToggleButton />
		</div>
	</div>
</header>

<AuthWrapper>
	<slot />
</AuthWrapper>
