<template>
  <div class="app-container">
    <div><h1>图像Pixelate</h1></div>
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
  name: 'PixelateImage',
  mixins: [konva],
  data() {
    return {
      layer: null,
      lion: null,
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
      const img = new Image()
      img.src = './static/cs0.jpg'
      img.onload = () => {
        const layer = this.pageLayer[0].layer
        const lion = new Konva.Image({
          image: img,
          x: 80,
          y: 30,
          draggable: true
        })
        lion.cache()
        lion.filters([Konva.Filters.Pixelate])
        layer.add(lion)
        layer.draw()
        this.lion = lion
        this.layer = layer
      }
    },
    changeSlider(val) {
      this.lion.pixelSize(val / 5)
      this.layer.batchDraw()
    }
  }
}
</script>
