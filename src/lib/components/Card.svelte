<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="mt-[80px] w-full rounded-2xl p-5 shadow-08dp dark:bg-grey-04 md:max-w-[500px] {className}"
>
	{#if heading}
		<h2
			class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''} h-[2.5rem] leading-none"
		>
			{heading}
		</h2>
	{/if}
	<div class="{heading ? 'h-fit ' : 'h-full'} space-y-5">
		<slot />
	</div>
</section>
