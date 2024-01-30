<script lang="ts">
	import Project from "$comp/project.svelte";
	import { PROJECTS } from "$content/projects";
</script>

<section class="flex flex-col gap-8">
	{#each PROJECTS as project}
		<Project {project} />
	{/each}
</section>