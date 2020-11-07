<template>
  <div class="app-container">
    <div><h1>动画优化</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-checkbox v-model="property" @change="changeProperty">性能优化</el-checkbox>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'
// import Stats from '../../../public/static/js/stats.min.js'

export default {
  name: 'OptimizingStrokes',
  mixins: [konva],
  data() {
    return {
      property: true
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
      const main = this.$refs.container
      const layer = this.pageLayer[0].layer
      for (var i = 0; i < 100; i++) {
        const shape = new Konva.Circle({
          x: main.offsetWidth * Math.random(),
          y: main.offsetHeight * Math.random(),
          radius: 10 + 10 * Math.random(),
          fill: Konva.Util.getRandomColor(),
          stroke: 'black',
          shadowColor: 'black',
          draggable: true,
          shadowOffset: {
            x: 5,
            y: 5
          }
        })
        layer.add(shape)
      }
      layer.draw()
      // const stats = new Stats()
      const anim = new Konva.Animation(() => {
        // stats.end()
        layer.children.forEach((child) => {
          child.move({
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 5
          })
        })
        // stats.begin()
      }, layer)
      anim.start()
      this.changeProperty(true)
    },
    changeProperty(boo) {
      const layer = this.pageLayer[0].layer
      layer.children.forEach(item => {
        item.hitStrokeWidth(boo ? 0 : 'auto')
        item.shadowForStrokeEnabled(!boo)
      })
    }
  }
}
</script>
