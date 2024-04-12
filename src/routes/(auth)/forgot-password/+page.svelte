<script lang="ts">
	import { enhance } from '$app/forms';
	import { secondaryTextClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	let email = '';
</script>

<form use:enhance action="?/forgotPassword" method="POST" class="space-y-2.5">
	<h1>Forgot password</h1>
	<p class="text-xs {secondaryTextClasses}">
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
