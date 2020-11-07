<template>
  <div class="app-container">
    <div><h1>线性宽松</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'LinearEasing',
  mixins: [konva],
  data() {
    return {}
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
      const greenBox = new Konva.Rect({
        x: 170,
        y: 200,
        width: 100,
        height: 50,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: 50,
          y: 25
        }
      })
      const blueBox = new Konva.Rect({
        x: 290,
        y: 200,
        width: 100,
        height: 50,
        fill: 'blue',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: 50,
          y: 25
        }
      })
      const redBox = new Konva.Rect({
        x: 410,
        y: 200,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: 50,
          y: 25
        }
      })
      layer.add(greenBox)
      layer.add(blueBox)
      layer.add(redBox)
      layer.draw()

      greenBox.tween = new Konva.Tween({
        node: greenBox,
        scaleX: 2,
        scaleY: 1.5,
        easing: Konva.Easings.EaseIn,
        duration: 1
      })

      blueBox.tween = new Konva.Tween({
        node: blueBox,
        scaleX: 2,
        scaleY: 1.5,
        easing: Konva.Easings.EaseInOut,
        duration: 1
      })

      redBox.tween = new Konva.Tween({
        node: redBox,
        scaleX: 2,
        scaleY: 1.5,
        easing: Konva.Easings.EaseOut,
        duration: 1
      })

      // use event delegation
      layer.on('mouseover touchstart', function(evt) {
        evt.target.tween.play()
      })

      layer.on('mouseout touchend', function(evt) {
        evt.target.tween.reverse()
      })
    }
  }
}
</script>
