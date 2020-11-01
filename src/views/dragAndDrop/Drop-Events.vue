<template>
  <div class="app-container">
    <div><h1>多个可拖动（并没有做跨图层）</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'DropEvents',
  mixins: [konva],
  data() {
    return {
      starStyle: {
        // x: stage.width() * Math.random(),
        // y: stage.height() * Math.random(),
        fill: 'blue',
        numPoints: 10,
        innerRadius: 20,
        outerRadius: 25,
        draggable: true,
        // name: 'star ' + i,
        shadowOffsetX: 5,
        shadowOffsetY: 5
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
      const stage = this.pageStage
      const layer = this.pageLayer[0].layer
      for (let i = 0; i < 10; i++) {
        const data = new Konva.Star(Object.assign({}, this.starStyle, {
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          name: `star_${i}`
        }))
        layer.add(data)
      }
      layer.batchDraw()
    }
  }
}
</script>

