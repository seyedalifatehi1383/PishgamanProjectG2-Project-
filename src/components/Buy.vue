<template>
  <div  v-for="product in ProductStore.buying" :key="product.id" class="products">
    <h1>{{product.title}}</h1>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.details }}</h3>
    <router-link to="/buy" class="links"  id="buy" @click="ProductStore.removed(product.id)">حذف از سبد خرید</router-link>
  </div>

</template> 

<script setup lang="ts">
import{useProductStore} from '../stores/product'
 const ProductStore = useProductStore();
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