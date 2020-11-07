<template>
  <div class="app-container">
    <div><h1>序列化</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="textarea = pageStage.toJSON()">序列化</el-button>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="序列化"
          v-model="textarea">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'StopAnimation',
  mixins: [konva],
  data() {
    return {
      // 序列化
      textarea: ''
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
      const hexagon = new Konva.RegularPolygon({
        x: 200,
        y: 200,
        sides: 6,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      })
      layer.add(hexagon)
      layer.draw()
    }
  }
}
</script>
