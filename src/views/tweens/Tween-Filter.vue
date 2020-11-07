<template>
  <div class="app-container">
    <div><h1>结合鼠标移入事件</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'TweenFilter',
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
      const img = new Image()
      img.src = './static/cs0.jpg'
      img.onload = () => {
        const layer = this.pageLayer[0].layer
        const lion = new Konva.Image({
          image: img,
          x: 80,
          y: 30,
          draggable: true
        })
        lion.cache()
        lion.filters([Konva.Filters.Blur])
        lion.blurRadius(10)
        layer.add(lion)
        layer.draw()
        const tween = new Konva.Tween({
          node: lion,
          duration: 0.6,
          blurRadius: 0,
          easing: Konva.Easings.EaseInOut
        })
        lion.on('mouseover', function() {
          tween.play()
        })
        lion.on('mouseout', function() {
          tween.reverse()
        })
      }
    }
  }
}
</script>
