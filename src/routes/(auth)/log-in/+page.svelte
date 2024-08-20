<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { anchorTagClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import toast from 'svelte-french-toast';
	import type { ActionData } from './$types';
	import { page } from '$app/stores';

	export let form: ActionData;

	let loading = false;

	$: if (form?.success) {
		toast.success('Logged in successfully', { position: 'top-center' });
		goto('/dashboard');
	}

	$: if (form?.error) {
		toast.error('Invalid email or password', { position: 'top-center' });
	}
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			loading = false;
			update();
		};
	}}
	action="?/login"
	method="POST"
	class="space-y-2.5"
>
	<h1>Log in</h1>
	<label for="email-address" class="sr-only">Email </label>

	<TextInput
		required
		type="email"
		name="email-address"
		label="Email Address"
		placeholder="john.doe@example.com"
	/>
	<label for="password" class="sr-only">Password</label>

	<TextInput
		required
		type="password"
		name="password"
		minlength={6}
		label="Password"
		placeholder=" minimum 6 characters"
	/>
	<div class="flex w-full justify-between">
		<a class="{anchorTagClasses} text-xs" href="/forgot-password">Forgot password?</a>
		<a class="{anchorTagClasses} text-xs" href="/sign-up">Need an account?</a>
	</div>

	<div class="flex justify-center">
		<SmallButton type="submit" {loading} label="Log in" />
	</div>
</form>
