<script lang="ts">
	import type { Project } from "$content/projects";
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from "$ui/carousel";

	export let project: Project;
</script>

<article class="flex flex-col items-center gap-8">
	<div class="flex flex-col gap-2 self-start">
		<h2 class="text-2xl font-semibold">{project.name}</h2>
		<p class="text-sm text-gray-500 max-w-3xl">{project.description}</p>
		{#if project.links && project.links.length > 0}
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
		{/if}
	</div>

	<div class="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-8">
		<div class="flex flex-1 flex-col gap-4">
			{#if project.slideshow && project.slideshow.length > 0}
				<div class="px-10 max-w-full md:max-w-lg md:-mx-8">
					<Carousel.Root plugins={[ Autoplay({ delay: 5000 }) ]} opts={{ align: 'start', loop: true }}>
						<Carousel.Previous class="hidden sm:inline-flex" />
						<Carousel.Next class="hidden sm:inline-flex" />

						<Carousel.Content>
							{#each project.slideshow as image}
								<Carousel.Item>
									<div class="flex flex-col gap-1 items-center max-w-full">
										<img
											src={image.image}
											alt={project.name}
											class="rounded-lg shadow-lg min-w-0 w-full relative"
										/>
										<p class="px-2">{image.description}</p>
									</div>
								</Carousel.Item>
							{/each}
						</Carousel.Content>
					</Carousel.Root>
				</div>
			{/if}
			{#if project.video}
				<div class="flex flex-col gap-1 items-center min-w-lg w-full">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video controls class="rounded-md mx-2">
						<source src="{project.video.url}" type="video/{project.video.url?.split('.')?.at(-1) ?? 'mp4'}">
					</video>
					<p class="px-2">{project.video.name}</p>
				</div>
			{/if}
		</div>
		<div class="flex flex-1 flex-col gap-4">
			<section class="flex flex-col gap-2">
				{#each project.sections as section}
					<div class="flex flex-col gap-1">
						<h3 class="text-lg font-semibold">{section.name}</h3>
						{#if section.description}
							<p class="text-sm text-gray-500">{section.description}</p>
						{/if}
						{#if section.list}
							<div class="flex flex-wrap gap-4 mt-2">
								{#each section.list as item}
									<p class="text-sm text-gray-500">{item}</p>
								{/each}
							</div>
						{/if}
						{#if section.link}
							<a class="text-sm text-blue-500 hover:underline" href="{section.link.url}">{section.link.name}</a>
						{/if}
					</div>
				{/each}
			</section>
		</div>
	</div>
</article>