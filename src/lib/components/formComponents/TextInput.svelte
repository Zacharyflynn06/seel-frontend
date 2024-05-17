<script>
	import { inputBorderClasses, inputLabelClasses, inputResetClasses } from '$lib/classes';

	export let label = '';
	export let value = '';
	export let name = '';
	export let placeholder = '';
	export let extraClasses = '';
	export let type = 'text';
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

<div class="relative">
	{#if label}
		<label for={name} class={inputLabelClasses}>
			{label}
		</label>
	{/if}
	{#if type === 'text'}
		<input
			type="text"
			bind:value
			{name}
			{placeholder}
			class={className}
			{minlength}
			{required}
			{autocomplete}
			{disabled}
		/>
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
		<input type="email" bind:value {name} {placeholder} class={className} {minlength} {required} />
	{/if}
	<div class="absolute right-2.5 top-1/4 z-10">
		<slot />
	</div>
</div>
