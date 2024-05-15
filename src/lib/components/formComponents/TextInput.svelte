<script>
	import { inputLabelClasses, textInputClasses } from '$lib/classes';

	export let label = '';
	export let value = '';
	export let name = '';
	export let placeholder = '';
	export let className = textInputClasses;
	export let type = 'text';
	export let minlength = 0;
	export let required = false;
</script>

<label class="block">
	<span class={inputLabelClasses}>{label}</span>

	{#if type === 'text'}
		<input type="text" {value} {name} {placeholder} class={className} {minlength} {required} />
	{:else if type === 'password'}
		<input
			type="password"
			class={className}
			{value}
			{name}
			{placeholder}
			{minlength}
			{required}
			autocomplete="current-password"
		/>
	{:else if type === 'email'}
		<input type="email" {value} {name} {placeholder} class={className} {minlength} {required} />
	{/if}
</label>
