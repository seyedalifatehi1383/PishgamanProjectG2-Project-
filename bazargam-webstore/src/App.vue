<script setup lang="ts">
  import { ref } from 'vue';
  import ChooseCity from './components/ChooseCity.vue'
  const modalIsVisible = ref(true);  
</script>

<template>
  <!-- this component is the context of the choose city modal (from S.A.F.) -->
  <ChooseCity v-model:isVisible="modalIsVisible">  
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
      <!-- The content form app.vue -->
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
.choosecity-title-container{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
}
.title-text{
  text-align: right;
}
</style>
