<script lang="ts">
	import SmallButton from '$lib/components/buttons/SmallButton.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	let email = '';
	let password = '';
</script>

<form class="space-y-2.5">
	<h1>Log in</h1>
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
	<a class="text-xs text-black/50 underline hover:text-pink" href="/forgot-password"
		>Forgot password?</a
	>

	<div class="flex justify-end">
		<SmallButton type="submit" label="Log in" />
	</div>
</form>
