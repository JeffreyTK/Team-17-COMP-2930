// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
require('vue-flash-message/dist/vue-flash-message.min.css')

Vue.use(VueSession)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.prototype.$calendarHome = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    calendarHome: true
  }
})
