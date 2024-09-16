<script lang="ts">
	import { selectBoxClasses } from '$lib/classes';
	export let name: string;
	export let label: string = '';
	export let disabled = false;
</script>

<label for={name} class="grid space-y-2">
	<span>{label}</span>
	<select on:change {disabled} class={selectBoxClasses} {name}>
		<slot />
	</select>
</label>
