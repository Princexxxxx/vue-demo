<template>
  <div id="app">
    <!-- <img ref="logo" id="logo" src="./assets/logo.png"> -->

    <!-- <HelloWorld></HelloWorld> -->
    <AlloyImage></AlloyImage>
    <!-- <check-box-demo></check-box-demo>

    <p>span-a: {{obj.a}}</p>
    <p>span-b: {{obj.c}}</p> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import CheckBoxDemo from './components/CheckBoxDemo';
import AlloyImage from './components/AlloyImage';

export default {
    name: 'App',
    components: {
        HelloWorld,
        CheckBoxDemo,
        AlloyImage
    },
    data: function() {
        return {
            obj: {
                a: 'a'
            },
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
    methods: {
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
