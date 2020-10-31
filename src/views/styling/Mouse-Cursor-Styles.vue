<template>
  <div class="app-container">
    <div><h1>改变鼠标样式(鼠标移入改变)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'MouseCursorStyles',
  mixins: [konva],
  data() {
    return {
      porpStyle1: {
        x: 100,
        y: 100,
        sides: 5,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      porpStyle2: {
        x: 250,
        y: 100,
        sides: 5,
        radius: 70,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      porpStyle3: {
        x: 400,
        y: 100,
        sides: 5,
        radius: 70,
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      }
    }
  },
  created() {
    setTimeout(() => {
      this.initialize()
    }, 20)
  },
  methods: {
    /**
     * 初始化--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    initialize() {
      const stage = this.pageStage // 这个在混入中
      const layer = this.pageLayer[0].layer
      const porpStyle1 = new Konva.RegularPolygon(this.porpStyle1)
      porpStyle1.on('mouseenter', function() {
        stage.container().style.cursor = 'pointer'
      })
      porpStyle1.on('mouseleave', function() {
        stage.container().style.cursor = 'default'
      })
      const porpStyle2 = new Konva.RegularPolygon(this.porpStyle2)
      porpStyle2.on('mouseenter', function() {
        stage.container().style.cursor = 'move'
      })

      porpStyle2.on('mouseleave', function() {
        stage.container().style.cursor = 'default'
      })
      const porpStyle3 = new Konva.RegularPolygon(this.porpStyle3)
      porpStyle3.on('mouseenter', function() {
        stage.container().style.cursor = 'crosshair'
      })
      porpStyle3.on('mouseleave', function() {
        stage.container().style.cursor = 'default'
      })
      layer.add(porpStyle1)
      layer.add(porpStyle2)
      layer.add(porpStyle3)
      layer.batchDraw()
    }
  }
}
</script>

