<script lang="ts">
	import { MAIN_INFO as info } from "$content/siteInfo";
	import { Button } from "$ui/button";
	import { Mail } from "lucide-svelte";

	$: accounts = info.contact.accounts;
	$: mail = info.contact.messaging;
</script>

<div class="flex flex-wrap gap-4 items-center justify-center" id="contact">
	<div class="flex basis-4">
		<Button
			href="mailto:{mail.p1}@{mail.p2}.{mail.p3}"
			target="_blank"
			rel="noopener noreferrer"
			variant="secondary"
			class="flex flex-row items-center gap-2 px-2"
			size="lg"
		>
			<Mail class="h-10 py-1 mx-1" />
		</Button>
	</div>
	{#each accounts as account}
		<div class="flex">
			<Button
				href={account.url}
				target="_blank"
				rel="noopener noreferrer"
				variant="secondary"
				class="flex flex-row items-center gap-2 w-full px-5"
				size="lg"
			>
				{#if account.invert}
					<img
						src={account.icon}
						alt={account.name}
						class="h-10 py-1 dark:invert"
					/>
				{:else}
					<img
						src={account.icon}
						alt={account.name}
						class="h-10 py-1"
					/>
				{/if}
				<p class="font-semibold">{account.name}</p>
			</Button>
		</div>
	{/each}
</div>

