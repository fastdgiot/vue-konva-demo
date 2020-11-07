<template>
  <div class="app-container">
    <div><h1>Disable-Perfect-Drawing</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'DisablePerfectDrawing',
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
      const group2 = new Konva.Group({
        x: 50,
        y: 50
      })
      layer.add(group2)
      const lebel2 = new Konva.Text({
        text: 'Shape with defaul drawing behaviour'
      })
      group2.add(lebel2)
      const rect0 = new Konva.Rect({
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 10,
        opacity: 0.5
      })
      group2.add(rect0)

      const group1 = new Konva.Group({
        x: 200,
        y: 100
      })
      layer.add(group1)
      const lebel1 = new Konva.Text({
        text: 'Shape with perfectDrawEnabled = false'
      })
      group1.add(lebel1)
      const rect = new Konva.Rect({
        y: 20,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 10,
        opacity: 0.5,
        perfectDrawEnabled: false
      })
      group1.add(rect)

      layer.draw()
    }
  }
}
</script>
