<template>
  <div class="show_routes">
        <Select id="route" style="width:630px" size="large" filterable placeholder="请选择路线" v-model="current_route">
            <Option v-for="(r) in routes" v-bind:key="r.line_code" v-bind:value="r.line_code">
                {{ r.on_station_name }} => {{ r.off_station_name }}
            </Option>
        </Select>
  </div>
</template>

<script>
export default {
  name: 'ShowRoutes',
  data () {
    return {
      routes: null,
      current_route: null
    }
  },
  mounted () {
    this.$http.post('/agency/api/search_line/', {first: 1, second: 2})
      .then(response => {
        this.routes = response.data.result.cities
      })
  },
  watch: {
    current_route: function (val, oldVal) {
      console.info(val)
      let r = this.routes.filter(i => {
        return i.line_code === val
      })
      r = r && r[0] || null
      this.$emit('route_change', r)
    }
  }
}
</script>

<style scoped>

</style>
