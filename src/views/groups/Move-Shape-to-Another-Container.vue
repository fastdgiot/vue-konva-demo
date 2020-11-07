<template>
  <div class="app-container">
    <div><h1>图层区分</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="toBlue">交给蓝色</el-button>
        <el-button type="primary" @click="toYellow">交给黄色</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeLayering',
  mixins: [konva],
  data() {
    return {
      // 黄色盒子
      yellowGroup: null,
      // 蓝色盒子
      blueGroup: null,
      // 子级元素
      box: null
    }
  },
  created() {
    // 因为第一个图层是10ms后创建的,避免图层未创建问题
    setTimeout(() => {
      this.addElem()
    }, 20)
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201101
     */
    addElem() {
      const layer = this.pageLayer[0].layer
      const yellowGroup = new Konva.Group({
        x: 300,
        y: 100,
        draggable: true
      })
      this.yellowGroup = yellowGroup
      const blueGroup = new Konva.Group({
        x: 100,
        y: 100,
        draggable: true
      })
      this.blueGroup = blueGroup
      const box = new Konva.Rect({
        x: 10,
        y: 10,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black'
      })
      this.box = box
      const yellowCircle = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 50,
        fill: 'yellow',
        stroke: 'black'
      })
      const blueCircle = new Konva.Circle({
        x: 0,
        y: 0,
        radius: 50,
        fill: 'blue',
        stroke: 'black'
      })
      yellowGroup.add(yellowCircle)
      yellowGroup.add(box)
      blueGroup.add(blueCircle)
      layer.add(yellowGroup)
      layer.add(blueGroup)
      layer.draw()
    },
    /**
     * 交给蓝色
     */
    toBlue() {
      this.box.moveTo(this.blueGroup)
      this.pageLayer[0].layer.draw()
    },
    /**
     * 交给黄色
     */
    toYellow() {
      this.box.moveTo(this.yellowGroup)
      this.pageLayer[0].layer.draw()
    }
  }
}
</script>
