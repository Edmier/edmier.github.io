<script lang="ts">
	import { Check, Moon, Sun } from 'lucide-svelte/icons';
	import { Button } from '$ui/button';
	import * as DropdownMenu from '$ui/dropdown-menu';
	import { resetMode, setMode, mode } from 'mode-watcher';

	const modes = ['light', 'dark'] as const;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button variant="ghost" class="w-9 px-0" {...props}>
				<Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-roate-90 dark:scale-0" />
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		{#each modes as option}
			<DropdownMenu.Item on:click={() => setMode(option)}>
				<span class="capitalize">{option}</span>
				{#if $mode === option}
					<Check class="w-4 h-4 ml-2" />
				{/if}
			</DropdownMenu.Item>
		{/each}
		<DropdownMenu.Item on:click={() => resetMode()}>
			<span class="text-destructive">Use System Theme</span>
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
