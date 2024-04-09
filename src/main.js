import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import vuex from './vuex'
Vue.use(vuex)

const store  = new vuex.Store({
  state: {
    num: 1
  }
})
console.log(store);

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
