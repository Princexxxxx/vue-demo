<template>
  <div class="alloy-image">
    <img ref="logo" id="logo" src="../assets/img/logo.png">

    <img ref="logo1" id="logo" src="../assets/img/logo1.png">
    <el-slider v-model="brightValue" @change="changeBrightness"></el-slider>
  </div>
</template>

<script>
import AI from '../assets/js/alloyimage.js'

export default {
    name: 'AlloyImage',
    data: function() {
        return {
            brightValue: 50,
        };
    },
    created() {

    },
    mounted() {
        this.initAI();
    },
    methods: {
        initAI() {
            var img = document.getElementsByTagName("img")[1];
            img.onload = function() {
                //var AlloyImageObj = AlloyImage(this);

                // AlloyImage(this).act("灰度处理").add(//添加一个图层上去
                //         AlloyImage(this).act("灰度处理").act("反色").act("高斯模糊",5) , "颜色减淡"  
                // ).act("锐化").show();

                console.log('this:', this);
                console.log('AlloyImage(this):', AlloyImage(this));

                // 亮度、对比度
                AlloyImage(this).act("brightness", 10, 20).replace(this);

                // 锐化
                AlloyImage(this).act("sharp", 10).show();

                // 反色
                //AlloyImage(this).act("toGray").show();
            };
        },
        changeBrightness(val) {
            let $logo =  this.$refs.logo1;

            AlloyImage($logo).act('brightness', 10, 20).replace($logo);
        }
    }
};
</script>

<style>

</style>
