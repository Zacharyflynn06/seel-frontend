<script lang="ts">
	import { animatedTouchClasses } from '$lib/classes';

	export let data: { heading: string; body: string } = {
		heading: 'Test Heading',
		body: 'Test Body'
	};
</script>

<section class="{animatedTouchClasses} rounded-2xl bg-white p-5 shadow-08dp dark:bg-off-black">
	<slot>
		<div>
			<h2 class="font-spartan text-2xl font-bold">{data.heading}</h2>
			<p class=" text-lg">{data.body}</p>
		</div>
	</slot>
</section>
