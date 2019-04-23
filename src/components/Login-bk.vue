<template>
  <div class="login">
      <img src="../assets/logo.jpg">

      <Lable>用户名</Lable><Input type="text" v-model="login"/>
      <Lable>密码</Lable><Input type="password"  v-model="password"/>
      <Lable>验证码</Lable><Input type="text"  v-model="verify"/>
      <Button class="submit" type="primary" size="large" v-on:click="submit">登录</Button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        login:'',
        password:'',
        verify:''
    }
  },
  methods: {
      submit: function(){
          
      }
  }
}
</script>

<style scoped>

</style>
