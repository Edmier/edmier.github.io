<script lang="ts">
	import { page } from '$app/stores';
	import cn from 'classnames';
	import ModeToggle from '$comp/header/mode-toggle.svelte';
	import { NAV_LINKS } from '$content/links';
	import { MAIN_INFO } from '$content/siteInfo';
</script>

<div class="mr-4 hidden md:flex justify-between w-full items-center">
	<a href="/" class="mr-6 flex items-center space-x-2">
		<a class="flex flex-row gap-2 items-center" href="/">
			<img src="/favicon.png" class="mr-3 h-6 sm:h-9" alt="Elite Logo" />
		</a>
		<span class="hidden sm:inline-block leading-none self-center whitespace-nowrap text-xl font-semibold px-1">
			{MAIN_INFO.name}
		</span>
	</a>
	<nav class="flex flex-row items-center gap-6 text-sm">
		{#each NAV_LINKS as link}
			<a
				href={link.url}
				class={cn(
					'transition-colors hover:text-foreground',
					$page.url.pathname.includes(link.url) ? 'text-foreground' : 'text-foreground/80'
				)}
			>
				{link.name}
			</a>
		{/each}
		<ModeToggle />
	</nav>
</div>
