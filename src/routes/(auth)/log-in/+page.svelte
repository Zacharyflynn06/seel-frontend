<script lang="ts">
	import { enhance } from '$app/forms';
	import { anchorTagClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';

	export let form: { error: string; success: boolean } | undefined;

	let loading = false;
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

	{#if form?.error}
		<p class="text-red-500">{form.error}</p>
	{/if}
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
	<div class="">
		<a class="{anchorTagClasses} text-xs" href="/forgot-password">Forgot password?</a>
		<a class="{anchorTagClasses} text-xs" href="/forgot-password">Already have an account?</a>
	</div>

	<div class="flex justify-end">
		<SmallButton type="submit" {loading} label="Log in" />
	</div>
</form>
