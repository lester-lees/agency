<template>

  <div class="main_content layout" >
    <h1>{{ title }}</h1>
    <Layout>
        <div class="content">
            选择路线：
            <Select id="route" style="width:630px" size="large" filterable placeholder="请选择线路" v-on:change="route_change" v-model="current_route">
                <Option v-for="(r) in routes" v-bind:key="r.line_code" v-bind:value="r.line_code">
                    {{ r.on_station_name }} => {{ r.off_station_name }}
                </Option>
            </Select>
            <br/>
            <br/>
            <p>您选择的线路： {{ current_route }}</p>
            <p>您选择的班次： {{ current_bus }}</p>
            <br/><br/>
            选择发车时间：
            <DatePicker type="date" placeholder="选择日期" style="width: 150px" v-model="departure_date"></DatePicker>
            <Divider v-if="bus.length>0"/>
            <div v-if="bus.length>0">
                <RadioGroup v-model="current_bus" vertical>
                    <Radio v-for="b in bus" v-bind:key="b.busNo" size="large" :label="b.busNo" class="bus_line">
                        <Icon type="social-windows"></Icon>
                        <span>班次：{{ b.busNo }}, 发车时间：{{ b.departureTime }}， 车辆类型：{{ b.vehicle_type }}, 剩余票数：{{ b.surplusTicket }} 张, 价格：{{ b.price }}元</span>
                    </Radio>
                </RadioGroup>
            </div>
            <Divider />
            <div style="margin-bottom:10px; width:630px" id="tickets_number">
                购票数量： <Input type="number" v-model="tickets" style="width: 120px;" />
            </div>
            <div style="margin-bottom:10px; width:630px" id="tickets_number">
                总价    ： <Input type="number" v-model="price" style="width: 120px;" />
            </div>            
            <Button class="submit" type="primary" shape="circle">购买</Button>
        </div>
    </Layout>
  </div>
</template>

<script>
export default {
  name: 'routelines',
  data () {
    return {
      title: '深港通跨境-代理售票',
      routes: null,
      tickets: 1,
      departure_date: (new Date()).toLocaleDateString(),
      current_route: '',
      current_bus: '',
      bus: [],
      price: 0
    }
  },
  methods: {
    route_change (event) {
      console.info('route_change')
    },
    onclick_busno (event) {

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
        this.routes = response.data.result.cities
      })
  },
  watch: {
    current_route: function (val, oldVal) {
      console.info(val)
      let r = this.routes.filter(i => {
        return i.line_code === val
      })
      let departureDate = this.departure_date.toLocaleDateString()
      let url = 'http://192.168.0.187:8069/agency/api/search_bus_info/' + val
      r = r[0]
      this.$http.post(url, {line_code: val,
        off_station_code: r.off_station_code,
        on_station_code: r.on_station_code,
        departure_date: departureDate,
        vehicle_type: r.vehicle_type,
        route_type: r.route_type}).then(res => {
        this.bus = res.data.result.bus
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#route, #tickets_number{
    margin-top:20px;
}
.bus_line{
    border: 1px solid #eee;
    border-radius: 25px;
    margin: 8px;

}
</style>
