import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import routes from './router'
import store from './store'
import VueRouter from 'vue-router'
import '@/assets/stylus/main.styl'
import './plugins/element'
import { QianKunProps } from '@/typings/qiankun'

Vue.config.productionTip = false

let router
let instance: Vue | null
let setGlobalState: (state: any) => void

function render () {
  router = new VueRouter({
    mode: 'history',
    // 如果环境为微前端环境，则根路由为/goods
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
  return new Promise(resolve => {
    resolve()
  })
}

export async function mount (props: QianKunProps) {
  return new Promise(resolve => {
    store.commit('globalData/SET_RECORD', { fromType: 'MAIN_APPLICATION', record: props.globalState.record })
    props.onGlobalStateChange((state: any) => {
      if (state?.fromType === 'MAIN_APPLICATION' ?? false) {
        store.commit('globalData/SET_RECORD', { fromType: 'MAIN_APPLICATION', record: state.record })
      }
    })
    setGlobalState = props.setGlobalState
    render()
    resolve()
  })
}

export async function unmount () {
  return new Promise(resolve => {
    (instance as Vue).$destroy()
    instance = null
    router = null
    resolve()
  })
}

export function SetGlobalState (state: any) {
  setGlobalState && setGlobalState(state)
}
