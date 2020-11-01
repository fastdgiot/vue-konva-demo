<template>
  <div class="app-container">
    <div><h1>基础拖放</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'DragAndDrop',
  mixins: [konva],
  data() {
    return {
      propStyle: {
        x: 120,
        y: 120,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
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
      const propStyle = new Konva.Rect(this.propStyle)
      layer.add(propStyle)
      layer.batchDraw()
    }
  }
}
</script>

