<script lang="ts">
	import DarkModeToggleButton from './buttons/DarkModeToggleButton.svelte';
	import SmallButton from './buttons/SmallButton.svelte';
</script>

<header
	class="fixed inset-0 h-16 w-full bg-off-white transition-all duration-200 ease-linear dark:bg-off-black"
>
	<div class="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-5">
		<a href="/" class="font-spartan text-4xl font-bold text-purple dark:text-pink">seel</a>
		<div>
			<!-- intentionally empty -->
		</div>
		<div class="flex space-x-5">
			<DarkModeToggleButton />
			<a href="/log-in" class="hidden md:block">
				<SmallButton>Log in</SmallButton>
			</a>
		</div>
	</div>
</header>
