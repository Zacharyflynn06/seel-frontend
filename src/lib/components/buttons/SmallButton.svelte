<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';

	export let type: 'button' | 'submit' | 'reset' | null | undefined = 'button';
	export let bgColor = 'bg-pink';
	export let textColor = 'text-off-white ';
	export let label = '';
</script>

<button
	{type}
	class="{bgColor} {textColor} {animatedTouchClasses}  rounded-md bg-pink px-4 py-2 text-white focus:outline-none"
>
	{label}
</button>
