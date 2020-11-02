<template>
  <div class="app-container">
    <div><h1>调整文本宽度</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ResizeText',
  mixins: [konva],
  data() {
    return {
      text: {
        x: 50,
        y: 60,
        fontSize: 20,
        text: 'Hello from the Konva framework. Try to resize me.',
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
      const text = new Konva.Text(this.text)
      layer.add(text)
      const MIN_WIDTH = 20
      const tr = new Konva.Transformer({
        nodes: [text],
        padding: 5,
        // enable only side anchors
        enabledAnchors: ['middle-left', 'middle-right'],
        // limit transformer size
        boundBoxFunc: (oldBox, newBox) => {
          if (newBox.width < MIN_WIDTH) {
            return oldBox
          }
          return newBox
        }
      })
      layer.add(tr)
      text.on('transform', () => {
        // with enabled anchors we can only change scaleX
        // so we don't need to reset height
        // just width
        text.setAttrs({
          width: Math.max(text.width() * text.scaleX(), MIN_WIDTH),
          scaleX: 1,
          scaleY: 1
        })
      })
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

