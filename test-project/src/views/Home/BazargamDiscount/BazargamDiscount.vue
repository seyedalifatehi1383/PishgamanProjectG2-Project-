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
          <h2>تخفیف های <br>شگفت انگیز</h2>
      </div>
      <div v-for="fruit in fruits"  :key="fruit.id">
          <router-link :to="{name:'IntroductionGoods' , params:{id: fruit.name , group : fruit.grouping}}" style="text-decoration: none; color: black;">
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
             fruits : [
                  {name : 'پیاز' ,oldPrice : 20000, price :15000, image : '../images/onion.jpg', off:true, grouping:'میوه' , id:1},
                  {name : ' سیب زمینی' ,oldPrice : 25000, price :17000, image : '../images/potato.jpg',off:true,grouping:'میوه' , id:2},
                  {name : ' خیار' ,oldPrice : 18000, price :15000, image : '../images/cucumber.jpg',off:false,grouping:'میوه' , id:3},
                  {name : ' گوجه' ,oldPrice : 16000, price :12000, image : '../images/tomato.jpg',off:true,grouping:'میوه' , id:4},
                  {name : ' موز' ,oldPrice : 80000, price :68000, image : '../images/benana.jpg',off:true,grouping:'میوه' , id:5},
                  {name : ' کیوی' ,oldPrice : 45000, price :3000, image : '../images/kiwi.jpg',off:true,grouping:'میوه' , id:6},
                  {name : ' آناناس' ,oldPrice : 16000, price :12000, image : '../images/ananas.jpg',off:true,grouping:'fruit' , id:7},
                  {name : ' دوغ' ,oldPrice : 21000, price :19000, image : '../images/doogh.jpg',off:true,grouping:'نوشیدنی' , id:8},
                  {name : ' کوکاکولا' ,oldPrice : 25000, price :23000, image : '../images/cooca.jpg',off:false,grouping:'نوشیدنی' , id:9},
                  {name : ' انرژی زا' ,oldPrice : 45000, price :40000, image : '../images/energetic.jpg',off:true,grouping:'نوشیدنی' , id:10},
                  {name : ' فانتا' ,oldPrice : 24000, price :22000, image : '../images/fanta.jpg',off:true,grouping:'نوشیدنی' , id:11},
                  {name : ' اسپرایت' ,oldPrice : 22000, price :20000, image : '../images/Sprite.jpg',off:true,grouping:'نوشیدنی' , id:12},
                  {name : ' گلاب' ,oldPrice : 18000, price :15000, image : '../images/golab.jpg',off:false,grouping:'نوشیدنی' , id:13},
                  {name : ' پودر موسیر' ,oldPrice : 36000, price :36000, image : '../images/moosirPoodr.jpg',off:false,grouping:'ادویه' , id:14},
                  {name : ' زردچوبه' ,oldPrice : 29000, price :29000, image : '../images/zardChoobe.jpg',off:false,grouping:'ادویه' , id:15},
                  {name : ' پنیر پیتزا' ,oldPrice : 50000, price :50000, image : '../images/panirpitza.jpg',off:false,grouping:'پروتئین' , id:16},
                  {name : ' گوشت' ,oldPrice : 150000, price :150000, image : '../images/goosht.jpg',off:false,grouping:'پروتئین' , id:17},
                  {name : ' کالباس' ,oldPrice : 80000, price :10000, image : '../images/calbas.jpg',off:false,grouping:'پروتئین' , id:18},
                  {name : ' خیارشور' ,oldPrice : 14000, price :14000, image : '../images/khiarshoor.jpg',off:false,grouping:'کنسرو' , id:19},
                  {name : ' تن ماهی' ,oldPrice : 37000, price :37000, image : '../images/toneMahi.jpg',off:false,grouping:'کنسرو' , id:20},
                  {name : ' ترشی' ,oldPrice : 50000, price :50000, image : '../images/toroshi.jpg',off:false,grouping:'کنسرو' , id:21},
          ]
              
          }
      },

      methods : {
          clicked(fruit){
              // console.log(fruit.name)
              this.$emit('OfferClicked',fruit)
          }
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