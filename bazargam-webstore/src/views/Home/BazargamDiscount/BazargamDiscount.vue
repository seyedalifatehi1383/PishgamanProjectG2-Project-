<template>
  <head>
  </head>
  <div class="line">
      <!-- <hr  style="width: 40%; height: 0px; margin: 35px 15px;">
      <h2>شگفت انگیز ها </h2>
      <hr  style="width: 40%; height: 0px; margin: 35px 15px;"> -->
  </div>
  <div class="scrole">
      <div class="banner">
          <h2>تخفیف های <br>ویژه بازرگام</h2>
      </div>
      <div v-for="fruit in fruits"  :key="fruit.id">
          <router-link :to="{name:'IntroductionGoods' , params:{id: fruit.id , group : fruit.grouping}}" style="text-decoration: none; color: black;">
              <div @click.self="clicked(fruit)"  v-if="fruit.off" class="product">
                  <img @click.self="clicked(fruit)" style="width: 150px;"  :src='fruit.image' alt="cant load">
                  <h3> {{ fruit.name }} </h3>
                  <h3 style="direction: ltr; color: rgb(34, 121, 31);">  <del style="color: red;"> تومان {{ fruit.oldPrice }} </del> &nbsp; {{ fruit.price }}تومان </h3>
                  <button class="btnBuy">خرید</button>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
  export default {
      // props : ['fruits'],
      data(){
          return{
          //    offFruit : this.fruits,
             fruits : [],
              
          }
      },

      methods : {
          clicked(fruit){
              // console.log(fruit.name)
              this.$emit('OfferClicked',fruit)
          }
      },

      mounted() {
        fetch('http://localhost:3000/fruits')
          .then(res => res.json())
          .then(data => this.fruits = data)
          .catch(err => console.log(err.message))
      }
  }
</script>

<style scoped>
.scrole{
  padding: 10px;
  direction: rtl;
  background-color: #51ff00;
  /* background-image: url('../../public/images/images.jpg'); */
  overflow: auto;
  white-space: nowrap;
  display: flex;
  justify-content: right;
  width: 97%;
  border-radius: 15px;
  border: 1px gray dashed;
  padding: 10px;
  margin: 0 1%;
}

.product{
  background-color: rgb(255, 255, 255);
  padding: 10px;
  margin: 10px; 
  border-radius: 5px;
  text-align: center;
  /* box-shadow: 5px 5px 5px 5px  rgb(0, 0, 0);  */
  width: 256px;
}

.product img {
  border-radius: 5px;
}

.banner{
  text-align: center;
  display: flex;
  align-items: center;
  /* background-color: aqua; */
  margin: 15px;

}

.scrole::-webkit-scrollbar{
  overflow: hidden;

}

.line{
  display: flex;
  /* background-color: aqua; */
  justify-content: center;
}

.btnBuy{
  background-color: rgb(80, 200, 120);
  border: none;
  width: 50%;
  border-radius: 5px;
  color: white;
}

.btnBuy:hover{
  scale: 105%;
  transition: 0.5s;
  background-color: rgb(80, 200, 120 ,0.7);
}

.product:hover{
  scale: 105%;
  transition: 0.5s;
  background-color: rgb(154, 153, 153 , 0.7);
}


</style>