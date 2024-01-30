<script lang="ts">
	import type { Project } from "$content/projects";
	import Autoplay from 'embla-carousel-autoplay';
	import * as Carousel from "$ui/carousel";
	import * as Card from "$ui/card";

	export let project: Project;
</script>

<article class="flex flex-col md:flex-row items-center gap-16">
	<div class="flex flex-1">
		<Carousel.Root plugins={[ Autoplay({ delay: 5000 }) ]} opts={{ align: 'start', loop: true }}>
			<Carousel.Previous />
			<Carousel.Content>
				{#each project.slideshow as image}
					<Carousel.Item>
						<Card.Root>
							<Card.Content class="px-0">
								<img
									src={image.image}
									alt={project.name}
									class="object-cover rounded-lg shadow-lg"
								/>
								<p class="px-2">{image.description}</p>
							</Card.Content>
						</Card.Root>
						
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Next />
		</Carousel.Root>
	</div>
	<div class="flex flex-1 flex-col gap-4">
		<div class="flex flex-col gap-2">
			<h2 class="text-2xl font-semibold">{project.name}</h2>
			<p class="text-sm text-gray-500">{project.description}</p>
		</div>

		<section class="flex flex-col gap-2">
			{#each project.sections as section}
				<div class="flex flex-col gap-1">
					<h3 class="text-lg font-semibold">{section.name}</h3>
					{#if section.description}
						<p class="text-sm text-gray-500">{section.description}</p>
					{/if}
					{#if section.list}
						<div class="flex flex-wrap gap-2">
							{#each section.list as item}
								<p class="text-sm text-gray-500">{item}</p>
							{/each}
						</div>
					{/if}
				</div>
			{/each}
		</section>

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
	</div>
</article>