<script lang="ts">
	import { flexCenter, svgTouchClasses } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Typewriter from 'svelte-typewriter';
	import SeelIcon from '../icons/SeelIcon.svelte';
	import { AskSeelStore } from '$houdini';

	let loading = false;
	let userInput = '';

	let answer: string | undefined = '';

	async function handleSubmit() {
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
				class="{svgTouchClasses} absolute right-2.5 z-10 h-full bg-transparent pl-1 text-purple dark:text-pink"
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
				class="group mr-8 rounded-l-lg border-transparent bg-transparent px-3 py-1.5 ring-transparent focus:border-transparent focus:ring-transparent dark:text-white dark:placeholder:text-off-white"
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
