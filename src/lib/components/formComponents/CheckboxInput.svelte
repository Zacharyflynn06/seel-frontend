<script lang="ts">
	export let label = '';
	export let name = '';
	export let value: boolean = false;
</script>

<label for={name} class="flex items-center space-x-2">
	<input type="checkbox" {name} checked={value} />
	<span class="font-spartan text-off-black dark:text-off-white">{label}</span>
</label>
