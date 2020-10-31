<template>
  <div class="app-container">
    <div><h1>阴影样式</h1></div>
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
      textStyle: {
        text: 'Text Shadow!',
        fontFamily: 'Calibri',
        fontSize: 40,
        x: 20,
        y: 20,
        stroke: 'red',
        strokeWidth: 2,
        shadowColor: 'black',
        shadowBlur: 0,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.5
      },
      lineStyle: {
        stroke: 'green',
        strokeWidth: 10,
        lineJoin: 'round',
        lineCap: 'round',
        points: [50, 140, 250, 160],
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.5
      },
      rectStyle: {
        x: 100,
        y: 120,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        shadowColor: 'black',
        shadowBlur: 10,
        shadowOffset: { x: 10, y: 10 },
        shadowOpacity: 0.5
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
      const text = new Konva.Text(this.textStyle)
      const line = new Konva.Line(this.lineStyle)
      const rct = new Konva.Rect(this.rectStyle)
      layer.add(text)
      layer.add(line)
      layer.add(rct)
      layer.batchDraw()
    }
  }
}
</script>

