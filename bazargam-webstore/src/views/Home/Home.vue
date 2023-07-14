<template>
    <div class="homepage-container">
        <Banners />
        
        <br />
        
        <div class="products-container" style="display: flex; justify-content: center;">
            <h2 class="heading"> محصولات تنظیم بازار </h2>    
        </div>

    </div>
</template>

<script setup lang="ts">
    import Banners from './Banners.vue';
</script>

<style scoped>
    .heading {
        text-align: center;
    }
</style>