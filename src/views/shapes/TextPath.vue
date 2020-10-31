<template>
  <div class="app-container">
    <div><h1>创建弯曲文字</h1></div>
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
  name: 'TextPathT',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 0,
        y: 50,
        fill: '#333',
        fontSize: 16,
        fontFamily: 'Arial',
        text: 'All the world\'s a stage, and all the men and women merely players.',
        data: 'M10,10 C0,0 10,150 100,100 S300,150 5.0.300'
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
      const graph = new Konva.TextPath(prop)
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
