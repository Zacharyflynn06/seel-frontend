<script>
	import { inputLabelClasses, textInputClasses } from '$lib/classes';

	export let label = '';
	export let value = '';
	export let name = '';
	export let placeholder = '';
	export let className = textInputClasses;
	export let required = false;
</script>

<label for={name} class="w-20">
	<span class={inputLabelClasses}>{label}</span>
	<input type="number" {name} {value} {required} class={className} {placeholder} />
</label>
