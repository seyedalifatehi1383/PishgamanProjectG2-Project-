<script setup lang="ts">
import Product from '../components/Product.vue'
import Call from '../components/Call.vue'
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main> 
     <div class="image-back">
      <img style="width: 1100px;" src="../../public/baz.jpeg" alt="">
      <img style="width: 610px;" src="../../public/ghest.png" alt="">
      
    </div> 
  </main>
   
  <Product/>
</template>


<style>

.image-back img{
  border-radius: 10px;
  margin: 10px;
  
  /* position: relative;
  left: 69%; */
}

.image-back{
  justify-content: center;
  text-align: center;
}
</style>


