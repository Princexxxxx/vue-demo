<template>
    <div class="lazy-load">
        <h1>Vue-Lazyload Demo</h1>

        <ul>
            <li v-for="(img, index) in new Array(16)" :key="index">
                <img height=600 v-lazy="{ src: `https://www.qiyuesuo.me/img/about/logo/partner${index + 1}.png`, loading: 'https://cdn.qiyuesuo.com/img/icon/contract_placeholder.png'} "/>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
        };
    },
    created() {},
    methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
