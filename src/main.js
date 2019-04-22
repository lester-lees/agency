// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

axios.defaults.baseURL = 'http://192.168.0.187:8009'
Vue.prototype.$http = axios
Vue.use(iView)

Vue.config.productionTip = false

/* eslint-disable no-new */
/* "chromedriver": "^2.27.2", */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
