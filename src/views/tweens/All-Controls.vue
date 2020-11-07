<template>
  <div class="app-container">
    <div><h1>动画所有事件</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="tween.play()">动画播放</el-button>
        <el-button type="primary" @click="tween.pause()">动画暂停</el-button>
        <el-button type="primary" @click="tween.reverse()">动画倒放</el-button>
        <el-button type="primary" @click="tween.reset()">位置重置</el-button>
        <el-button type="primary" @click="tween.seek(3)">位置移至第三秒</el-button>
        <el-button type="primary" @click="tween.finish()">位置移至完成位置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'AllControls',
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
      const rect = new Konva.Rect({
        x: 50,
        y: 130,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 2,
        opacity: 0.2
      })
      layer.add(rect)
      layer.draw()
      this.tween = new Konva.Tween({
        node: rect,
        duration: 6,
        x: 220,
        y: 75,
        rotation: Math.PI * 10,
        opacity: 1,
        strokeWidth: 6,
        scaleX: 1.3,
        scaleY: 1.3,
        easing: Konva.Easings.Linear,
        fillR: 0,
        fillG: 0,
        fillB: 255
      })
    }
  }
}
</script>
