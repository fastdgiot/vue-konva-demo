<template>
  <div class="app-container">
    <div><h1>动画暂停</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="anim.start()">开始</el-button>
        <el-button type="primary" @click="anim.stop()">停止</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'StopAnimation',
  mixins: [konva],
  data() {
    return {
      // 动画
      anim: null
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
      const hexagon = new Konva.RegularPolygon({
        x: 200,
        y: 200,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      })
      layer.add(hexagon)
      layer.draw()

      const amplitude = 150
      // in ms
      const period = 2000
      const centerX = 200

      this.anim = new Konva.Animation(function(frame) {
        hexagon.x(
          amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
        )
      }, layer)
    }
  }
}
</script>
