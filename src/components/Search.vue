<template>
      <input type="text" placeholder="serch" @keyup="search(searchStiring)" v-model="searchStiring">
      <div v-if="search(searchStiring).length!==ProductStore.products.length" class="product">
    <div v-for="pro in search(searchStiring)" >
      <p> {{ pro.title}}</p>
       <p> {{ pro.price }}</p>
       <p> {{ pro.details }}</p>
       <p> <router-link :to="{name:'ProductDetail',params:{id:pro.id}}">خرید</router-link> </p>
    </div>
  </div>

</template>
<script setup lang="ts">
import {ref} from 'vue'
import{useProductStore} from '../stores/product'
interface Product{
  title:string
  id:string
  details:string
  price:string
  img:string
}
const searchStiring=ref('')
 const ProductStore = useProductStore();
 let count=0;
  function search(value:string){ 
return ProductStore.products.filter(item=>item.title.includes(value))
 
}

</script>
<style>
input{
  margin-left: 50px;
  margin-top: 20px;
  padding: 10px 10px;
  border-color: rgb(rgb(187, 167, 206),);
  border-radius: 5px;
}
.product{
  background-color: aqua;
  width: 400px;
  height: 200px;
}
.product p{
    padding: 5 px;
}
</style>