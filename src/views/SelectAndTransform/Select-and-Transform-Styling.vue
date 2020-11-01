<template>
  <div class="app-container">
    <div><h1>修改样式</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'SelectAndTransformStyling',
  mixins: [konva],
  data() {
    return {
      circle: {
        x: 150,
        y: 150,
        radius: 70,
        fill: 'red',
        draggable: true
      }
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
      const circle = new Konva.Circle(this.circle)
      const tr = new Konva.Transformer({
        anchorStroke: 'red',
        anchorFill: 'yellow',
        anchorSize: 20,
        borderStroke: 'green',
        borderDash: [3, 3],
        nodes: [circle]
      })
      layer.add(circle)
      layer.add(tr)
      layer.draw()
    }
  }
}
</script>

