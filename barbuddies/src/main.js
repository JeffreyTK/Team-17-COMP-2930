// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
<<<<<<< HEAD
import App from './Index'
import BootstrapVue from 'bootstrap-vue'
=======
import App from './App'
import router from './router'
>>>>>>> 4549ce134dde119bb92a590489ca734614cb06ec

Vue.config.productionTip = false
Vue.use(BootstrapVue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
