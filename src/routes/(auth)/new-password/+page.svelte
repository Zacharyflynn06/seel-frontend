<script lang="ts">
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	let password = '';
	let confirmPassword = '';
</script>

<form class="space-y-2.5">
	<h1>Reset password</h1>

	<TextInput
		bind:value={password}
		type="password"
		name="password"
		label="Password"
		placeholder="Password"
	/>
	<TextInput
		bind:value={confirmPassword}
		type="password"
		name="confirm_password"
		label="Confirm Password"
		placeholder="Confirm Password"
	/>

	<div class="flex justify-end">
		<SmallButton type="submit" label="Submit" />
	</div>
</form>
