<script setup lang="ts">
  import ChooseCity from './components/ChooseCity.vue'
</script>

<template>
  

  <teleport to=".chooseCityModal">
    <ChooseCity>  
      <h1> a simple text </h1>
      <template v-slot:links>
        <a href="#"> Sign up </a> 
        <a href="#"> more info </a>
      </template>
    </ChooseCity>    
  </teleport>
</template>

<style scoped>

</style>
