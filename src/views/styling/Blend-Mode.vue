<template>
  <div class="app-container">
    <div><h1>混合模式(多个元素之间相互影响)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'MouseCursorStyles',
  mixins: [konva],
  data() {
    return {
      textStyle: {
        text: 'Text Shadow!',
        fontFamily: 'Calibri',
        fontSize: 40,
        x: 20,
        y: 20,
        fill: 'green',
        // stroke: 'red',
        strokeWidth: 2,
        shadowColor: 'white',
        // shadowBlur: 0,
        shadowOffset: { x: 10, y: 10 }
        // shadowOpacity: 0.5
      },
      porpStyle: {
        x: 100,
        y: 100,
        // stroke: 'red',
        width: 100,
        height: 100,
        fill: 'red',
        draggable: true,
        globalCompositeOperation: 'xor'
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
      const textStyle = new Konva.Text(this.textStyle)
      layer.add(textStyle)
      const porpStyle = new Konva.Rect(this.porpStyle)
      layer.add(porpStyle)
      layer.batchDraw()
    }
  }
}
</script>

