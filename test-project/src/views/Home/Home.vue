<template>
    <div class="homepage-container">
        <Banners />
        
        <br />
        
        <!-- <div class="products-container" style="display: flex; justify-content: center;">
            <hr style="width: 40%; height: 40%;  "> -->
            <!-- <h2 class="heading">  </h2>     -->

        <!-- </div>  -->

        <BazargamDiscount />
    </div>
</template>

<script setup lang="ts">
    import Banners from './Banners.vue';
    import BazargamDiscount from './BazargamDiscount/BazargamDiscount.vue';

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