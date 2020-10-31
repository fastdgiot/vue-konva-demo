<template>
  <div class="app-container">
    <div><h1>连线方式(鼠标移入改变)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'Shadow',
  mixins: [konva],
  data() {
    return {
      porpStyle: {
        x: 100,
        y: 100,
        sides: 3,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 20,
        lineJoin: 'bevel'
      },
      // 使用哪种样式
      styleNum: 0,
      styleList: ['miter', 'bevel', 'round']
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
      const porpStyle = new Konva.RegularPolygon(this.porpStyle)
      porpStyle.on('mouseover', () => this.changeStyel(porpStyle, layer))
      // porpStyle.on('mouseout', () => this.changeStyel(porpStyle, layer))
      layer.add(porpStyle)
      layer.batchDraw()
    },
    /**
     * 监听--鼠标移入移出改变样式
     * @param porp
     * @param layer
     */
    changeStyel(porp, layer) {
      const num = this.styleNum++
      porp.lineJoin(this.styleList[num % 3])
      layer.draw()
    }
  }
}
</script>

