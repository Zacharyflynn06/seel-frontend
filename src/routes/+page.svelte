<script>
	import { animatedTouchClasses } from '$lib/classes';
	import Spinner from '$lib/components/Spinner.svelte';
	import ArrowIcon from '$lib/components/icons/ArrowIcon.svelte';
	let loading = false;

	function handleSubmit() {
		loading = !loading;
	}
</script>

<main
	class="gradient-animation grid h-[100dvh] w-full items-center justify-center overflow-hidden bg-gradient-to-bl from-pink to-purple"
>
	<form
		on:submit={handleSubmit}
		class="flex max-w-[500px] flex-col items-center justify-between space-y-5"
	>
		<div>
			<img
				alt="Seel logo"
				src="/images/SeelLogo.png"
				class="spinner-animate h-32 drop-shadow-2xl"
			/>

			<h1
				class="font-spartan text-7xl font-extrabold text-off-white drop-shadow-2xl dark:text-off-black"
			>
				Seel
			</h1>
		</div>
		<div
			class="focus: relative grid w-full items-center rounded-lg bg-off-white text-center drop-shadow-2xl"
		>
			<button
				type="submit"
				class="absolute right-1.5 z-10 h-full transform bg-transparent pl-1 text-off-black ease-in-out {animatedTouchClasses}"
			>
				{#if !loading}
					<ArrowIcon className="h-6 w-6" />
				{:else}
					<Spinner />
				{/if}
			</button>
			<input
				placeholder="Ask me about Seel..."
				type="text"
				class="focus-ring-0 mr-8 rounded-l-lg border-transparent bg-transparent px-3 py-1.5 ring-0"
			/>
		</div>
		<div class="text-off-white drop-shadow-2xl">this is where the response will animate in</div>
	</form>
</main>

<style>
	.gradient-animation {
		background: linear-gradient(45deg, #d0577b, #4b4a78);
		background-size: 200% 200%;
		animation: gradient 15s ease infinite;
		height: 100dvh;
	}
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		50% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
</style>
