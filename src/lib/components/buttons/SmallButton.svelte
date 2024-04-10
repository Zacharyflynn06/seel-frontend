<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';
	import Spinner from '../Spinner.svelte';
	import UploadIcon from '../icons/UploadIcon.svelte';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let bgColor = 'bg-pink';
	export let textColor = 'text-off-white ';
	export let label = '';
	export let disabled = false;
	export let loading = false;
</script>

<button
	{disabled}
	{type}
	class="{bgColor} {textColor} {animatedTouchClasses} flex space-x-2.5 rounded-md bg-pink px-4 py-2 text-white focus:outline-none"
>
	<slot />
	<span>
		{#if loading}
			<Spinner className="h-6 w-6" />
		{:else}
			{label}
		{/if}
	</span>
</button>
