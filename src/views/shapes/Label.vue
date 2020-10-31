<template>
  <div class="app-container">
    <div><h1>创建标题</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem">创建标题1</el-button>
        <el-button type="primary" @click="addElem2">创建标题2</el-button>
        <el-button type="primary" @click="addElem3">创建标题3</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'LabelT',
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
      const graph = new Konva.Label({
        x: 100,
        y: 100,
        opacity: 0.75
      })
      graph.add(
        new Konva.Tag({
          fill: 'black',
          pointerDirection: 'down',
          pointerWidth: 10,
          pointerHeight: 10,
          lineJoin: 'round',
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffsetX: 10,
          shadowOffsetY: 10,
          shadowOpacity: 0.5
        })
      )
      graph.add(
        new Konva.Text({
          text: 'Label pointing left',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white'
        })
      )
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功\n', graph)
    },
    addElem2() {
      const layer = this.pageLayer[0].layer
      const graph = new Konva.Label({
        x: 180,
        y: 150,
        opacity: 0.75
      })
      graph.add(
        new Konva.Tag({
          fill: 'yellow'
        })
      )
      graph.add(
        new Konva.Text({
          text: 'Simple label',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'black'
        })
      )
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功\n', graph)
    },
    addElem3() {
      const layer = this.pageLayer[0].layer
      const graph = new Konva.Label({
        x: 180,
        y: 150,
        opacity: 0.75
      })
      graph.add(
        new Konva.Tag({
          fill: 'green',
          pointerDirection: 'left',
          pointerWidth: 20,
          pointerHeight: 28,
          lineJoin: 'round'
        })
      )
      graph.add(
        new Konva.Text({
          text: 'Label pointing left',
          fontFamily: 'Calibri',
          fontSize: 18,
          padding: 5,
          fill: 'white'
        })
      )
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
