<template>
  <div class="app-container">
    <div><h1>线性宽松</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'CommonEasing',
  mixins: [konva],
  data() {
    return {}
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
      const rect = new Konva.Rect({
        x: 50,
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 2,
        opacity: 0.2
      })
      layer.add(rect)
      layer.draw()
      const tween = new Konva.Tween({
        node: rect,
        duration: 1,
        x: 140,
        y: 90,
        fill: 'red',
        rotation: Math.PI * 2,
        opacity: 1,
        strokeWidth: 6,
        scaleX: 1.5
      })
      setTimeout(function() {
        tween.play()
      }, 2000)
    }
  }
}
</script>
