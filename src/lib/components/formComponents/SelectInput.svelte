<script lang="ts">
	import { selectBoxClasses } from '$lib/classes';
	export let name: string;
	export let label = '';
	export let value: string | object = '';
</script>

<label for={name} class="grid space-y-2">
	{#if label}
		<span>{label}</span>
	{/if}
	<select on:change class={selectBoxClasses} {name} {value}>
		<slot />
	</select>
</label>
