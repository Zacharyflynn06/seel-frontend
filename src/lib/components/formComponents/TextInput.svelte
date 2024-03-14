<script>
	import { textInputClasses } from '$lib/classes';

	export let label = '';
	export let value = '';
	export let name = '';
	export let placeholder = '';
	export let className = textInputClasses;
	export let type = 'text';
</script>

<label class="block">
	<span class="font-spartan text-off-black dark:text-off-white">{label}</span>

	{#if type === 'text'}
		<input type="text" {value} {name} {placeholder} class={className} />
	{:else if type === 'password'}
		<input type="password" {value} {name} {placeholder} class={className} />
	{:else if type === 'email'}
		<input type="email" {value} {name} {placeholder} class={className} />
	{/if}
</label>
