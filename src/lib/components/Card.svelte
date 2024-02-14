<script lang="ts">
	export let data: { heading: string; body: string } = {
		heading: 'Test Heading',
		body: 'Test Body'
	};
</script>

<section
	class=" transform-gpu rounded-2xl bg-white p-5 shadow-08dp transition-all duration-500 ease-in-out hover:scale-101 hover:shadow-24dp active:scale-99 active:shadow-01dp dark:bg-off-black"
>
	<slot>
		<div>
			<h2 class="text-2xl font-bold">{data.heading}</h2>
			<p class=" text-lg">{data.body}</p>
		</div>
	</slot>
</section>
