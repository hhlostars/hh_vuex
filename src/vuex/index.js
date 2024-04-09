let _Vue = null

class Store {
  constructor(options) {
    const state = options.state || {}
    // const mutations = options.mutations || {}
    // const actions = options.actions || {}
    // const getters = options.getters || {}
    console.log(state);
    this.state = state
  }
}

function install(Vue) {
  _Vue = Vue
  _Vue.mixin({
    beforeCreate() {
      if(this.$options.store) {
        _Vue.prototype.$store = this.$options.store
      }
    }
  })
}

export default {
  install,
  Store
}