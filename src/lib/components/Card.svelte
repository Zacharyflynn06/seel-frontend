<script lang="ts">
	import { animatedTouchClasses, cardHeadingClasses } from '$lib/classes';

	export let heading = '';
	export let headingIsCentered = false;
</script>

<section class="space-y-2 rounded-2xl bg-white p-5 shadow-08dp dark:bg-off-black">
	<h2 class="{cardHeadingClasses} {headingIsCentered ? 'text-center' : ''}">{heading}</h2>
	<slot />
</section>
