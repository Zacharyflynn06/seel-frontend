<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let bgColor = 'bg-pink';
	export let textColor = 'text-off-white ';
	export let label = '';
	export let disabled = false;
	export let loading = false;

	$: if (loading) {
		disabled = true;
		bgColor = 'bg-grey-01';
	} else {
		disabled = false;
		bgColor = 'bg-pink';
	}
</script>

<button
	{disabled}
	{type}
	class="{bgColor} {textColor} {animatedTouchClasses} flex min-w-[80px] space-x-2.5 rounded-md px-4 py-2 focus:outline-none"
>
	<slot />
	<div class="flex w-full items-center justify-center">
		{#if loading}
			<Spinner className="h-6 w-6" />
		{:else}
			<div>
				{label}
			</div>
		{/if}
	</div>
</button>
