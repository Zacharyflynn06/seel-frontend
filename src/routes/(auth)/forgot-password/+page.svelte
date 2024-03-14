<script lang="ts">
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	let email = '';
</script>

<form class="space-y-4">
	<h1>Create new password</h1>
	<p class="text-xs text-black/50">
		Please enter your email address below and we will send you a link to reset your password.
	</p>
	<TextInput
		bind:value={email}
		type="email"
		name="email"
		label="Email Address"
		placeholder="john.doe@example.com"
	/>

	<div class="flex justify-end">
		<SmallButton type="submit" label="Submit" />
	</div>
</form>
