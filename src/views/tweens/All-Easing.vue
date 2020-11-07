<template>
  <div class="app-container">
    <div><h1>AllEasing</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="toLeft">向右</el-button>
        <el-button type="primary" @click="toStop">停止</el-button>
        <el-button type="primary" @click="toRight">向左</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'AllEasing',
  mixins: [konva],
  data() {
    return {
      easings: [
        { name: 'Linear', color: 'blue' },
        { name: 'EaseIn', color: 'green' },
        { name: 'EaseOut', color: 'green' },
        { name: 'EaseInOut', color: 'green' },
        { name: 'BackEaseIn', color: 'blue' },
        { name: 'BackEaseOut', color: 'blue' },
        { name: 'BackEaseInOut', color: 'blue' },
        { name: 'ElasticEaseIn', color: 'green' },
        { name: 'ElasticEaseOut', color: 'green' },
        { name: 'ElasticEaseInOut', color: 'green' },
        { name: 'BounceEaseIn', color: 'blue' },
        { name: 'BounceEaseOut', color: 'blue' },
        { name: 'BounceEaseInOut', color: 'blue' },
        { name: 'StrongEaseIn', color: 'green' },
        { name: 'StrongEaseOut', color: 'green' },
        { name: 'StrongEaseInOut', color: 'green' }
      ],
      tweens: []
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
      this.easings.map((item, i) => {
        var text = new Konva.Text({
          x: 10,
          y: i * 27,
          padding: 4,
          text: (i + 1) + ') ' + item.name,
          fontSize: 18,
          fontFamily: 'Calibri',
          fill: item.color
        })
        layer.add(text)
        // the tween has to be created after the node has been added to the layer
        // add tween to tweens array
        this.tweens.push(new Konva.Tween({
          node: text,
          x: 480,
          easing: Konva.Easings[item.name],
          duration: 2
        }))
      })
      layer.draw()
    },
    toLeft() {
      this.tweens.map(item => item.play())
    },
    toStop() {
      this.tweens.map(item => item.pause())
    },
    toRight() {
      this.tweens.map(item => item.reverse())
    }
  }
}
</script>
