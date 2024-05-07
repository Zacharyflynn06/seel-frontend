<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="w-full space-y-2 bg-white p-5 shadow-08dp dark:bg-off-black md:rounded-2xl {className}"
>
	{#if heading}
		<h2 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''} h-[10%]">
			{heading}
		</h2>
	{/if}
	<div class={heading ? 'h-[85%] ' : 'h-full'}>
		<slot />
	</div>
</section>
