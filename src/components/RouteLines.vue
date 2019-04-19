<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
        <li v-for="(r) in routes" v-bind:key="r.line_code">
            {{ r.on_station_name }} , {{ r.off_station_name }}
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'routelines',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      routes: null
    }
  },
  mounted () {
    /*
    this.$http({url: 'http://192.168.0.187:8069/agency/api/search_line/',
      method: 'post',
      data: {first: 1, second: 2}})
      .then(response => (this.info = response))
    */
    this.$http.post('http://192.168.0.187:8069/agency/api/search_line/', {first: 1, second: 2})
      .then(response => {
        // console.info(response.data.result.cities)
        this.routes = response.data.result.cities
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
