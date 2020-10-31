<template>
  <div class="app-container">
    <div><h1>创建箭头</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(prop)">创建图形</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ArrowT',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 100,
        y: 100,
        points: [0, 0, 500, 180],
        pointerLength: 20,
        pointerWidth: 20,
        fill: 'black',
        stroke: 'black',
        strokeWidth: 4
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
      const graph = new Konva.Arrow(prop)
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功\n', graph)
    }
  }
}
</script>

