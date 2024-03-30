<script lang="ts">
	import { flexCenter } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Typewriter from 'svelte-typewriter';
	import SeelIcon from '../icons/SeelIcon.svelte';

	let loading = false;
	let userInput = '';

	let answer: string | undefined = '';

	async function handleSubmit() {
		loading = !loading;

		let apiResponse: undefined | { answer: string } = undefined;

		if (!userInput) {
			loading = false;
			return;
		}

		try {
			let request = new Request(`https://fanz3qdbx3.execute-api.us-east-1.amazonaws.com/api/ask`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					question: userInput
				})
			});
			let response = await fetch(request);
			if (!response.ok) {
				loading = false;
				throw new Error(response.statusText);
			} else {
				apiResponse = await response.json();
				answer = apiResponse?.answer;
				loading = false;
			}
		} catch (error) {
			console.log(error);
		}
	}
</script>

<main class="gradient-animation grid h-[100dvh] w-screen items-center md:justify-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="{flexCenter} flex-col space-y-5 p-5 md:w-[500px] md:max-w-[500px]"
	>
		<div>
			<SeelIcon className="h-[15rem] w-[15rem] text-off-white drop-shadow-xl" />
		</div>
		<div
			class="relative grid w-full items-center rounded-lg border border-transparent bg-off-white text-center shadow-08dp focus-within:border-light-purple focus:ring-purple dark:bg-off-black"
		>
			<button
				type="submit"
				class="absolute right-1.5 z-10 h-full transform bg-transparent pl-1 group-hover:border-purple"
			>
				{#if !loading}
					<ArrowIcon className="h-6 w-6 " />
				{:else}
					<Spinner className="h-6 w-6 text-light-purple" />
				{/if}
			</button>
			<input
				placeholder="Ask me about Seel..."
				bind:value={userInput}
				type="text"
				class="group mr-8 rounded-l-lg border-transparent bg-transparent px-3 py-1.5 ring-transparent focus:border-transparent focus:ring-transparent"
			/>
		</div>
		<div class="mx-3.5 min-h-20 text-white">
			{#if answer}
				<Typewriter>
					{answer}
				</Typewriter>
			{/if}
		</div>
	</form>
</main>
