<template>
  <div class="alloy-image">

    <el-row>
        <el-col :span="12">
            <img ref="logo" id="logo" src="../assets/img/seal.png" width="200">    
        </el-col>
        <el-col :span="12">
            <div ref="preview" class="preview"></div>

            <div class="bar">
                <el-row>
                    <el-col :span="6">
                        <span>亮度：</span>
                    </el-col>
                    <el-col :span="18">
                        <el-slider 
                            v-model="brightValue" 
                            :min="-0.5"
                            :max="1.5"
                            :step="0.001"
                            :format-tooltip="formatBrightness"
                            input-size="mini"
                            @change="changeBrightness">
                        </el-slider>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="6">
                        <span>对比度：</span>
                    </el-col>
                    <el-col :span="18">
                        <el-slider 
                            v-model="contrastValue" 
                            :min="0"
                            :max="1"
                            :step="0.001"
                            :format-tooltip="formatContrast"
                            input-size="mini"
                            @change="changeContrast">
                        </el-slider>
                    </el-col>
                </el-row>

                <el-button type="primary" plain @click="save">保存</el-button>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import AI from '../assets/js/alloyimage.js'

export default {
    name: 'AlloyImage',
    data: function() {
        return {
            $image: null,
            $preview: null,
            brightValue: 0.5,
            contrastValue: 0.5,
        };
    },
    created() {

    },
    mounted() {
        this.$image = this.$refs.logo;
        this.$preview = this.$refs.preview;
    },
    methods: {
        // 亮度格式化
        formatBrightness(val) {
            return (val - 0.5).toFixed(3);
        },
        // 对比度格式化
        formatContrast(val) {
            return (val - 0.5).toFixed(3);
        },
        // 调节亮度
        changeBrightness(val) {
            let H = 0.5;
            let S = 0.5;
            let I = val;

            console.log('亮度 I:', I);

            //换算成正常的值
            H = (H - 0.5) * 360;
            S = (S - 0.5) * 100;
            I = (I - 0.5) * 100;

            AlloyImage(this.$image).act('setHSI', H, S, I, 0).replaceChild(this.$preview);
        },
        // 调节亮度
        changeContrast(val) {
            let $preview =  this.$refs.preview;

            let D = val;
            D = (D - 0.5) * 100;

            console.log('brightness:', this.brightValue);

            AlloyImage(this.$image).act('brightness', this.brightValue, D).replaceChild(this.$preview);
        },
        // 生成图片base64
        save() {
            let $canvas = document.getElementsByTagName('canvas')[0];
            let imgData = AlloyImage($canvas).save();

            alert(imgData);
        }
    }
};
</script>

<style scoped>
    .alloy-image {
        width: 900px;
        margin: 0 auto;
    }
    .preview {
        width: 200px;
        height: 200px;
    }
</style>
