<template>
    <div class="homepage-container">
        <Banners />
        <br />
        <BazargamDiscount />
        <br />
        <Groups />
    </div>
</template>

<script setup lang="ts">
    import Banners from './Banners.vue';
    import BazargamDiscount from './BazargamDiscount/BazargamDiscount.vue';
    import Groups from './Groups.vue';

    // function seraj(arg1?:string, arg2?:string): void{
    //     console.log(arg1, arg2)
    // }
    // seraj("jhghj");
</script>

<style scoped>
    /* .heading {
        text-align: center;
    } */

    
</style>