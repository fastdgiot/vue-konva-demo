<template>
  <div class="app-container">
    <div><h1>重置缩放比例</h1></div>
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
    return {
      rect1: {
        x: 50,
        y: 60,
        width: 100,
        height: 100,
        draggable: true,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 5
      },
      rect2: {
        x: 250,
        y: 60,
        width: 100,
        height: 100,
        draggable: true,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        // do not scale strokes
        strokeScaleEnabled: false
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
      // 重置缩放比
      const rect1 = new Konva.Rect(this.rect1)
      layer.add(rect1)
      const tr1 = new Konva.Transformer({
        nodes: [rect1],
        // ignore stroke in size calculations
        ignoreStroke: true,
        // manually adjust size of transformer
        padding: 5
      })
      layer.add(tr1)
      // first way to skip stroke resize, is just by resetting scale
      // and setting width/height instead
      rect1.on('transform', () => {
        rect1.setAttrs({
          width: Math.max(rect1.width() * rect1.scaleX(), 5),
          height: Math.max(rect1.height() * rect1.scaleY(), 5),
          scaleX: 1,
          scaleY: 1
        })
      })
      // 普通引用
      const rect2 = new Konva.Rect({
        x: 250,
        y: 60,
        width: 100,
        height: 100,
        draggable: true,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        // do not scale strokes
        strokeScaleEnabled: false
      })
      layer.add(rect2)
      const tr2 = new Konva.Transformer({
        nodes: [rect2],
        // ignore stroke in size calculations
        ignoreStroke: true,
        // manually adjust size of transformer
        padding: 5
      })
      layer.add(tr2)
      layer.draw()
    }
  }
}
</script>

