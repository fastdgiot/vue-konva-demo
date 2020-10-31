<template>
  <div class="app-container">
    <div><h1>创建模型</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem()">创建图形</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeT',
  mixins: [konva],
  data() {
    return {}
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201031
     */
    addElem() {
      const layer = this.pageLayer[0].layer
      const graph = new Konva.Shape({
        sceneFunc: (context, shape) => {
          context.beginPath()
          context.moveTo(20, 50)
          context.lineTo(220, 80)
          context.quadraticCurveTo(150, 100, 260, 170)
          context.closePath()
          context.fillStrokeShape(shape)
        },
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      })
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功\n', graph)
    }
  }
}
</script>
