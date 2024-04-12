<script lang="ts">
	import { enhance } from '$app/forms';
	import { anchorTagClasses } from '$lib/classes';
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';

	export let form;

	let loading = false;
	let isVerificationCodeVisible = false;

	$: if (form?.success) {
		isVerificationCodeVisible = true;
	}
</script>

{#if !isVerificationCodeVisible}
	<form
		use:enhance={() => {
			loading = true;
			return async ({ update }) => {
				loading = false;
				update();
			};
		}}
		class="space-y-2.5"
		action="?/signUp"
		method="POST"
	>
		<h1>Sign up</h1>
		<TextInput
			type="email"
			name="email-address"
			label="Email Address"
			placeholder="john.doe@example.com"
			required
		/>
		<TextInput type="password" name="password" label="Password" placeholder="Password" required />

		<TextInput
			type="password"
			name="confirm-password"
			label="Confirm Password"
			placeholder="Confirm Password"
		/>

		<a href="/log-in" class="{anchorTagClasses} text-xs">Already have an account?</a>

		{#if form?.error}
			<p class="text-red-500">{form.error}</p>
		{/if}

		<div class="flex justify-end">
			<SmallButton type="submit" {loading} label="Sign up" />
		</div>
	</form>
{:else}
	<form use:enhance class="space-y-2.5" action="?/verifyEmail" method="POST">
		<h1>Enter Verification Code</h1>
		<input name="email-address" value={form?.email} class="hidden" />
		<TextInput type="text" name="code" label="Enter Verification Code" placeholder="" required />

		<a href="/log-in" class="{anchorTagClasses} text-xs">Already have an account?</a>

		{#if form?.error}
			<p class="text-red-500">{form.error}</p>
		{/if}

		<div class="flex justify-end">
			<SmallButton type="submit" label="Verify" />
		</div>
	</form>
{/if}
