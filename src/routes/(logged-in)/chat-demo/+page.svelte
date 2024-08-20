<!-- THIS IS A DEMO PAGE FOR NOW -->
<!-- <Card heading="Upload and Chat Demo">
	<FileInput bind:fileIsReady />
	{#if fileIsReady}
		<form
			on:submit|preventDefault={handleSubmit}
			class="flex h-full flex-col justify-center space-y-5 text-center"
		>
			<TextInput
				bind:value={userInput}
				bind:disabled={loading}
				placeholder="Ask your collection..."
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
			<div class="w-full text-left">
				{#if answer}
					<Typewriter>
						{answer}
					</Typewriter>
				{/if}
			</div>
		</form>
	{/if}
</Card> -->
