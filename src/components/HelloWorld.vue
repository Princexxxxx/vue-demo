<template>
	<div class="hello-world">
		<h1>{{ msg }}</h1>

        <!-- <p>消息列表：</p>
        <ul>
            <li v-for="(item, index) in messageList" :key="index">
                <span :class="{ 'odd-text': (index % 2 == 0) }">
                    No.{{index + 1}}: {{item.name}}
                </span>
            </li>
        </ul>

        <a @click="addMsg">新增消息</a>

        <a @click="deleteMsg">删除消息</a>

        <a @click="updateMsg">更新第一条消息</a> -->

        <!-- Hello组件 -->
        <Hello :message="msg" :msgList="messageList" :msgLog="messageLog" v-on:updateMessage="updateMessage"></Hello>

        <el-popover
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <a slot="reference">focus 激活</a>
        </el-popover>

        <el-popover
            ref="popRef"
            placement="top"
            title="标题"
            width="200"
            trigger="manual"
            v-model="showPopover"
            content="奥术大师大所多">
                <a @click="changePop">change Pop</a>
        </el-popover>

        <el-button id="aaa" type="text">new Popover</el-button>

        <el-button id="bbb" type="text">Old Popover</el-button>

        <a @click="changeTitle" style="color:red;">changeTitle: {{title}}</a>
	</div>
</template>

<script>
import Hello from './Hello.vue';

export default {
    components: {
        Hello
    },
    name: 'HelloWorld',
    props: {
        title: Number
    },
    data() {
        return {
            msg: '我是父组件',
            messageList: [],
            showPopover: false
        };
    },
    created() {
        this.initMsg();
    },
    mounted() {
        this.$refs.popRef.referenceElm = document.getElementById('bbb');
        // this.$refs.popRef.showPopper = true;

        this.showPopover = true;
    },
    methods: {
        // test
        changePop() {
            // this.$refs.popRef.showPopper = false;
            this.showPopover = false;

            this.$refs.popRef.referenceElm = document.getElementById('aaa');

            setTimeout(() => {
                this.showPopover = true;
            }, 300);
        },
        changeTitle() {
            this.$emit('update:title', new Date().getTime());
        },
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
