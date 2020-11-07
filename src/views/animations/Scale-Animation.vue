<template>
  <div class="app-container">
    <div><h1>反转动画</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'Scale',
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
      const blueRect = new Konva.Rect({
        x: 50,
        y: 75,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      })
      const yellowRect = new Konva.Rect({
        x: 220,
        y: 75,
        width: 100,
        height: 50,
        fill: 'yellow',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: 50,
          y: 25
        }
      })

      const redRect = new Konva.Rect({
        x: 400,
        y: 75,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        offset: {
          x: -100,
          y: 0
        }
      })

      layer.add(blueRect)
      layer.add(yellowRect)
      layer.add(redRect)

      const angularSpeed = 90
      const anim = new Konva.Animation(function(frame) {
        const angleDiff = (frame.timeDiff * angularSpeed) / 1000
        blueRect.rotate(angleDiff)
        yellowRect.rotate(angleDiff)
        redRect.rotate(angleDiff)
      }, layer)
      anim.start()
    }
  }
}
</script>
