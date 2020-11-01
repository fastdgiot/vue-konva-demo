<template>
  <div class="app-container">
    <div><h1>调整大小限制（限制宽度200）</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'TransformLimits',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 160,
        y: 60,
        width: 100,
        height: 90,
        fill: 'red',
        name: 'rect',
        stroke: 'black',
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
      const prop = new Konva.Rect(this.prop)
      const MAX_WIDTH = 200
      const tr = new Konva.Transformer({
        boundBoxFunc: (oldBoundBox, newBoundBox) => {
          if (Math.abs(newBoundBox.width) > MAX_WIDTH) {
            return oldBoundBox
          }
          return newBoundBox
        },
        nodes: [prop]
      })
      layer.add(prop)
      layer.add(tr)
      layer.draw()
    }
  }
}
</script>

