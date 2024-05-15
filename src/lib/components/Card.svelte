<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="w-full rounded-3xl bg-off-white p-5 shadow-08dp dark:bg-grey-04 md:max-w-[500px] {className}"
>
	{#if heading}
		<h2 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''} text- leading-none">
			{heading}
		</h2>
	{/if}
	<div class={heading ? 'h-fit ' : 'h-full'}>
		<slot />
	</div>
</section>
