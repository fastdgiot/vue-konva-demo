<template>
  <div class="app-container">
    <div><h1>边框样式(鼠标移入改变)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'Stroke',
  mixins: [konva],
  data() {
    return {
      regular1: {
        x: 100,
        y: 100,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      }
    }
  },
  created() {
    setTimeout(() => {
      this.initialize()
    }, 20)
  },
  methods: {
    /**
     * 初始化--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    initialize() {
      const layer = this.pageLayer[0].layer
      const regular1 = new Konva.RegularPolygon(this.regular1)
      // 可以直接通过regular1修改样式
      regular1.on('mouseover touchstart', () => {
        regular1.setAttrs({
          stroke: 'blue',
          strokeWidth: 20
        })
        layer.draw()
      })
      regular1.on('mouseout touchend', () => {
        regular1.setAttrs({
          stroke: 'black',
          strokeWidth: 4
        })
        layer.draw()
      })
      layer.add(regular1)
      layer.batchDraw()
    }
  }
}
</script>

