<template>
  <div class="app-container">
    <div><h1>通过父级监听事件</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="closeMonitoring('click.event1')">取消事件1监听</el-button>
        <el-button type="primary" @click="closeMonitoring('click.event2')">取消事件2监听</el-button>
        <el-button type="primary" @click="closeMonitoring('click')">取消事件ALL监听</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'EventDelegation',
  mixins: [konva],
  data() {
    return {
      propStyle: {
        x: 240,
        y: 120,
        numPoints: 15,
        innerRadius: 40,
        outerRadius: 70,
        fill: 'blue',
        scale: {
          x: 2,
          y: 0.5
        },
        name: 'my star'
      }
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
      const prop = new Konva.Star(this.propStyle)
      layer.on('click', (evt) => {
        const shape = evt.target
        this.$message({
          message: `点击了${shape.name()}`
        })
      })
      layer.add(prop)
      layer.batchDraw()
    }
  }
}
</script>

