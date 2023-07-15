<template>
  <div  v-for="product in products" :key="product.id " class="products">
    <div class="product"></div>
    <router-link to=""><h1>{{product.title}}</h1></router-link>
    <h3>{{ product.price }}</h3>
    <h3>{{ product.details }}</h3>
  </div>
</template>

<script>
export default {
  data(){
    return{
      products:[]
    }
  },
mounted(){
  fetch('http://localhost:3000/products')
   .then(res =>res.json())
   .then(data =>this.products=data)
   .catch(err=>console.log(err))
}
}
</script>

<style>
.products{
  background-color: bisque;
  display: inline-block;
  width: 200px;
  height: 200px;
}

</style>