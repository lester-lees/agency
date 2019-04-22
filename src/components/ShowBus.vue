<template>
  <div class="showbus">
        <RadioGroup v-model="current_bus" vertical >
            <Radio v-for="b in bus" v-bind:key="b.busNo" size="large" :label="b.busNo" class="bus_line">
                <Icon type="social-windows"></Icon>
                <span>班次：{{ b.busNo }}, 发车时间：{{ b.departureTime }}， 车辆类型：{{ b.vehicle_type }}, 剩余票数：{{ b.surplusTicket }} 张, 价格：{{ b.price }}元</span>
            </Radio>
        </RadioGroup>
  </div>
</template>

<script>
export default {
  name: 'ShowBus',
  props: ['bus'],
  data () {
    return {
        //bus: [],
    }
  }
}
</script>

<style scoped>

</style>
