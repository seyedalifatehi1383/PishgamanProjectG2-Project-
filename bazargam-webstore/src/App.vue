<script setup lang="ts">
  import { ref } from 'vue';
  import ChooseCity from './components/ChooseCity.vue'
  const modalIsVisible = ref(true);  
</script>

<template>
  <!-- this component is the context of the choose city modal (from S.A.F.) -->
  <ChooseCity v-model:isVisible="modalIsVisible">  
    <template v-slot:title>
      <h3 id="modal-title-content-h3"> انتخاب شهر </h3>
      <p> .برای مشاهده محصولات ابتدا شهر خود را مشخص کنید </p>
      <img src="./images/logo.png" alt="logo" class="title-logo">
    </template>
    <template v-slot:content>
      The content form app.vue
    </template>
  </ChooseCity>
  

</template>

<style scoped>
#modal-title-content-h3 {
  color: #209d43;
  justify-content: right;
}

h3 {
  background-color: aqua;
  margin: 20px 50px;
  padding: 0;
  clear: left;
}

p {
  background-color: blueviolet;
  margin: 0;
  padding: 0;
  clear: left;
}

.title-logo {
  width: 87px;
  height: 39.5px;
  float: left;
}
</style>
