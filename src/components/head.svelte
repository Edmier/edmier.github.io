<script lang="ts">
	import { page } from '$app/stores';
	import { SITE_META as info } from '$content/siteInfo';
</script>

<svelte:head>
	<title>{info.title}</title>
    <meta name="description" content="{info.descripton}">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content={info['og:site_name']}>
    <meta property="og:title" content={info.title}>
    <meta property="og:description" content="{info.descripton}">
	{#if info.image}
    	<meta property="og:image" content="{$page.url.origin}{info.image}">
	{/if}
	<meta property="og:url" content={$page.url.toString()} />
</svelte:head>