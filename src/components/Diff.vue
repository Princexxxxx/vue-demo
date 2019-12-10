<template>
    <div class="diff-dom-demo">
        <div class="diff-container">
            <div class="editor" id="editor-1"></div>

            <div class="editor" id="editor-2"></div>
        </div>

        <p>
            <a @click="showDiffResult">Show Diff</a>
        </p>

        <router-link :to="{ name: 'Hello' }">Go Hello Page</router-link>
    </div>
</template>

<script>
import IntervalMixin from '../mixins/interval';

export default {
    mixins: [IntervalMixin],
    data() {
        return {
            intervalId: null, // 定时器序号
            diffResult: null,
            config: {
                pluginsEnabled: [
                    'align',
                    'charCounter',
                    'codeBeautifier',
                    'codeView',
                    'colors',
                    'draggable',
                    'embedly',
                    'emoticons',
                    'entities',
                    'file',
                    'fontAwesome',
                    'fontFamily',
                    'fontSize',
                    'fullscreen',
                    'image',
                    'imageTUI',
                    'imageManager',
                    'inlineStyle',
                    'inlineClass',
                    'lineBreaker',
                    'lineHeight',
                    'link',
                    'lists',
                    'paragraphFormat',
                    'paragraphStyle',
                    'save',
                    'table',
                    'url',
                    'wordPaste'
                ]
            }
        };
    },
    mounted() {
        this.initEditor();
    },
    created() {
        this.intervalId = setInterval(() => {
            console.log('interval msg from diff page');
        }, 1000);
    },
    computed: {},
    watch: {},
    methods: {
        initEditor() {
            new FroalaEditor('#editor-1', this.config);

            new FroalaEditor('#editor-2', this.config);
        },
        showDiffResult() {
            var nodeList = document.querySelectorAll('.fr-element');

            var dd = new DiffDOM();
            var diffResult = dd.diff(...Array.from(nodeList));

            console.log(diffResult);
        }
    }
};
</script>

<style scoped>
.diff-container {
    display: flex;
    justify-content: space-between;
}
.editor {
    width: 600px;
}
</style>
