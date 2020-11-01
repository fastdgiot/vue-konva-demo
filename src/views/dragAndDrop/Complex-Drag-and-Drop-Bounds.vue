<template>
  <div class="app-container">
    <div><h1>限定位置拖动</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ComplexDragAndDropBounds',
  mixins: [konva],
  data() {
    return {
      blueGroup: {
        x: 30,
        y: 70,
        draggable: true,
        dragBoundFunc: function(pos) {
          const newY = pos.y < 50 ? 50 : pos.y
          return {
            x: pos.x,
            y: newY
          }
        }
      },
      blueText: {
        fontSize: 26,
        fontFamily: 'Calibri',
        text: 'bound below',
        fill: 'black',
        padding: 10
      },
      blueRect: {
        fill: 'blue',
        stroke: 'black',
        shadowBlur: 10,
        strokeWidth: 4
      },
      yellowGroup: {
        x: 450,
        y: 70,
        draggable: true,
        dragBoundFunc: function(pos) {
          const x = 450
          const y = 70
          const radius = 50
          const scale = radius / Math.sqrt(Math.pow(pos.x - x, 2) + Math.pow(pos.y - y, 2))
          if (scale < 1) {
            return {
              y: Math.round((pos.y - y) * scale + y),
              x: Math.round((pos.x - x) * scale + x)
            }
          } else {
            return pos
          }
        }
      },
      yellowText: {
        fontSize: 26,
        fontFamily: 'Calibri',
        text: 'bound in circle',
        fill: 'black',
        padding: 10
      },
      yellowRect: {
        fill: 'yellow',
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
      const blueGroup = new Konva.Group(this.blueGroup)
      const blueText = new Konva.Text(this.blueText)
      const blueRect = new Konva.Rect(Object.assign({}, this.blueRect, {
        width: blueText.width(),
        height: blueText.height()
      }))
      const yellowGroup = new Konva.Group(this.yellowGroup)
      const yellowText = new Konva.Text(this.yellowText)
      const yellowRect = new Konva.Rect(Object.assign({}, this.yellowRect, {
        width: yellowText.width(),
        height: yellowText.height()
      }))
      blueGroup.add(blueRect).add(blueText)
      yellowGroup.add(yellowRect).add(yellowText)
      layer.add(blueGroup)
      layer.add(yellowGroup)
      layer.batchDraw()
    }
  }
}
</script>

