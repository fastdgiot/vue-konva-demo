<template>
  <div class="app-container">
    <div><h1>创建文字</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(prop)">创建文字</el-button>
        <el-button type="primary" @click="addElem(prop2)">创建文字2</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'TextT',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 100,
        y: 15,
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'green'
      },
      prop2: {
        x: 100,
        y: 60,
        text:
          "COMPLEX TEXT\n\nAll the world's a stage, and all the men and women merely players. They have their exits and their entrances.",
        fontSize: 18,
        fontFamily: 'Calibri',
        fill: '#555',
        width: 300,
        padding: 20,
        align: 'center'
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
      const graph = new Konva.Text(prop)
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
