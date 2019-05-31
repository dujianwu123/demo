import model from './notify.vue'
let notify = {
}
notify.install = function (Vue, options = { delay: 300 }) {
  Vue.prototype.$notify = function (message, opt = {}) {
    if (notify.el) return
    options = { ...options, ...opt }
    let V = Vue.extend(model)
    let vm = new V()
    let oDiv = document.createElement('div')
    vm.$mount(oDiv)
    vm.value = message
    notify.el = vm.$el
    document.body.appendChild(vm.$el)
    // setTimeout(() => {
    //   document.querySelector('.notify_warp').style.display = 'none'
    //   document.body.removeChild(vm.$el)
    //   notify.el = null
    // }, options.delay)
  }
}
export default notify
