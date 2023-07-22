<template>
  <div class="filter">
  <div  v-for="product in ProductStore.filtered(stringOne)" :key="product.id " class="products">
    <h1>{{product.title}}</h1>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.details }}</h3>
     <router-link :to="{name:'ProductDetail',params:{id:product.id}}">خرید</router-link> 
  </div>
  <!-- <div class="som"></div> -->
</div>
<div class="filter">
  <div  v-for="product in ProductStore.filtered(stringTwo)" :key="product.id " class="products">
    <h1>{{product.title}}</h1>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.details }}</h3>
     <router-link :to="{name:'ProductDetail',params:{id:product.id}}">خرید</router-link> 
  </div>
</div>
<div class="filter"> 
   <div  v-for="product in ProductStore.filtered(stringThree)" :key="product.id " class="products">
    <h1>{{product.title}}</h1>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.details }}</h3>
     <router-link :to="{name:'ProductDetail',params:{id:product.id}}">خرید</router-link> 
  </div>
</div>
</template> 

<script setup lang="ts">
import{useProductStore} from '../stores/product'
 const ProductStore = useProductStore();
  const stringOne="خوراکی";
     const stringTwo="سبزیجات";
     const stringThree="غیر خوراکی";


</script>

<style>
.products{
  background-color: rgb(196, 255, 228);
  display: inline-block;
  width: 200px;
  height: 200px;
  border:rgb(89, 216, 51)  5px solid;
  border-radius: 5px;
  margin: 30px;
  text-align: center;
  float: right;
}
.products a{
  text-decoration: none;
  background-color: green;
  color: #000;
  border-radius: 5px;
}

</style>