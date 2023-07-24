<template>
<div v-if="product" class="pro">
  <h1>{{ product.title }}</h1>
  <h2>{{ product.price }}</h2>
  <h2>{{ product.details }}</h2>
  <img :src="product.img"> 
  <router-link to="/buy" class="links"  id="buy" @click="add">افزودن به سبد خرید</router-link>
</div>
</template>

<script setup lang="ts">
 import{useProductStore} from '../stores/product'
 const ProductStore = useProductStore();
 const props=defineProps<{id:string}>()
 const product=ProductStore.found(props.id)
 function add(){
  ProductStore.buy();
 }
</script>

<style scoped>
.pro{
  text-align: center;
  background-color: rgb(31, 177, 104);
  height: 100%;
  width: 100%;
}

</style>