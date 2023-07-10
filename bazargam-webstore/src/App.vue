<script setup lang="ts">
  import { ref } from 'vue';
  import ChooseCity from './components/ChooseCity.vue'
  const modalIsVisible = ref(true);  
</script>

<template>
  <!-- this component is the context of the choose city modal (from S.A.F.) -->
  <ChooseCity v-model:isVisible="modalIsVisible">  
    <template v-slot:title>
      <h3 id="modal-title-content"> انتخاب شهر </h3>
      <p> برای مشاهده محصولات ابتدا شهر خود را مشخص کنید. </p>
    </template>
    <template v-slot:content>
      The content form app.vue
    </template>
  </ChooseCity>    
  

</template>

<style scoped>
#modal-title-content {
  color: #209d43;
  justify-content: right;
}
</style>
