<template>
    <div  v-for="product in products"  :key="product.id " id="pro" >
        <div v-if="product.details===$route.query.s1"  class="products">
      <h1>{{product.title}}</h1>
      <h3>{{ product.price }}</h3>
      <h3>{{ product.details }}</h3>
       <router-link :to="{name:'ProductDetail',params:{id:product.id}}">خرید</router-link> 
    </div>
    </div>
</template>

<script>
export default {
    data(){
      return{ 
        products:[],
      }
    },
  mounted(){
    fetch('http://localhost:3000/products')
     .then(res =>res.json())
     .then(data =>this.products=data)
     .catch(err=>console.log(err))
  },
  }
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
  }
  .products a{
    text-decoration: none;
    background-color: green;
    color: #000;
    border-radius: 5px;
  }
  #pro{
    display: inline-block;
    float: right;
  }

</style>
