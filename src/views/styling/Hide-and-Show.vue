<template>
  <div class="app-container">
    <div><h1>显示及隐藏(鼠标移入改变)</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button :disabled="isShow" type="primary" @click="hideProp">隐藏</el-button>
        <el-button :disabled="!isShow" type="primary" @click="hideProp">显示</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'HideAndShow',
  mixins: [konva],
  data() {
    return {
      porpStyle: {
        x: 100,
        y: 100,
        sides: 3,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 20,
        lineJoin: 'bevel'
      },
      // 是否在展示
      isShow: false
    }
  },
  created() {
    setTimeout(() => {
      this.initialize()
    }, 20)
  },
  methods: {
    /**
     * 初始化--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    initialize() {
      const layer = this.pageLayer[0].layer
      const porpStyle = new Konva.RegularPolygon(this.porpStyle)
      layer.add(porpStyle)
      layer.batchDraw()
    },
    /**
     * 按钮--显示隐藏元素
     */
    hideProp() {
      const layer = this.pageLayer[0].layer
      const ch = this.pageLayer[0].layer.children[0]
      if (this.isShow) {
        ch.show()
      } else {
        ch.hide()
      }
      this.isShow = !this.isShow
      layer.draw()
    }
  }
}
</script>

