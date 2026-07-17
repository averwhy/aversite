<script lang="ts">
    import { Skeleton } from "$lib/components/ui/skeleton/index.js";

    let { src, alt, width, height, class: className = "" } = $props();

    let loaded = $state(false);
    let failed = $state(false);
</script>

<div
    class={`relative overflow-hidden ${className}`}
    style={`width: ${width}px; height: ${height}px;`}
>
    {#if !loaded || failed}
        <Skeleton class="absolute inset-0 h-full w-full rounded-md" />
    {/if}

    {#if !failed}
        <img
            {src}
            {alt}
            {width}
            {height}
            loading="lazy"
            class={`block h-full w-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
            onload={() => (loaded = true)}
            onerror={() => (failed = true)}
        />
    {/if}
</div>
