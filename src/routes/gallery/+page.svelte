<script lang="ts">
    import LightGallery from "$lib/components/LightGallery.svelte";

    function assetLink(asset: string) {
        return `https://cdn.averwhy.net/${encodeURIComponent(`${asset}`)}`;
    }

    const images = [
        { url: assetLink("AVP_5773.JPG"), caption: "" },
        { url: assetLink("AVP_5780.JPG"), caption: "" },
        { url: assetLink("AVP_5794.JPG"), caption: "" },
        { url: assetLink("AVP_8070.JPG"), caption: "" },
        { url: assetLink("AVP_8070.JPG"), caption: "" },
        { url: assetLink("AVP_8082.JPG"), caption: "" },
        { url: assetLink("AVP_8090.JPG"), caption: "" },
        { url: assetLink("AVP_8091.JPG"), caption: "" },
        { url: assetLink("AVP_8102.JPG"), caption: "" },
        { url: assetLink("AVP_4819.JPG"), caption: "" },
        { url: assetLink("AVP_4792.JPG"), caption: "" },
        { url: assetLink("AVP_2545.JPG"), caption: "" },
        { url: assetLink("AVP_2548.JPG"), caption: "" },
        { url: assetLink("AVP_2551.JPG"), caption: "" },
        { url: assetLink("AVP_2561.JPG"), caption: "" },
        { url: assetLink("AVP_2573.JPG"), caption: "" },
        { url: assetLink("AVP_2577.JPG"), caption: "" },
        { url: assetLink("AVP_2617.JPG"), caption: "" },
        { url: assetLink("AVP_1894.JPG"), caption: "" },
        { url: assetLink("AVP_2180.JPG"), caption: "" },
        { url: assetLink("AVP_2190.JPG"), caption: "" },
        { url: assetLink("AVP_2191.JPG"), caption: "" },
        { url: assetLink("AVP_2192.JPG"), caption: "" },
        { url: assetLink("AVP_2201.JPG"), caption: "" },
        { url: assetLink("AVP_2206.JPG"), caption: "" },
    ];
</script>

<p class="text-sm text-muted-foreground p-10">
    unedited photos taken by me, © avery b 2024-2026.
</p>
<LightGallery {images} />
