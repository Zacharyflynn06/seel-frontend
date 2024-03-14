<script lang="ts">
	import { animatedTouchClasses, textInputClasses } from '$lib/classes';
	import Modal from '$lib/components/Modal.svelte';
	import SeelIcon from '$lib/components/icons/SeelIcon.svelte';
	import { fade } from 'svelte/transition';

	let isLogInModalOpen = true;
</script>

<div class="gradient-animation fixed inset-0 flex items-center justify-center" transition:fade>
	{#if isLogInModalOpen}
		<Modal>
			<div class="flex w-full items-center justify-center">
				<SeelIcon className="h-[10rem] w-[10rem] text-purple" />
			</div>

			<h1 class="text-2xl font-bold">Log in</h1>

			<form class="mt-4 space-y-4" action="/login" method="POST">
				<label class="block">
					<span class="text-gray-700 dark:text-gray-200">Email address</span>
					<input
						type="email"
						name="email"
						placeholder="john.doe@example.com"
						class={textInputClasses}
					/>
				</label>
				<label class="block">
					<span class="text-gray-700 dark:text-gray-200">Password</span>
					<input
						type="password"
						name="password"
						placeholder="Enter your password"
						class={textInputClasses}
					/>
				</label>
				<div class="flex justify-end">
					<button
						type="submit"
						class="rounded-md bg-pink px-4 py-2 text-white focus:outline-none {animatedTouchClasses}"
						>Log in</button
					>
				</div>
			</form>
		</Modal>
	{/if}
</div>
