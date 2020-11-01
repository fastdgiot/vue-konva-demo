<template>
  <div class="app-container">
    <div><h1>取消监听事件</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="closeMonitoring">取消事件监听</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'RemoveEventListener',
  mixins: [konva],
  data() {
    return {
      propStyle: {
        x: 120,
        y: 120,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      },
      // 创建的元素
      prop: ''
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
      const propStyle = new Konva.Circle(this.propStyle)
      propStyle.on('click', () => {
        this.$message({
          message: `触发监听事件`
        })
      })
      this.prop = propStyle
      layer.add(propStyle)
      layer.batchDraw()
    },
    /**
     * 按钮--关闭监听事件
     */
    closeMonitoring() {
      this.prop.off('click')
      this.$message({
        message: `关闭监听事件`,
        type: 'success'
      })
    }
  }
}
</script>

