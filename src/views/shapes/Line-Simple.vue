<template>
  <div class="app-container">
    <div><h1>创建折线1</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(line1)">创建折线1</el-button>
        <el-button type="primary" @click="addElem(line2)">创建折线2</el-button>
        <el-button type="primary" @click="addElem(line3)">创建折线3</el-button>
        <!--<el-button type="primary" @click="clearDraw">清空画布</el-button>-->
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'LineSimple',
  mixins: [konva],
  data() {
    return {
      line1: {
        points: [5, 70, 140, 23, 250, 60, 300, 20], // 这个是折线的点,两个一组,生成时我再随机生成,顶替掉这个
        stroke: 'red',
        strokeWidth: 15,
        lineCap: 'round',
        lineJoin: 'round'
      },
      line2: {
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'green',
        strokeWidth: 2,
        lineJoin: 'round',
        /*
         * 长度为33px的线段
         * 间隔为10px
         */
        dash: [33, 10]
      },
      line3: {
        points: [5, 70, 140, 23, 250, 60, 300, 20],
        stroke: 'blue',
        strokeWidth: 10,
        lineCap: 'round',
        lineJoin: 'round',
        /*
         * 带间隔的长度为29px的线段
         * 为20px，后面是0.001px(点)的线段
         * 然后是20px的间隔
         */
        dash: [29, 20, 0.001, 20]
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
      const item = Object.assign({}, prop, {
        points: this.getLineLoca()
      })
      const graph = new Konva.Line(item)
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功', graph)
    },
    /**
     * 调用--生成折线位置
     * @returns {*[]}
     */
    getLineLoca() {
      const nu = parseInt(20 * Math.random())
      const ar0 = []
      for (let i = 0; i <= nu; i++) {
        const sj1 = parseInt(40 * Math.random()) + i * 20 + 50
        const sj2 = parseInt(40 * Math.random()) + i * 20 + 50
        ar0.push(sj1, sj2)
      }
      return ar0
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
