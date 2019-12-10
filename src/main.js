import Vue from 'vue'
import App from './App'
import router from './router';
import ElementUI from 'element-ui'
import VueLazyload from 'vue-lazyload'
import { DiffDOM } from 'diff-dom';
import $ from 'jquery';
// import FroalaEditor from 'froala-editor'

// or with options
Vue.use(VueLazyload, {
    throttleWait: 2000
})

Vue.use(ElementUI);

Vue.config.productionTip = false

window.$ = $;
window.router = router;
window.FroalaEditor = FroalaEditor;
window.DiffDOM = DiffDOM;

/* 不需要编译器 */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
