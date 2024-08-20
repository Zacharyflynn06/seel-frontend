<script lang="ts">
	import { selectBoxClasses } from '$lib/classes';
	export let name: string;
	export let label: string;
</script>

<label for={name} class="grid space-y-2">
	<span>{label}</span>
	<select class={selectBoxClasses} {name}>
		<slot />
	</select>
</label>
