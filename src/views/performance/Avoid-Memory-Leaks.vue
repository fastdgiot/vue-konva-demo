<template>
  <div class="app-container">
    <div><h1>清除节点（完全删除最好用destroy）</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="removeDom">remove</el-button>
        <el-button type="primary" @click="destroyDom">destroy</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'AvoidMemoryLeaks',
  mixins: [konva],
  data() {
    return {
      circle: null
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
      const circle = new Konva.Circle({
        x: 100,
        y: 100,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      })
      const box = new Konva.Group({
        x: 200,
        y: 100
      })
      box.add(circle)
      layer.add(box)
      layer.batchDraw()
      this.circle = circle
    },
    removeDom() {
      const layer = this.pageLayer[0].layer
      this.circle.remove()
      layer.batchDraw()
    },
    destroyDom() {
      const layer = this.pageLayer[0].layer
      this.circle.destroy()
      layer.batchDraw()
    }
  }
}
</script>
