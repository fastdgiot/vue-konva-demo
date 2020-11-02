<template>
  <div class="app-container">
    <div><h1>旋转捕捉</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'CenteredScaling2',
  mixins: [konva],
  data() {
    return {
      textStyle: {
        x: 50,
        y: 70,
        fontSize: 30,
        text: '旋转该文本',
        draggable: true
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
      const prop = new Konva.Text(this.textStyle)
      const tr1 = new Konva.Transformer({
        nodes: [prop],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: false
      })
      layer.add(prop)
      layer.add(tr1)
      layer.batchDraw()
    }
  }
}
</script>

