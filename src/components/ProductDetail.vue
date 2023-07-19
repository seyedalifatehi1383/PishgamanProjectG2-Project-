<template>
<div v-if="product" class="pro">
  <h1>{{ product.title }}</h1>
  <h2>{{ product.price }}</h2>
  <h2>{{ product.details }}</h2>
  <img :src="product.img"> 
</div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
  const product=ref({})
    onMounted( ()=>
      fetch('http://localhost:3000/products/'+id)
     .then(res =>res.json())
     .then(data =>product.value=data)
     .catch(err=>console.log(err))
  )

</script>

<style>
.pro{
  text-align: center;
  background-color: rgb(31, 177, 104);
  height: 100%;
  width: 100%;
}

</style>