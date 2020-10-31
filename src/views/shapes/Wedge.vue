<template>
  <div class="app-container">
    <div><h1>创建扇形</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(wedge)">创建扇形</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'WedgeT',
  mixins: [konva],
  data() {
    return {
      wedge: {
        x: 200,
        y: 200,
        radius: 70,
        angle: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        rotation: -120
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
      const graph = new Konva.Wedge(prop)
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功\n', graph)
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
