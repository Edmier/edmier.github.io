<script lang="ts">
	import type { Project } from "$content/projects";

	export let project: Project;
</script>

<article class="flex flex-col gap-4">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-semibold">{project.name}</h2>
		<p class="text-sm text-gray-500">{project.description}</p>
	</div>

	<div class="flex flex-col gap-2">
		{#each project.links as link}
			<a
				href={link.url}
				target="_blank"
				rel="noopener noreferrer"
				class="text-sm text-blue-500 hover:underline"
			>
				{link.name}
			</a>
		{/each}
	</div>
</article>