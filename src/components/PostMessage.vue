<template>
    <div id="frame">
        <p>
            <a @click="sendPost">sendPost</a>
        </p>

        <iframe
            id="appoint-page"
            title="Inline Frame Example"
            width="1200"
            :height="iframeHeight"
            :src="iframeUrl"
        ></iframe>
    </div>
</template>

<script>
import P from '../assets/js/postMessage.js'

export default {
    data: function() {
        return {
            viewToken: '2abd91ee-0583-416a-8536-65488065c185', // iframe src
            iframeUrlOrigin: 'http://192.168.52.121:8099', // iframe origin
            iframeHeight: 200,
            timeStamp: new Date().getTime()
        };
    },
    created() {
        // 监听要点参数页面真实高度用于设置iframe height
        window.addEventListener('message', (event) => {
            if(event.origin == this.iframeUrlOrigin) {
                this.iframeHeight = event.data.iframeHeight;
            }
        }, false);
    },
    mounted() {},
    computed: {
        iframeUrl() {
            return `http://192.168.52.121:8099/appoint?viewToken=3fc69f88-e578-4b67-ae9b-2d754d63cb2e&panel=POINT`;
        }
    },
    methods: {
        sendPost() {
            // 调用SDK方法
            window.saveContract({
                iframeId: 'appoint-page',
                iframeUrl: this.iframeUrlOrigin
            })
        }
    }
};
</script>

<style>
</style>
