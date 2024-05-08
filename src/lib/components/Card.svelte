<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="w-full space-y-5 bg-white p-5 shadow-08dp dark:bg-grey-04 dark:shadow-pink md:rounded-2xl {className}"
>
	{#if heading}
		<h2 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''} h-[10%] leading-none">
			{heading}
		</h2>
	{/if}
	<div class={heading ? 'h-fit ' : 'h-full'}>
		<slot />
	</div>
</section>
