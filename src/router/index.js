import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/diff/dom',
            name: 'DiffDom',
            component: require('../components/Diff.vue').default
        },
        {
            path: '/hello',
            name: 'Hello',
            component: require('../components/Hello.vue').default
        }
    ]
});

export default router;
