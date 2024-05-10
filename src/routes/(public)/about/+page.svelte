<script lang="ts">
	import { flexCenter } from '$lib/classes';
	import Card from '$lib/components/Card.svelte';
	import LandingPageHeader from '$lib/components/LandingPageHeader.svelte';
</script>

<LandingPageHeader />

<div class="gradient-animation h-screen w-full pt-[64px] md:pt-[72px]">
	<div class="h-full w-full {flexCenter}">
		<Card className="max-w-[95%] md:max-w-[750px]  overflow-y-scroll" headingIsCentered>
			<h1>About Seel</h1>
			<p class="dark:text-off-white">
				Founded in 2024, Seel is an AI-powered platform designed to streamline private market deal
				execution. Our mission is to simplify and enhance the investment process through automation
				and data-driven insights. Our Vision
			</p>
			<br />
			<h1>Our Vision</h1>
			<p>
				Seel aims to revolutionize the private equity and venture capital space by providing an
				end-to-end solution for deal execution. Leveraging AI and machine learning, we streamline
				tasks like deal qualification, due diligence, and investment memo creation.
			</p>
			<br />
			<h1>What We Offer</h1>
			<ul class="list-disc">
				Intelligent Platform:
				<li class="ml-5">
					Our AI-driven platform automates laborious tasks, saving time and enabling precise
					decision-making.
				</li>
				<br />
				Comprehensive Services:
				<li class="ml-5">
					From deal submission to investment memo generation, Seel offers a seamless experience
					tailored to the needs of private market firms.
				</li>
				<br />
				Built by an Expert Team:
				<li class="ml-5">
					Comprising AI specialists, software developers, and industry professionals, we bring our
					deep expertise to enhance the deal execution processes.
				</li>
			</ul>
		</Card>
	</div>
</div>
