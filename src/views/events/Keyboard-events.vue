<template>
  <div class="app-container">
    <div><h1>监听键盘（可通过上下左右控制圆位置）</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'KeyboardEvents',
  mixins: [konva],
  data() {
    return {
      propStyle: {
        x: 120,
        y: 120,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
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
      const propStyle = new Konva.Circle(this.propStyle)
      layer.add(propStyle).batchDraw()
      // 开始监听键盘操作
      const container = stage.container()
      container.tabIndex = 1
      container.focus()
      container.addEventListener('keydown', function(e) {
        if (e.keyCode === 37) {
          propStyle.x(propStyle.x() - 4)
        } else if (e.keyCode === 38) {
          propStyle.y(propStyle.y() - 4)
        } else if (e.keyCode === 39) {
          propStyle.x(propStyle.x() + 4)
        } else if (e.keyCode === 40) {
          propStyle.y(propStyle.y() + 4)
        } else {
          return
        }
        e.preventDefault()
        layer.batchDraw()
      })
    }
  }
}
</script>

