<template>
  <div class="app-container">
    <div><h1>监听鼠标事件(移入/移出/点击/松开)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeEvents',
  mixins: [konva],
  data() {
    return {
      textProp: {
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: 'Mouseout triangle',
        fill: 'black'
      },
      propStyle1: {
        x: 120,
        y: 120,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      },
      propStyle2: {
        x: 300,
        y: 100,
        radius: 60,
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
      const text = new Konva.Text(this.textProp)
      const propStyle1 = new Konva.RegularPolygon(this.propStyle1)
      propStyle1.on('mouseout', function() {
        text.text('Mouseout triangle')
        layer.draw()
      })
      // 以后监听鼠标就用这个,不要外部监听了
      propStyle1.on('mousemove', function() {
        const mousePos = stage.getPointerPosition()
        const x = mousePos.x - 190
        const y = mousePos.y - 40
        text.text('x: ' + x + ', y: ' + y)
        layer.draw()
      })
      const propStyle2 = new Konva.Circle(this.propStyle2)
      propStyle2.on('mouseover', function() {
        text.text('Mouseover circle')
        layer.draw()
      })
      propStyle2.on('mouseout', function() {
        text.text('Mouseout circle')
        layer.draw()
      })
      propStyle2.on('mousedown', function() {
        text.text('Mousedown circle')
        layer.draw()
      })
      propStyle2.on('mouseup', function() {
        text.text('Mouseup circle')
        layer.draw()
      })
      layer.add(text)
      layer.add(propStyle1)
      layer.add(propStyle2)
      layer.batchDraw()
    }
  }
}
</script>

