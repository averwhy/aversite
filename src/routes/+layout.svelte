<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import SiteSidebar from "$lib/components/SiteSidebar.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher track={true} defaultMode="dark" />

<Sidebar.Provider>
	<SiteSidebar />
	<main class="flex-1 min-w-0">
		<Sidebar.Trigger />
		<div class="px-7">
			{@render children?.()}
		</div>
	</main>
</Sidebar.Provider>
