<script lang="ts">
	import * as Sheet from '$ui/sheet';
	import { Button } from '$ui/button';
	import MobileLink from '$comp/header/mobile-link.svelte';
	import { Menu } from 'lucide-svelte';
	import ModeToggle from '$comp/header/mode-toggle.svelte';
	import { NAV_LINKS } from '$content/links';
	import { MAIN_INFO } from '$content/siteInfo';

	let open = false;
</script>

<Sheet.Root bind:open>
	<Sheet.Trigger asChild let:builder>
		<div class="md:hidden">
			<ModeToggle />
		</div>

		<Button
			builders={[builder]}
			variant="ghost"
			class="mx-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
		>
			<Menu class="w-5 h-5" />
			<span class="sr-only">Toggle Menu</span>
		</Button>
	</Sheet.Trigger>
	<Sheet.Content side="right" class="pr-0">
		<MobileLink href="/" class="flex items-center" bind:open>
			<a class="flex flex-row gap-2 items-center" href="/">
				<img src="/favicon.png" class="mr-3 h-4 w-4" alt="Elite Logo" />
			</a>
			<span class="font-semibold">{MAIN_INFO.name}</span>
		</MobileLink>
		<div class="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 overflow-auto">
			<div class="flex flex-col space-y-3">
				{#each NAV_LINKS as navItem, index (navItem + index.toString())}
					{#if navItem.url}
						<MobileLink href={navItem.url} bind:open class="text-foreground font-semibold">
							{navItem.name}
						</MobileLink>
					{/if}

					{#if navItem.sub}
						<div class="flex flex-col space-y-3 pl-4">
							{#each navItem.sub as child, index (child + index.toString())}
								<MobileLink href={child.url} bind:open class="text-foreground">
									<span class="text-sm">{child.name}</span>
								</MobileLink>
							{/each}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	</Sheet.Content>
</Sheet.Root>
