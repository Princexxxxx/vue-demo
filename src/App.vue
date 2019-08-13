<template>
    <div id="app">
        <img ref="logo" id="logo" src="./assets/img/logo.png">

        <!-- postMessage -->
        <!-- <post-message></post-message> -->

        <HelloWorld :title.sync="title"></HelloWorld>
        <!-- <check-box-demo></check-box-demo> -->

        <!-- <p>span-a: {{obj.a}}</p>
        <p>span-b: {{obj.c}}</p>

        <p>{{ JSON.stringify(arrA) }}</p> -->

        <!-- vue-lazyload -->
        <!-- <lazy-load></lazy-load> -->
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import CheckBoxDemo from './components/CheckBoxDemo';
import LazyLoad from './components/LazyLoad';
import PostMessage from './components/PostMessage';

export default {
    name: 'App',
    components: {
        HelloWorld,
        CheckBoxDemo,
        LazyLoad,
        PostMessage
    },
    data: function() {
        return {
            title: 123, // sync test str
            obj: {
                a: 'old A'
            },
            arrB: [
                {
                    name: 1
                },
                {
                    name: 2
                }
            ],
        };
    },
    created() {
        //console.log('c赋值之前：', this.obj);
        //this.obj.c = 'ccc';
        //console.log('c赋值之后：', this.obj);
        //this.func();
    },
    mounted() {
        this.obj.c = 'ccc';
    },
    computed: {
        arrA() {
            let arr = [...this.arrB, { age: '23' }];

            return arr;
        }
    },
    methods: {
        showDep() {
            console.log('arrA:', this.arrA);
            console.log('arrB:', this.arrB);
        },
        setA() {
            this.obj.a = 'new A';
        },
        func() {
            let self = this;

            setTimeout(() => {
                self.obj = Object.assign({}, self.obj, {
                    c: 'ccc 222'
                });
                //self.obj.c = 'ccc 222';
            }, 1000);
        }
    }
};
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
