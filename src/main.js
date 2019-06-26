import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'

// or with options
Vue.use(VueLazyload, {
    throttleWait: 2000
})

Vue.use(ElementUI);

Vue.config.productionTip = false

/* 不需要编译器 */
new Vue({
    el: '#app',
    render: h => h(App)
})

/* 需要编译器 */
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
