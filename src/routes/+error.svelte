<script lang="ts">
	import { page } from "$app/stores";
	import { Button } from "$ui/button";
</script>

<main class="flex flex-col items-center max-w-5xl self-center mx-4 gap-16 my-32">
	<article class="flex flex-col gap-16 mb-8">
		<div class="flex flex-col items-center gap-4 self-center">
			<h1 class="text-5xl pb-1">Error {$page.status}</h1>
			<span class="text-lg">{$page.error?.message ?? 'Page Not Found'}</span>
		</div>

		<Button href="/" variant="secondary">
			Home
		</Button>
	</article>
</main>