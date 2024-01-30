<script lang="ts">
	import "../app.pcss";
	import { ModeWatcher } from "mode-watcher";

	import Head from '$comp/head.svelte';
	import Nav from "$comp/header/nav.svelte";
</script>

<Head />

<ModeWatcher />

<div class="flex flex-col min-h-screen">
	<Nav />

	<slot/>
</div>