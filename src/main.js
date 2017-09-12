// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import * as ROTModule from '@/vendor/rot.min.js'

import App from '@/App'
import router from '@/router'

Vue.config.productionTip = false

Vue.prototype.ROT = ROTModule.ROT
Vue.prototype.env = process.env.NODE_ENV

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
