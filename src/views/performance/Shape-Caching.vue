<template>
  <div class="app-container">
    <div><h1>使用缓存</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeCaching',
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
      const star = new Konva.Star({
        innerRadius: 20,
        outerRadius: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        numPoints: 5,
        x: 60,
        y: 60,
        draggable: true,
        shadowOffset: { x: 5, y: 5 },
        shadowColor: 'black',
        shadowBlur: 5,
        shadowOpacity: 0.5,
        shadowForStrokeEnabled: false
      })
      star.cache()
      const main = this.$refs.container
      for (let n = 0; n < 10; n++) {
        const clone = star.clone({
          x: Math.random() * main.offsetWidth,
          y: Math.random() * main.offsetHeight
        })
        clone.cache()
        layer.add(clone)
      }
      layer.draw()
    }
  }
}
</script>
