<template>
  <div class="app-container">
    <div><h1>创建折线3</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(line1)">创建折线1</el-button>
        <el-button type="primary" @click="addElem(line2)">创建折线2</el-button>
        <el-button type="primary" @click="addElem(line3)">创建折线3</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'LineSpline',
  mixins: [konva],
  data() {
    return {
      line1: {
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'red',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round',
        tension: 1
      },
      line2: {
        points: [25, 90, 160, 43, 270, 80, 320, 40],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        dash: [33, 10],
        lineCap: 'round',
        tension: 0.5
      },
      line3: {
        points: [45, 110, 180, 63, 290, 100, 340, 60],
        stroke: 'blue',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        dash: [29, 20, 0.001, 20],
        tension: 0.7
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

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    width: 100%;
    height: 420px;
    margin-bottom: 10px;
    border: 1px solid red;
    background-color: antiquewhite;
  }
}
</style>
