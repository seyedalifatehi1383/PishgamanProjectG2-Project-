<script setup lang="ts">
  import { ref } from 'vue';
  import ChooseCity from './components/ChooseCity.vue'
  const modalIsVisible = ref(true);  
</script>

<template>
  <!-- this component is the context of the choose city modal (from S.A.F.) -->
  <ChooseCity v-model:isVisible="modalIsVisible" >  
    <template v-slot:title>
    <div class="choosecity-title-container">
     

        <div class="title-text">
          <h3 id="modal-title-content-h3"> انتخاب شهر </h3>
          <p> .برای مشاهده محصولات ابتدا شهر خود را مشخص کنید </p>
        </div>
     
        <div>
          <img src="./images/logo.png" alt="logo" class="title-logo">
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div class="cities-container">
        <a href="#">
        <div class="cityBox">
          <h4> تهران </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> یزد </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> اصفهان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> کرمان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> کرج </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> مشهد </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> شیراز </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> ارومیه </h4>
        </div>
      </a>
      
      <a href="#">
        <div class="cityBox">
          <h4> اهواز </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> کرمانشاه </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> تبریز </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> سنندج </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> گرگان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> قم </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> بندرعباس </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> رشت </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> زاهدان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> سمنان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> بجنورد </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> یاسوج </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> شهرکرد </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> کاشان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> لواسان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> ایلام </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> قزوین </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> اراک </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> اردبیل </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> همدان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> ساری </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> زنجان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> بوشهر </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> بیرجند </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> خرم آباد </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> بهمئی </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> گچساران </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> دهدشت </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> چناران, گلبهار </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> طرقبه, شاندیز </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> فریمان </h4>
        </div>
      </a>

      <a href="#">
        <div class="cityBox">
          <h4> ملک آباد, بینالود </h4>
        </div>
      </a>
      </div>      
    </template>
  </ChooseCity>    
  

</template>

<style scoped>
#modal-title-content-h3 {
  color: #209d43;
  margin: 0;
  padding: 0;
}

p {
  margin: 0;
  padding: 0;
}

.title-logo {
  overflow: auto;
  width: 87px;
  height: 39.5px;
  float: left;
}
.choosecity-title-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}
.title-text {
  text-align: right;
}

.cityBox {
  margin: 0!important;
  padding: 0;
  display: inline-block;
}

.cityBox h4 {
  margin: 0;
  padding: 0;
}

.cities-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  grid-template-rows: auto;
  column-gap: 10px;
  row-gap: 15px;
  overflow: scroll;
  padding-bottom: 15px;
}

.cities-container > a{
  background: white;
  text-align: center;
  padding: 6px;
  border: 1px solid black;
  border-radius: 5px;
  color: black;
}

.cities-container > a:hover{
  background: rgb(2, 149, 46);
  text-align: center;
  padding: 6px;
  border: 1px solid white;
  border-radius: 5px;
  color: white;
}
</style>
