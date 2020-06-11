import Vue from 'vue'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

let router
let instance: Vue | null

function render () {
  router = new VueRouter({
    mode: 'history',
    base: window.__POWERED_BY_QIANKUN__ ? '/goods' : '/',
    routes
  })
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#goodsApp')
}

// 全局变量来判断环境
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('vue app bootstraped!!')
}

export async function mount (props: any) {
  console.log('props from main framework', props)
  render()
}

export async function unmount () {
  (instance as Vue).$destroy()
  instance = null
  router = null
}
