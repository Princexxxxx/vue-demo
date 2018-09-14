<template>
	<div class="checkbox-demo">
        <!-- 饿了么 -->
		<el-checkbox v-model="checked">备选项</el-checkbox>

        <!-- 原生 -->
        <input type="checkbox" v-model="checked">
	</div>
</template>

<script>
import ElCheckbox from './CheckBox';

export default {
    name: 'CheckBoxDemo',
    components: {
        ElCheckbox
    },
    data() {
        return {
            checked: false
        };
	},
	created() {
		
	},
	methods: {
		
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
