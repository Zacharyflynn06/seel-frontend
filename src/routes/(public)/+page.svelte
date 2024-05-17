<script lang="ts">
	import { AskSeelStore } from '$houdini';
	import { flexCenter, padHeader } from '$lib/classes';
	import GradientBg from '$lib/components/GradientBg.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import SeelIcon from '$lib/components/icons/SeelIcon.svelte';
	import Typewriter from 'svelte-typewriter';

	let loading = false;
	let userInput = '';
	let answer: string | undefined = '';

	async function handleSubmit(event: SubmitEvent) {
		console.log({ event });
		loading = !loading;

		if (!userInput) {
			loading = false;
			return;
		}

		try {
			let store = new AskSeelStore();
			store.variables = true;
			await store.fetch({ variables: { question: userInput } }).then((response) => {
				loading = false;
				answer = response?.data?.ask;
			});
		} catch (error) {
			loading = false;
			console.log({ error });
		}
	}
</script>

<GradientBg />

<div class="flex flex-col {padHeader} w-full md:items-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex h-full flex-col justify-center space-y-5 p-5 text-center md:w-[500px]"
	>
		<div class="flex justify-center">
			<SeelIcon className="h-[15rem] w-[15rem] text-off-white drop-shadow-xl" />
		</div>
		<TextInput
			bind:value={userInput}
			bind:disabled={loading}
			placeholder="Ask me about Seel..."
			name="user_input"
		>
			<button
				type="submit"
				disabled={!userInput || loading}
				class=" {userInput && userInput.length > 4
					? 'text-purple dark:text-pink'
					: 'text-grey-08 dark:text-white/50'}"
			>
				{#if !loading}
					<ArrowIcon className="h-6 w-6 " />
				{:else}
					<Spinner className="h-6 w-6 " />
				{/if}
			</button>
		</TextInput>
		<div class="text-left md:max-w-[500px]">
			{#if answer}
				<Typewriter>
					{answer}
				</Typewriter>
			{/if}
		</div>
	</form>
</div>
