<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>{{ info }}</div>
  </div>
</template>

<script>
export default {
  name: 'routelines',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      info: null
    }
  },
  mounted () {
    this.$http
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
