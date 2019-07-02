<template>
    <div id="frame">
        <p>
            <a @click="sendPost">sendPost</a>
        </p>

        <iframe
            id="appoint-page"
            title="Inline Frame Example"
            width="1200"
            height="1000"
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
            iframeUrlOrigin: 'http://privapp.qiyuesuo.me', // iframe origin
            timeStamp: new Date().getTime()
        };
    },
    created() {
        // 监听跨域请求的返回
        window.addEventListener('message', (event) => {
            if(event.origin == this.iframeUrlOrigin) {
                console.log('保存草稿回调', event.data);
            }
        }, false);
    },
    mounted() {},
    computed: {
        iframeUrl() {
            return `http://privapp.qiyuesuo.me/appoint?viewToken=${this.viewToken}&panel=CONTRACT&noSend=true`;
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
