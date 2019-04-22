<template>
  <div id="app">
    <!-- <img src="./assets/logo.jpg"> -->
    <myheader></myheader>
    <router-view/>
  </div>
</template>

<script>
import myheader from '@/components/Header'
export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
</style>
