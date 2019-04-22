<template>
    <nav>
        <ul>
            <li class="pull-left">
                <router-link to="/routes">代理购票</router-link>
                <router-link to="/helloworld">Hello World</router-link>
            </li>
            <li class="pull-right">
                <router-link to="/login">登录</router-link>
            </li>
        </ul>        
    </nav>
</template>

<script>
export default{
  name: 'myheader'
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
