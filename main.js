import App from './App'
import uView from 'uview-ui'
// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif