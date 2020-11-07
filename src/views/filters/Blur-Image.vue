<template>
  <div class="app-container">
    <div><h1>图像模糊</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-slider v-model="sliderValue" @input="changeSlider"></el-slider>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'BlurImage',
  mixins: [konva],
  data() {
    return {
      layer: null,
      lion: null,
      image: this.getImage('./static/cs0.jpg'),
      // 滑块默认值
      sliderValue: 20
    }
  },
  created() {
    // 因为第一个图层是10ms后创建的,避免图层未创建问题
    setTimeout(() => {
      this.addElem()
    }, 20)
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201101
     */
    addElem() {
      const layer = this.pageLayer[0].layer
      const lion = new Konva.Image({
        image: this.image,
        x: 80,
        y: 30,
        blurRadius: this.sliderValue,
        draggable: true
      })
      lion.cache()
      lion.filters([Konva.Filters.Blur])
      layer.add(lion)
      layer.draw()
      this.lion = lion
      this.layer = layer
    },
    changeSlider(val) {
      this.lion.blurRadius(val)
      this.layer.batchDraw()
    }
  }
}
</script>
