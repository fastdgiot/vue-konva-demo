<template>
  <div class="app-container">
    <div><h1>剪切方法</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ResizeText2',
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
      const group = new Konva.Group({
        clipFunc: (ctx) => {
          ctx.arc(250, 120, 50, 0, Math.PI * 2, false)
          ctx.arc(150, 120, 60, 0, Math.PI * 2, false)
        },
        draggable: true
      })
      const blueBlob = new Konva.Line({
        points: [73, 140, 340, 23, 500, 109, 300, 170],
        stroke: 'blue',
        strokeWidth: 10,
        fill: '#aaf',
        tension: 0.8,
        closed: true
      })
      const redBlob = new Konva.Line({
        points: [73, 140, 340, 23, 500, 109],
        stroke: 'red',
        strokeWidth: 10,
        fill: '#faa',
        tension: 1.2,
        scale: { x: 0.5, y: 0.5 },
        x: 100,
        y: 50,
        closed: true
      })
      group.add(blueBlob)
      group.add(redBlob)
      layer.add(group)
      layer.draw()
    }
  }
}
</script>

