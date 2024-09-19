<script lang="ts">
	// your script goes here
	export let label = '';
	export let name = '';
	export let value: boolean = false;
</script>

<label class="inline-flex cursor-pointer items-center">
	<input type="checkbox" checked={value} class="peer sr-only" {name} />
	<div
		class="peer relative h-6 w-11 rounded-full bg-gray-200 shadow-md ring-1 ring-off-black after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-pink peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-pink dark:border-pink dark:bg-grey-04 dark:ring-off-white dark:peer-checked:bg-pink dark:peer-focus:ring-pink rtl:peer-checked:after:-translate-x-full"
	></div>
	<span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
</label>
