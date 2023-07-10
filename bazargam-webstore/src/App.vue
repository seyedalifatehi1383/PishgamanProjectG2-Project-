<script setup lang="ts">
  import { ref } from 'vue';
  import ChooseCity from './components/ChooseCity.vue'
  // import Modal from './components/Modal.vue'
  const modalIsVisible = ref(true);
  
</script>

<template>
  <!-- <button @click="modalIsVisible=true">OpenModal</button> -->
  <!-- <Modal v-model="modalIsVisible" >
    <template v-slot:title>
      Here is title from app.vue
    </template>
    <template v-slot:content>
      The content form app.vue
    </template>
  </Modal> -->

<!-- this teleport tag is the context of the choose city modal -->
  <ChooseCity v-model:isVisible="modalIsVisible">  
    <template v-slot:title>
      Here is title from app.vue
    </template>
    <template v-slot:content>
      The content form app.vue
    </template>
  </ChooseCity>    
  

</template>

<style scoped>

</style>
