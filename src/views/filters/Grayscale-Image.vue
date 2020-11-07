<template>
  <div class="app-container">
    <div><h1>灰度图像</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'GrayscaleImage',
  mixins: [konva],
  data() {
    return {
      layer: null,
      lion: null,
      // 滑块默认值
      sliderValue: 0
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
        lion.filters([Konva.Filters.Grayscale])
        layer.add(lion)
        layer.draw()
        this.lion = lion
        this.layer = layer
      }
    }
  }
}
</script>
