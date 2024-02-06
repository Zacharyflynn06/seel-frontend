<script lang="ts">
	export let data: { heading: string; body: string };
</script>

<div
	class="shadow-08dp hover:shadow-24dp active:shadow-01dp transform rounded-2xl bg-white transition-all duration-500 ease-in-out hover:scale-[101%] active:scale-[99%]"
>
	<div>
		<h2 class="p-5 text-2xl font-bold">{data.heading}</h2>
		<p class="p-5 text-lg">{data.body}</p>
	</div>
</div>
