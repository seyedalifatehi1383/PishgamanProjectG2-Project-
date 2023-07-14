<template>
    <div class="homepage-container">
        <div class="banners">
            <div class="ghest-banner-container">
                <img src="../../images/ghest.png" alt="ghest" title="ghest">
            </div>

            <div class="boors-banner-container">
                <img src="../../images/noroz1402boorsbaner.png" alt="boors banner norouz 1402" title="boors">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
    .banners {
        display: flex;
        flex-direction: row;
        justify-content: center;
        column-gap: 40px;
    }

    .ghest-banner-container img {
        border-radius: 10px;
        /* min-width: 100px; */
        max-width: 2000px;
    }   

    .boors-banner-container img {
        border-radius: 10px;
        /* min-width: 100px; */
        max-width: 2000px;
    }
</style>