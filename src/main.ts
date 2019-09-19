import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'
// import store from './vuex/store'

import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

import '../static/common.css'

new Vue({
  render: h => h(App),
  store,
  router,
  components: { App }
}).$mount('#app') 
