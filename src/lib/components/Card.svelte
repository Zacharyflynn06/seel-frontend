<script lang="ts">
	import { cardHeadingClasses } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="bg-light-grey-04 w-full space-y-5 rounded-xl p-5 shadow-08dp dark:bg-grey-04 md:max-w-[500px] {className}"
>
	{#if heading}
		<h1 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''}">
			{heading}
		</h1>
	{/if}
	<div class={heading ? 'h-fit ' : 'h-full'}>
		<slot />
	</div>
</section>
