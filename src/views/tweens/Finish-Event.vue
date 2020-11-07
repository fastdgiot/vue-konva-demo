<template>
  <div class="app-container">
    <div><h1>动画完成事件</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="startFunc">动画开始</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'FinishEvent',
  mixins: [konva],
  data() {
    return {
      star: null
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
      const star = new Konva.Star({
        x: 200,
        y: 200,
        numPoints: 8,
        outerRadius: 70,
        innerRadius: 50,
        fill: 'purple',
        stroke: 'black',
        strokeWidth: 5,
        lineJoin: 'bevel'
      })
      layer.add(star)
      layer.draw()
      this.star = star
      this.tween = new Konva.Tween({
        node: star,
        duration: 4,
        rotation: 360,
        easing: Konva.Easings.BackEaseOut,
        onFinish: () => this.finishFunc()
      })
    },
    /**
     * 动画开始
     */
    startFunc() {
      this.$message({
        message: `动画开始`
      })
      const tween = new Konva.Tween({
        node: this.star,
        duration: 4,
        rotation: 360,
        easing: Konva.Easings.BackEaseOut,
        onFinish: () => this.finishFunc(tween)
      })
      tween.play()
    },
    finishFunc(tween) {
      this.$message({
        message: `动画完成`
      })
      tween.reset() // 重置动画,可再次触发该动画
    }
  }
}
</script>
