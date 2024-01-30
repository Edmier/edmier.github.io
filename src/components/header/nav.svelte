<script lang="ts">
	import { navigating } from '$app/stores';
	import { slide } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	import MainNav from '$comp/header/main-nav.svelte';
	import MobileNav from '$comp/header/mobile-nav.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-14 max-w-screen-2xl items-center justify-end md:justify-start">
		<MainNav />
		<MobileNav />
	</div>
</header>

{#if $navigating}
	<div class="relative">
		<div
			class="w-full h-1 bg-green-300 absolute"
			transition:slide={{ delay: 100, duration: 500, easing: quadInOut }}
		/>
	</div>
{/if}
