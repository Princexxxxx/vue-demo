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
            src="http://localhost:8086/appoint/2581738679465804152?noSend=true"
        ></iframe>
    </div>
</template>

<script>
import P from '../assets/js/postMessage.js'

export default {
    data: function() {
        return {
            iframeUrlOrigin: 'http://localhost:8086'
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
    computed: {},
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
