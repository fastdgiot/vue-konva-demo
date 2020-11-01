<template>
  <div class="app-container">
    <div><h1>限定方向拖动</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'SimpleDragBounds',
  mixins: [konva],
  data() {
    return {
      propStyle1: {
        x: 20,
        y: 70,
        fontSize: 24,
        fontFamily: 'Calibri',
        text: '横向拖动',
        fill: 'black',
        padding: 15,
        draggable: true,
        dragBoundFunc: function(pos) {
          return {
            x: pos.x,
            y: this.absolutePosition().y
          }
        }
      },
      propStyle2: {
        x: 150,
        y: 70,
        draggable: true,
        fontSize: 24,
        fontFamily: 'Calibri',
        text: '纵向拖动',
        fill: 'black',
        padding: 15,
        dragBoundFunc: function(pos) {
          return {
            x: this.absolutePosition().x,
            y: pos.y
          }
        }
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
      const text1 = new Konva.Text(this.propStyle1)
      const text2 = new Konva.Text(this.propStyle2)
      layer.add(text1)
      layer.add(text2)
      layer.batchDraw()
    }
  }
}
</script>

