<template>
  <div class="app-container">
    <div><h1>创建椭圆</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(ellipse)">创建椭圆</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'EllipseT',
  mixins: [konva],
  data() {
    return {
      ellipse: {
        x: 200,
        y: 160,
        radiusX: 100,
        radiusY: 50,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4
      }
    }
  },
  methods: {
    /**
     * 按钮--创建一个椭圆 yyshu 20201031
     * @param prop 属性
     */
    addElem(prop) {
      const layer = this.pageLayer[0].layer
      const circle = new Konva.Ellipse(prop)
      layer.add(circle)
      layer.batchDraw()
      console.log('创建矩形成功', circle)
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
