<script lang="ts">
	import { inputLabelClasses } from '$lib/classes';

	export let label = '';
	export let name = '';
	export let value: boolean = false;
</script>

<label for={name} class="flex items-center space-x-2">
	<input type="checkbox" {name} checked={value} />
	<span class={inputLabelClasses}>{label}</span>
</label>
