import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import 'styles_alias/reset.css'
import 'styles_alias/border.css'
import notify from './plugin/notify.js'
import 'js_alias/rem.js'
Vue.config.productionTip = false
// 自己封装的弹窗组件简写
Vue.use(notify, {delay: 2000})
// 移动端点击延迟
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
