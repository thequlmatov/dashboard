<template>
  <Header/>
  <Navbar/>
</template>


<script>
  import  Header  from "./components/Header.vue";
  import Navbar from "./components/Navbar.vue";
  import './assets/main.css'

  export default {
    name: 'App',
    components: {
      Header,
      Navbar
    },
  }
</script>


<style lang="scss" scoped>
/* / */
</style>
