<template>
  <!-- this is the modal of the website (from seyed ali fatehi) -->

  <ChooseCity v-model:isVisible="modalIsVisible">
    <template v-slot:title>
      <div class="choosecity-title-container">
        <div class="title-text">
          <h3 id="modal-title-content-h3">انتخاب شهر</h3>
          <p>.برای مشاهده محصولات ابتدا شهر خود را مشخص کنید</p>
        </div>

        <div>
          <img src="./assets/logo.png" alt="logo" class="title-logo" />
        </div>
      </div>
    </template>

    <template v-slot:content>
      <div class="cities-container">
        <router-link v-for="city in ProductStore.cities" :key="city.id" :to="city.link">
          <div class="cityBox">
            <h4>{{ city.title }}</h4>
          </div>
        </router-link>
      </div>
    </template>
  </ChooseCity>

  <!-- this is the component of the header of the website (from elmira abolfazli) -->
  <Header />
  <router-view/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { RouterView, RouterLink } from "vue-router";

import Header from './components/Header.vue'
import ChooseCity from './components/ChooseCity.vue'
import { useProductStore } from "./stores/product"
const ProductStore = useProductStore();
//  useProductStore();
// import { cities } from './stores/product';

const modalIsVisible = ref(true);  
</script>

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
