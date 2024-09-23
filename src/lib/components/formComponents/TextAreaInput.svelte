<script>
	import { inputBorderClasses, inputLabelClasses, inputResetClasses } from '$lib/classes';

	export let label = '';
	export let value = '';
	export let name = '';
	export let placeholder = '';
	export let extraClasses = '';
	export let minlength = 0;
	export let required = false;
	export let autocomplete = 'off';
	export let disabled = false;
	export let className =
		inputResetClasses +
		inputBorderClasses +
		' dark:placeholder:text-off-white mt-1 block w-full dark:text-off-white shadow-04dp shadow-autofill ' +
		extraClasses;
</script>

<fieldset class="relative">
	{#if label}
		<label for={name} class={inputLabelClasses}>
			{label}
		</label>
	{/if}
	<textarea
		bind:value
		{name}
		{placeholder}
		class={className}
		{minlength}
		{required}
		{autocomplete}
		{disabled}
	/>
</fieldset>
