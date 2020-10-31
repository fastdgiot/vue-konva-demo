<template>
  <div class="app-container">
    <div><h1>填充样式(鼠标移入改变)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'Fill',
  mixins: [konva],
  data() {
    return {
      regular1: {
        x: 100,
        y: 100,
        sides: 5,
        radius: 70,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      regular2: {
        x: 250,
        y: 100,
        sides: 5,
        radius: 70,
        // fillPatternImage: this.image1, 创建时引用
        fillPatternOffset: { x: -220, y: 70 },
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      regular3: {
        x: 400,
        y: 100,
        sides: 5,
        radius: 70,
        fillLinearGradientStartPoint: { x: -50, y: -50 },
        fillLinearGradientEndPoint: { x: 50, y: 50 },
        fillLinearGradientColorStops: [0, 'red', 1, 'yellow'],
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      regular4: {
        x: 550,
        y: 100,
        sides: 5,
        radius: 70,
        fillRadialGradientStartPoint: { x: 0, y: 0 },
        fillRadialGradientStartRadius: 0,
        fillRadialGradientEndPoint: { x: 0, y: 0 },
        fillRadialGradientEndRadius: 70,
        fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue'],
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      },
      // 图片素材(提前加载,避免第一次鼠标移入时图片加载不及时问题)
      image1: this.getImage('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg'),
      image2: this.getImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604148522559&di=64249dac7feba736a2221b0b097e3e58&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190318%2F15%2F1552892712-qcNoTJbUlV.jpg')
    }
  },
  created() {
    setTimeout(() => {
      this.initialize()
    }, 20)
  },
  methods: {
    /**
     * 初始化--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    initialize() {
      const _this = this
      const layer = this.pageLayer[0].layer
      const regular1 = new Konva.RegularPolygon(this.regular1)
      this.regular2.fillPatternImage = this.image1 // 引入图片
      const regular2 = new Konva.RegularPolygon(this.regular2)
      const regular3 = new Konva.RegularPolygon(this.regular3)
      const regular4 = new Konva.RegularPolygon(this.regular4)
      // handler必须使用function,不然会this重定向错误
      regular1.on('mouseover touchstart', function() {
        this.fill('blue')
        layer.draw()
      })
      regular1.on('mouseout touchend', function() {
        this.fill('red')
        layer.draw()
      })
      regular2.on('mouseover touchstart', function() {
        this.fillPatternImage(_this.image2)
        this.fillPatternOffset({ x: -100, y: 70 })
        layer.draw()
      })
      regular2.on('mouseout touchend', function() {
        this.fillPatternImage(_this.image1)
        this.fillPatternOffset({ x: -220, y: 70 })
        layer.draw()
      })
      regular3.on('mouseover touchstart', function() {
        this.fillLinearGradientStartPoint({ x: -50 })
        this.fillLinearGradientEndPoint({ x: 50 })
        this.fillLinearGradientColorStops([0, 'green', 1, 'yellow'])
        layer.draw()
      })
      regular3.on('mouseout touchend', function() {
        // 使用setAttrs一次性设置多个属性
        this.setAttrs({
          fillLinearGradientStartPoint: { x: -50, y: -50 },
          fillLinearGradientEndPoint: { x: 50, y: 50 },
          fillLinearGradientColorStops: [0, 'red', 1, 'yellow']
        })
        layer.draw()
      })
      regular4.on('mouseover touchstart', function() {
        this.fillRadialGradientColorStops([0, 'red', 0.5, 'yellow', 1, 'green'])
        layer.draw()
      })
      regular4.on('mouseout touchend', function() {
        this.setAttrs({
          fillRadialGradientStartPoint: 0,
          fillRadialGradientStartRadius: 0,
          fillRadialGradientEndPoint: 0,
          fillRadialGradientEndRadius: 70,
          fillRadialGradientColorStops: [0, 'red', 0.5, 'yellow', 1, 'blue']
        })
        layer.draw()
      })
      layer.add(regular1)
      layer.add(regular2)
      layer.add(regular3)
      layer.add(regular4)
      layer.batchDraw()
    }
  }
}
</script>

