<script lang="ts">
	import { anchorTagClasses, secondaryTextClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';

	let email = '';
	let password = '';
	let confirmPassword = '';

	const handleSubmit = (): void => {
		if (password !== confirmPassword) {
			console.log('passwords do not match');
			alert('Passwords do not match');
			return;
		}
		console.log('sign up');
	};
</script>

<form class="space-y-2.5" on:submit|preventDefault={handleSubmit}>
	<h1>Sign up</h1>
	<TextInput
		bind:value={email}
		type="email"
		name="email"
		label="Email Address"
		placeholder="john.doe@example.com"
	/>
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

	<a href="/log-in" class="{anchorTagClasses} text-xs">Already have an account?</a>
	<div class="flex justify-end">
		<SmallButton type="submit" label="Sign up" />
	</div>
</form>
