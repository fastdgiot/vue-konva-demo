<template>
  <div class="app-container">
    <div><h1>取消监听事件(通过名称)</h1></div>
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
  name: 'RemoveEventListenerByName',
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
      propStyle.on('click.event1', () => {
        this.$message({
          message: `触发监听事件1`
        })
      })
      propStyle.on('click.event2', () => {
        setTimeout(() => {
          this.$message({
            message: `触发监听事件2`
          })
        }, 20)
      })
      this.prop = propStyle
      layer.add(propStyle)
      layer.batchDraw()
    },
    /**
     * 按钮--关闭监听事件
     * @param name 事件名称
     */
    closeMonitoring(name) {
      this.prop.off(name)
      this.$message({
        message: `关闭监听事件${name}`,
        type: 'success'
      })
    }
  }
}
</script>

