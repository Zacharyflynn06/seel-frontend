<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let label = '';
	export let disabled = false;
	export let loading = false;
</script>

<button
	{disabled}
	{type}
	class="flex min-w-[80px] space-x-2.5 rounded-md bg-pink text-off-white {disabled
		? 'text-grey-01  opacity-50 dark:border dark:border-grey-08 '
		: animatedTouchClasses} px-4 py-2 focus:outline-none"
>
	<slot />
	<div class="flex w-full items-center justify-center">
		{#if loading}
			<Spinner className="h-6 w-6" />
		{:else}
			<span>
				{label}
			</span>
		{/if}
	</div>
</button>
