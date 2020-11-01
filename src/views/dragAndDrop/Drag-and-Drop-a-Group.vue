<template>
  <div class="app-container">
    <div><h1>将多个元素整体拖动</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'DragAndDropGroup',
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
      const layer = this.pageLayer[0].layer
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
      const group = new Konva.Group({
        draggable: true
      })
      for (let i = 0; i <= 5; i++) {
        const data = Object.assign({}, this.propStyle, {
          x: 100 + i * 20,
          y: 100 + i * 20,
          name: colors[i],
          fill: colors[i]
        })
        group.add(new Konva.Rect(data))
      }
      // 修改鼠标样式
      group.on('mouseover', function() {
        document.body.style.cursor = 'pointer'
      })
      group.on('mouseout', function() {
        document.body.style.cursor = 'default'
      })
      layer.add(group)
      layer.batchDraw()
    }
  }
}
</script>

