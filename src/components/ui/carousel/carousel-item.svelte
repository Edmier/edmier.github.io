<script lang="ts">
	import { cn } from "$lib/utils";
	import type { HTMLAttributes } from "svelte/elements";
	import { getEmblaContext } from "./context.js";

	type $$Props = HTMLAttributes<HTMLDivElement>;
	let className: string | undefined | null = undefined;
	export { className as class };

	const { orientation } = getEmblaContext("<Carousel.Item/>");
</script>

<div
	role="group"
	aria-roledescription="slide"
	class={cn(
		"flex-[0_0_auto] max-w-full min-w-0",
		$orientation === "horizontal" ? "pl-4" : "pt-4",
		className
	)}
	data-embla-slide=""
	{...$$restProps}
>
	<slot />
</div>
