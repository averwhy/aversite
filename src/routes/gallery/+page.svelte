<script lang="ts">
    import LightGallery from "$lib/components/LightGallery.svelte";

    function assetLink(asset: string) {
        return `https://cdn.averwhy.net/${encodeURIComponent(`${asset}`)}`;
    }

    const images = [
        { url: assetLink("AVP_9110.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9112.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9121.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9129.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9135.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9137.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9141.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9148.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9154.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9156.JPG"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9158.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },
        { url: assetLink("AVP_9166.jpeg"), caption: "5/18/26, Smugglers Notch, VT" },

        { url: assetLink("AVP_5773.JPG"), caption: "South Station Tower, Boston, MA" },
        { url: assetLink("AVP_5780.JPG"), caption: "South Station Tracks, Boston, MA" },
        { url: assetLink("AVP_5794.JPG"), caption: "Old gen Amtrak Acela #2014 entering Boston South Station" },
        { url: assetLink("AVP_8070.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_8070.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_8082.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_8090.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_8091.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_8102.jpeg"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_4819.JPG"), caption: "" },
        { url: assetLink("AVP_4792.JPG"), caption: "" },
        { url: assetLink("AVP_2545.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2548.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2551.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2561.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2573.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2577.JPG"), caption: "SNHU, Hooksett, NH during a geomagnetic storm" },
        { url: assetLink("AVP_2617.JPG"), caption: "Mont Vernon, NH" },
        { url: assetLink("AVP_1894.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
        { url: assetLink("AVP_2180.JPG"), caption: "Long exposure of a fiber optic wand" },
        { url: assetLink("AVP_2190.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
        { url: assetLink("AVP_2191.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
        { url: assetLink("AVP_2192.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
        { url: assetLink("AVP_2201.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
        { url: assetLink("AVP_2206.JPG"), caption: "Long exposure of a fiber optic wand over a face" },
    ];
</script>

<p class="text-sm text-muted-foreground p-10">
    unedited photos taken by me, © avery b 2024-2026.
</p>
<LightGallery
    {images}
    class="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 pb-10 sm:grid-cols-2 lg:grid-cols-3"
/>
