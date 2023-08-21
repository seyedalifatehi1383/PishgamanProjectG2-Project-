<template>
     
        <!-- <router-link class="product" v-if="product.row==='vv'"  :to="{name : 'productpage' , params:{id:product.id}}">
         <img style="width: 256px;" :src="product.src" alt="">
    <h3 style="color: blue;">{{ product.title }}</h3>
    <h4 style="color: aqua;">{{ product.weight }}</h4>
    <h4 style="color: brown;">{{ product.price }}</h4>
    <button style="background-color: chartreuse; border-radius: 5px;height: 30px;  "> افزودن به سبد خرید</button>
     </div> --> 
  <div class="back" >
    <div v-for="product in ProductsStore.products" :key="product.id">
    <div class="product" v-if="product.gg === 'first'"> 
      <img :src="product.src" alt="">
    <h3>{{ product.title }}</h3>
    <h4>{{ product.weight }}</h4>
    <h4 style="color: rgb(229, 19, 19);">{{ product.price }}</h4>
    <button style="background-color: rgb(251, 255, 14);">افزودن به سبد خرید</button>
  </div>
  </div>
  </div>
 
  

  
  <div class="back" >
      <div class="product" v-for="product in ProductsStore.products" :key="product.id">
        <div class="product" v-if="product.gg === 'secound'">
      <img :src="product.src" alt="">
    <h3>{{ product.title }}</h3>
    <h4>{{ product.weight }}</h4>
    <h4 style="color: rgb(229, 19, 19);">{{ product.price }}</h4>
    <button style="background-color: rgb(251, 255, 14);">افزودن به سبد خرید</button>
  </div>
  </div>
  </div>
  <div v-if="ProductsStore.object.length<1">loading ....</div>
    <div v-else class="back">
      <div v-for="product in ProductsStore.object" :key="product.id" style="border: 2px solid black; margin: 10px; border-radius: 10px; padding: 10px;">
        <router-link  :to="{name : 'productpage' , params : {id : product.id}}">
          <img style="width: 256px;" :src="product.image" alt="">
        <h1> title: {{ product.title }}</h1>
        <h2>Price  : {{ product.price }}</h2>

        </router-link>
      </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { productsStore } from '../../stores/product'
const ProductsStore = productsStore()
onMounted(() => {
 ProductsStore.readp()
})
</script>

<!-- <script lang="ts">

export default {
  data() {
    return{
      fruits :[
        {img :"../../public/moz.jpg",name : 'موز' ,weight : '1کیلوگرم±100گرم' , price : 756000 },
        {img :"../../public/holi.jpg",name : 'هلو انجیری' ,weight : '1کیلوگرم±50گرم' , price : 580000},
        {img :"../../public/gol.jpg",name : 'گلابی' ,weight : '1کیلوگرم±30گرم' , price :850000},
        {img :"../../public/go.jpg",name : ' گوجه',weight : '1کیلوگرم±100گرم' , price : 91000 },
        {img :"../../public/sib.jpg",name : 'سیب زمینی' ,weight : '1کیلوگرم±100گرم' , price : 149000 },
        
      ]
   
    
    }
  }
}
</script> -->



<style>
.back{
  /* display: flex; */
  display: flex;
  justify-content: center;
  /* background-color: #333; */
  overflow: auto;
  white-space: nowrap;
  margin: 25px;
  width: 100vw;  
  /* width: fit-content; */
}

.product{
  border: 2px solid rgb(120, 20, 136,0);
  text-align: center;
}

.product img{
  width: 250px;
}
.foot1{

}
</style>