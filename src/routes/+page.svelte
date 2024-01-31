<script lang="ts">
	import Contacts from "$comp/contacts.svelte";
	import Projects from "$comp/projects.svelte";
	import { MAIN_INFO as info } from "$content/siteInfo";
</script>

<main class="flex flex-col items-center max-w-5xl self-center mx-4 gap-16 my-32">
	<article class="flex flex-col gap-8 mb-8">
		<div class="flex flex-col items-center self-center">
			<h1 class="text-5xl pb-1">{info.name}</h1>
			<span class="text-lg">{info.title}</span>
		</div>

		<p class="max-w-2xl mt-4">{info.description}</p>

		<Contacts />
	</article>

	<article class="flex flex-col gap-8 items-center" id="projects">
		<h2 class="text-3xl">Projects</h2>

		<Projects />
	</article>

	<p class="font-semibold my-16">Under Construction - More To Come</p>
</main>