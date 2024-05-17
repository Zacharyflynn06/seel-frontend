<script lang="ts">
	import { cardHeadingClasses, flexCenter, padHeader } from '$lib/classes';

	export let className = '';
	export let heading = '';
	export let headingIsCentered = false;
</script>

<section
	class="h-fit w-full space-y-5 rounded-lg bg-light-grey-04 p-5 shadow-08dp dark:bg-grey-04 md:max-w-[500px] xl:max-w-[650px] {className} "
>
	{#if heading}
		<h1 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : 'text-left'}">
			{heading}
		</h1>
	{/if}
	<div class={heading ? 'h-fit ' : 'h-full '}>
		<slot />
	</div>
</section>
