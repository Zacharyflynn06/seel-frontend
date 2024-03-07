<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';

	export let data: { heading: string; body: string } = {
		heading: 'Test Heading',
		body: 'Test Body'
	};
	export let heading = '';
</script>

<section class="{animatedTouchClasses} rounded-2xl bg-white p-5 shadow-08dp dark:bg-off-black">
	<slot>
		<div>
			<h2 class=" text-2xl font-bold">{heading}</h2>
		</div>
	</slot>
</section>
