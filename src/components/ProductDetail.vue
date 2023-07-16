<template>
<div v-if="this.product" class="pro">
  <h1>{{ this.product.title }}</h1>
  <h2>{{ this.product.price }}</h2>
  <h2>{{ this.product.details }}</h2>
  <img :src="this.product.img"> 
</div>
</template>

<script>
export default {
  props:['id'],
  data(){
    return{
      title:'',
      detail:'',
      product:null
    }
  },
  mounted(){
    fetch('http://localhost:3000/products/'+this.id)
     .then(res=>res.json())
     .then(data => {this.product=data}
     ).catch(err =>console.log(err.mess))
  }

}
</script>

<style>
.pro{
  text-align: center;
  background-color: rgb(31, 177, 104);
  height: 100%;
  width: 100%;
}

</style>