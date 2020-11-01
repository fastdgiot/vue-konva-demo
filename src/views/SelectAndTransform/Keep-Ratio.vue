<template>
  <div class="app-container">
    <div><h1>保持比例 keepRatio</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'KeepRatio',
  mixins: [konva],
  data() {
    return {
      text1: {
        x: 50,
        y: 70,
        fontSize: 30,
        text: 'keepRatio = true',
        draggable: true
      },
      text2: {
        x: 50,
        y: 200,
        fontSize: 30,
        text: 'keepRatio = false',
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
      const text1 = new Konva.Text(this.text1)
      const t1 = new Konva.Transformer({
        nodes: [text1],
        keepRatio: true,
        enabledAnchors: [
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'
        ]
      })
      layer.add(text1)
      layer.add(t1)
      const text2 = new Konva.Text(this.text2)
      const t2 = new Konva.Transformer({
        nodes: [text2],
        keepRatio: false,
        enabledAnchors: [
          'top-left',
          'top-right',
          'bottom-left',
          'bottom-right'
        ]
      })
      layer.add(text2)
      layer.add(t2)
      layer.draw()
    }
  }
}
</script>

