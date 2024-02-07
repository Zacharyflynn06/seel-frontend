<script lang="ts">
	export let data: { heading: string; body: string };
</script>

<div
	class="transform rounded-2xl bg-white shadow-08dp transition-all duration-500 ease-in-out hover:scale-[101%] hover:shadow-24dp active:scale-[99%] active:shadow-01dp dark:bg-off-black"
>
	<div>
		<h2 class="p-5 text-2xl font-bold">{data.heading}</h2>
		<p class="p-5 text-lg">{data.body}</p>
	</div>
</div>
