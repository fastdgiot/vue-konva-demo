<template>
  <div class="app-container">
    <div><h1>监听特殊图形（线和星形）</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="closeMonitoring('click.event1')">取消事件1监听</el-button>
        <el-button type="primary" @click="closeMonitoring('click.event2')">取消事件2监听</el-button>
        <el-button type="primary" @click="closeMonitoring('click')">取消事件ALL监听</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'CustomHitFunction',
  mixins: [konva],
  data() {
    return {
      textStyle: {
        x: 10,
        y: 10,
        fontSize: 24,
        fill: 'black'
      },
      propStyle: {
        x: 240,
        y: 120,
        numPoints: 7,
        innerRadius: 50,
        outerRadius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        hitFunc: function(context) {
          context.beginPath()
          context.arc(0, 0, this.outerRadius() + 10, 0, Math.PI * 2, true)
          context.closePath()
          context.fillStrokeShape(this)
        }
      },
      lineStyle: {
        x: 50,
        y: 100,
        points: [0, 0, 50, 0, 50, 100, 0, 100],
        tension: 1,
        strokeWidth: 1,
        hitStrokeWidth: 20,
        stroke: 'black'
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
      const text = new Konva.Text(this.textStyle)
      const prop = new Konva.Star(this.propStyle)
      prop.on('mouseover', function() {
        text.text('鼠标移至星')
        layer.draw()
      })
      prop.on('mouseout', function() {
        text.text('鼠标移出星')
        layer.draw()
      })
      prop.on('mousedown', function() {
        text.text('鼠标点击星')
        layer.draw()
      })
      prop.on('mouseup', function() {
        text.text('鼠标放开星')
        layer.draw()
      })
      const line = new Konva.Line(this.lineStyle)
      line.on('mouseover', function() {
        text.text('鼠标移至线')
        layer.draw()
      })
      line.on('mouseout', function() {
        text.text('鼠标移出线')
        layer.draw()
      })
      line.on('mousedown', function() {
        text.text('鼠标点击线')
        layer.draw()
      })
      line.on('mouseup', function() {
        text.text('鼠标放开线')
        layer.draw()
      })
      layer.add(text)
      layer.add(prop)
      layer.add(line)
      layer.batchDraw()
    }
  }
}
</script>

