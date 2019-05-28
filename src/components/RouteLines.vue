<template>
  <div class="main_content layout" >
    <h1>{{ title }}</h1>
    <Layout>
        <div class="content">
            选择路线 ：
            <show-route v-on:route_change="onchange_route"></show-route>
            <br/>
            <br/>
            <br/>
            <p>您选择的线路： {{ current_route.on_station_name }} => {{ current_route.off_station_name }}</p>
            <p>您选择的班次： {{ current_bus.busNo }}</p>
            <br/><br/>
            选择发车时间：
            <DatePicker type="date" placeholder="选择日期" style="width: 150px" v-model="departure_date"></DatePicker>

            <Divider v-if="bus.length>0"/>
            <!-- <show-bus v-if="bus.length>0" v-bind:bus="bus"/> -->
            <div class="showbus" v-if="bus.length>0">
              <RadioGroup v-model="current_bus_no" vertical>
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
            <div style="margin-bottom:10px; width:630px" id="tickets_price">
                总价    ： <Input type="number" v-model="total_price" style="width: 120px;" readonly/>
            </div>
            <Button class="submit" type="btn primary" shape="circle" v-on:click="submit">购买</Button>

        </div>
    </Layout>
  </div>
</template>

<script>
import ShowRoutes from './ShowRoutes'

export default {
  name: 'routelines',
  data () {
    return {
      title: '深港通跨境-代理售票',
      // routes: [],
      tickets: 1,
      departure_date: (new Date()).toLocaleDateString(),

      current_route: '',
      current_bus: '',
      current_bus_no: '',
      bus: [],
      price: 0,
      total_price: 0,
      schedule_detail_id: 0
    }
  },
  methods: {
    route_change (event) {
      console.info('route_change')
    },
    onclick_busno (event) {
    },
    onchange_route (route) {
      let departureDate = this.departure_date.toLocaleDateString()
      let url = '/agency/api/search_bus_info/' + route.line_code
      this.current_route = route

      this.$http.post(url, {line_code: route.line_code,
        off_station_code: route.off_station_code,
        on_station_code: route.on_station_code,
        departure_date: departureDate,
        vehicle_type: route.vehicle_type,
        route_type: route.route_type}).then(res => {
        this.bus = res.data.result.bus
      })
    },
    submit () {

      if (!this.total_price){
        return
      }
      let url = '/agency/api/create_order_info/'
      let data = {org_no: 'FIX', total_price: this.total_price, current_route: this.current_route, busInfo: this.current_bus,
        tickets: this.tickets, departure_date: this.departure_date}

      this.$http.post(url, data).then(res => {
        this.$router.push({name: 'payment', params: data})
      })
    }
  },
  watch: {
    tickets: function (val, oval) {
      let b = this.bus.filter(item => {
        return item.busNo === this.current_bus_no
      })
      b = b && b[0]
      this.total_price = this.tickets * b.price
    },
    current_bus_no: function (val, oval) {
      let b = this.bus.filter(item => {
        return item.busNo === val
      })
      b = b && b[0]
      this.total_price = this.tickets * b.price
      this.schedule_detail_id = b.scheduleDetailId
      this.current_bus = b
    }
  },
  components: {
    'show-route': ShowRoutes
    // "show-bus": ShowBus
  }
}
</script>

<style scoped>
#route, #tickets_number{
    margin-top:20px;
}
.bus_line{
    border: 1px solid #eee;
    border-radius: 25px;
    margin: 8px;
}
.main_content{
  margin-top:15px;
}
.main_content h1{
  margin-bottom:15px;
}
</style>
