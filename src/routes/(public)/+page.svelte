<script lang="ts">
	import GradientBg from '$lib/components/GradientBg.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import TextInput from '$lib/components/formComponents/TextInput.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	import SeelIcon from '$lib/components/icons/SeelIcon.svelte';
	import Typewriter from 'svelte-typewriter';
	import { fade, slide } from 'svelte/transition';

	let loading = false;
	let userInput = '';
	let chatBotResponses: chatObject[] = [];
	interface chatObject {
		question: string;
		answer: string;
	}

	async function handleSubmit(event: SubmitEvent) {
		// console.log({ event });
		// loading = !loading;
		// if (!userInput) {
		// 	loading = false;
		// 	return;
		// }
		// try {
		// 	let store = new AskSeelStore();
		// 	store.variables = true;
		// 	await store.fetch({ variables: { question: userInput } }).then((response) => {
		// 		loading = false;
		// 		if (response?.data?.ask) {
		// 			chatBotResponses?.push({ question: userInput, answer: response.data.ask });
		// 			chatBotResponses = chatBotResponses;
		// 			userInput = '';
		// 		}
		// 		console.log({ chatBotResponses });
		// 	});
		// } catch (error) {
		// 	loading = false;
		// 	console.log({ error });
		// }
	}
</script>

<GradientBg />

<div class="flex w-full flex-col md:items-center">
	<form
		on:submit|preventDefault={handleSubmit}
		class="flex h-full flex-col justify-center space-y-5 p-5 text-center md:w-[750px]"
	>
		<!-- {#if chatBotResponses?.length === 0} -->
		<!-- content here -->
		<div out:fade class="flex justify-center">
			<SeelIcon className="h-[15rem] w-[15rem] text-off-white drop-shadow-xl" />
		</div>
		<!-- {/if} -->
		<div class=" space-y-2.5 text-off-white md:max-w-[750px]">
			{#each chatBotResponses as chatObject, i}
				<div transition:slide class="flex w-full flex-col items-end">
					<div class="flex w-fit max-w-[75%] items-end rounded-md bg-grey-08 p-2.5 shadow-04dp">
						{chatObject.question}
					</div>
				</div>
				<div transition:slide class="flex w-full flex-col">
					<div
						class="flex w-fit max-w-[75%] rounded-md bg-light-grey-08 p-2.5 text-left text-off-black shadow-04dp"
					>
						{#if i === chatBotResponses.length - 1}
							<Typewriter interval={20}>{chatObject.answer}</Typewriter>
						{:else}
							{chatObject.answer}
						{/if}
					</div>
				</div>
			{/each}
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
	</form>
</div>
