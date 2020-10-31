<template>
  <div class="app-container">
    <div><h1>创建矩形</h1></div>
    <div id="container" ref="container" class="container" />
    <div class="page_but">
      <el-row>
        <el-col>
          <el-button type="primary" @click="addDlock(rect1)">创建矩形1</el-button>
          <el-button type="primary" @click="addDlock(rect2)">创建矩形2</el-button>
          <el-button type="primary" @click="addDlock(rect3)">创建矩形3</el-button>
          <el-button type="primary" @click="addDlock(rect4)">创建矩形4</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'RectT',
  mixins: [konva],
  data() {
    return {
      rect1: {
        x: 5,
        y: 5,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1
      },
      rect2: {
        x: 100,
        y: 40,
        width: 200,
        height: 20,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4
      },
      rect3: {
        x: 220,
        y: 80,
        width: 100,
        height: 50,
        fill: 'red',
        shadowBlur: 10,
        cornerRadius: 10
      },
      rect4: {
        x: 50,
        y: 120,
        width: 100,
        height: 100,
        fill: 'blue',
        cornerRadius: [0, 10, 20, 30]
      }
    }
  },
  methods: {
    /**
     * 按钮--创建一个矩形 yyshu 20201031
     * @param rect 矩形属性
     */
    addDlock(rect) {
      const layer = this.pageLayer[0].layer
      const rect1 = new Konva.Rect(rect)
      layer.add(rect1)
      layer.batchDraw()
      console.log('创建矩形成功', rect1)
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
  //border: 1px solid red;

  .container {
    width: 100%;
    height: 420px;
    border: 1px solid red;
    background-color: antiquewhite;
  }

  .page_but {
    margin-top: 20px;
  }
}
</style>
