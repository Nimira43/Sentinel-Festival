<template>
  <NavBar />
  <RouterLink 
    to="/" 
    class="button text-light bg-prime"
  >
    Notes
  </RouterLink>
  <RouterLink 
    to="/stats" 
    class="button text-light bg-dark" 
  >
    Stats
  </RouterLink>
  <RouterView />
</template>

<script setup>
  import NavBar from './components/Layout/NavBar.vue'

</script>


<style>


</style>