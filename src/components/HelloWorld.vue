<template>
	<div class="hello-world">
		<h1>{{ msg }}</h1>

        <p>消息列表：</p>
        <ul>
            <li v-for="(item, index) in messageList" :key="index">
                <span :class="{ 'odd-text': (index % 2 == 0) }">
                    No.{{index + 1}}: {{item.name}}
                </span>
            </li>
        </ul>

        <a @click="addMsg">新增消息</a>

        <a @click="deleteMsg">删除消息</a>

        <a @click="updateMsg">更新第一条消息</a>

        <!-- Hello组件 -->
        <Hello :message="msg" :msgList="messageList" :msgLog="messageLog" v-on:updateMessage="updateMessage"></Hello>
	</div>
</template>

<script>
import Hello from './Hello.vue';

export default {
    components: {
        Hello
    },
    name: 'HelloWorld',
    data() {
        return {
            msg: '我是父组件',
            messageList: []
        };
    },
    created() {
        this.initMsg();
    },
    methods: {
        initMsg() {
            this.addMsg();
        },
        addMsg() {
            this.messageList.push({
                name: Date.now()
            });
        },
        deleteMsg() {
            this.messageList.pop();
        },
        updateMsg() {
            const msg = {
                name: Date.now()
            }

            this.$set(this.messageList, 0, msg);
        },
        messageLog(callback) {
            console.log('来自父组件的消息');

            if(callback) callback();
        },
        updateMessage(message) {
            this.msg = message;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 10px;
}
a {
    cursor: pointer;
    color: #42b983;
}
.odd-text {
    background-color: #c0c0c0;
}
</style>
