<template>
  <div class="app-container">
    <div><h1>增加元素</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addDom">增加元素</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'TransformEvents2',
  mixins: [konva],
  data() {
    return {
      // 盒子
      group: '',
      // 变压器
      tr: ''
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
      this.group = new Konva.Group({
        x: 50,
        y: 50,
        draggable: true
      })
      layer.add(this.group)
      this.tr = new Konva.Transformer()
      layer.add(this.tr)
      this.addDom()
      this.tr.nodes([this.group])
      layer.draw()
    },
    /**
     * 按钮--增加元素
     */
    addDom() {
      const layer = this.pageLayer[0].layer
      const group = this.group
      const tr = this.tr
      console.log(tr)
      group.add(
        new Konva.Circle({
          x: Math.random() * 100,
          y: Math.random() * 100,
          radius: Math.random() * 100,
          fill: Konva.Util.getRandomColor(),
          stroke: 'black',
          strokeWidth: Math.random() * 10
        })
      )
      // force update manually
      tr.forceUpdate()
      layer.draw()
    }
  }
}
</script>

