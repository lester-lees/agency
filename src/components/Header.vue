<template>
    <!-- <nav>
        <ul>
            <li class="pull-left">
                <router-link to="/routes">代理购票</router-link>
                <router-link to="/report">销售报表</router-link>
                <router-link to="/report">佣金返还</router-link>
                <router-link to="/report">订单明细</router-link>
            </li>
            <li class="pull-right">
                <router-link to="/login">登录</router-link>
            </li>
        </ul>
    </nav> -->

    <Menu mode="horizontal" :theme="theme1" active-name="1" @on-select="onMenuSelect">
        <MenuItem name="routes">
            <Icon type="ios-paper" />
            线路查询
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people" />
            代理购票
        </MenuItem>
        <Submenu name="report">
            <template slot="title">
                <Icon type="ios-stats" />
                报表分析
            </template>
            <MenuItem name="report-1">订单明细</MenuItem>
            <MenuItem name="report--2">销售报表</MenuItem>
            <MenuItem name="report--3">佣金返还</MenuItem>
        </Submenu>
        <MenuItem name="login">
            <Icon type="ios-construct" />
            用户登录
            <router-link to="/login">用户登录</router-link>
        </MenuItem>
    </Menu>

</template>

<script>
export default{
  name: 'myheader',
  methods: {
    onMenuSelect: function (name) {
      console.log(name, ' is clicked!')
      if (name === 'login') {
        this.$router.push('/login')
      } else if (name === 'routes') {
        this.$router.push('/routes')
      }
    }
  }
}
</script>

<style scoped>
ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
    font-size: 18px;
}
nav{
    padding: 30px 0px;
    margin-bottom: 40px;
    background-color: #aaa;
}
</style>
