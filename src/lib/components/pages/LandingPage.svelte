<!-- <script lang="ts">
	import { flexCenter, svgTouchClasses } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import Typewriter from 'svelte-typewriter';
	import SeelIcon from '../icons/SeelIcon.svelte';
	import { AskSeelStore } from '$houdini';
	import TextInput from '../formComponents/TextInput.svelte';

	let loading = false;
	let userInput = '';

	$: console.log({ userInput });

	let answer: string | undefined = '';

	async function handleSubmit(event: SubmitEvent) {
		// console.log({ event });
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
			// console.log({ error });
		}
	}
</script>

<main class="{flexCenter} mt-[60px] h-[calc(100vh-60px)] w-full flex-col">
	<form
		on:submit|preventDefault={handleSubmit}
		class=" flex w-full flex-col justify-center space-y-5 p-5 text-center md:w-[500px] md:max-w-[500px]"
	>
		<div class="relative w-full">
			<SeelIcon className="h-[15rem] w-[15rem] text-off-white drop-shadow-xl" />
			<TextInput bind:value={userInput} placeholder="Ask me about Seel..." name="user_input">
				<button
					type="submit"
					disabled={!userInput || loading}
					class="group absolute right-2.5 top-0 z-10 h-full bg-transparent pl-1 {userInput &&
					userInput.length > 4
						? 'text-purple dark:text-pink'
						: 'text-grey-08 dark:text-white/50'}"
				>
					{#if !loading}
						<ArrowIcon className="h-6 w-6 " />
					{:else}
						<Spinner className="h-6 w-6 text-light-purple" />
					{/if}
				</button>
			</TextInput>
		</div>
	</form>
	<div class="mx-3.5 min-h-20 text-white">
		{#if answer}
			<Typewriter>
				{answer}
			</Typewriter>
		{/if}
	</div>
</main> -->
