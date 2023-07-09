<script setup lang="ts">
  import ChooseCity from './components/ChooseCity.vue';
  import { ref } from 'vue';

  let showModal = ref(true),

  changeModal = () => {
      showModal = ref(!showModal)
  }
</script>

<template>

<!-- this teleport tag is the context of the choose city modal -->
  <teleport to=".chooseCityModal" v-if="showModal" >
    <ChooseCity @close="changeModal">  
      <h1> a simple text </h1>
      
    </ChooseCity>    
  </teleport>
</template>

<style scoped>

</style>
