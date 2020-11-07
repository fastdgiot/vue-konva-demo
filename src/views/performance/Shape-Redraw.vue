<template>
  <div class="app-container">
    <div><h1>重绘(形状优化)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeRedraw',
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
      const main = this.$refs.container
      const layer = this.pageLayer[0].layer
      const BOX_SIZE = 15
      // generate boxes
      for (var ix = 0; ix < main.offsetWidth / BOX_SIZE; ix++) {
        for (var iy = 0; iy < main.offsetHeight / BOX_SIZE; iy++) {
          const box = new Konva.Rect({
            x: ix * BOX_SIZE,
            y: iy * BOX_SIZE,
            width: BOX_SIZE - 1,
            height: BOX_SIZE - 1,
            fill: 'darkgrey',
            stroke: 'white'
          })
          layer.add(box)
        }
      }
      layer.draw()

      // as all boxes stay separately with no overlap
      // and they have no opacity
      // we can call 'box.draw()' and we will have expected result
      // REMEMBER that is this case box will be drawn on top of existing layer
      // without clearing
      layer.on('mouseover', function(evt) {
        const box = evt.target
        box.fill('#E5FF80')
        box.draw()
      })
      layer.on('mouseout', function(evt) {
        const box = evt.target
        box.fill('darkgrey')
        box.draw()
      })
    }
  }
}
</script>
