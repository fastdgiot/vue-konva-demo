<template>
  <div class="app-container">
    <div><h1>创建折线2</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(line1)">创建折线1</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'LinePolygon',
  mixins: [konva],
  data() {
    return {
      line1: {
        points: [23, 20, 23, 160, 70, 93, 150, 109, 240, 164, 270, 93],
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true
      }
    }
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    addElem(prop) {
      const layer = this.pageLayer[0].layer
      const graph = new Konva.Line(prop)
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功', graph)
    }
  }
}
</script>

