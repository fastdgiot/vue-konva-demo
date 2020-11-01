<template>
  <div class="app-container">
    <div><h1>监听tr属性</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'TransformEvents',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 160,
        y: 60,
        width: 100,
        height: 90,
        fill: 'red',
        name: 'rect',
        stroke: 'black',
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
      const text = new Konva.Text({
        x: 5,
        y: 5
      })
      layer.add(text)
      const prop = new Konva.Rect(this.prop)
      const tr = new Konva.Transformer({
        nodes: [prop]
      })
      layer.add(prop)
      layer.add(tr)
      layer.draw()
      prop.on('dragmove', () => this.updateText(layer, prop, text))
      prop.on('transform', () => this.updateText(layer, prop, text))
    },
    /**
     * 监听--改变左上角文字显示
     * @param layer
     * @param prop
     * @param text
     */
    updateText(layer, prop, text) {
      var lines = [
        'x: ' + prop.x(),
        'y: ' + prop.y(),
        'rotation: ' + prop.rotation(),
        'width: ' + prop.width(),
        'height: ' + prop.height(),
        'scaleX: ' + prop.scaleX(),
        'scaleY: ' + prop.scaleY()
      ]
      text.text(lines.join('\n'))
      layer.batchDraw()
    }
  }
}
</script>

