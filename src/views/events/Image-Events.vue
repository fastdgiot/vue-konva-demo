<template>
  <div class="app-container">
    <div><h1>监听鼠标移入(图片)</h1></div>
    <div id="container" ref="container" class="container" />
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ImageEvents',
  mixins: [konva],
  data() {
    return {
      textProp: {
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
      },
      propStyle1: {
        x: 120,
        y: 120,
        sides: 3,
        radius: 80,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4
      },
      propStyle2: {
        x: 300,
        y: 100,
        radius: 60,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 4
      },
      // 图片素材(提前加载,避免第一次鼠标移入时图片加载不及时问题)
      image1: this.getImage('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg'),
      image2: this.getImage('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604148522559&di=64249dac7feba736a2221b0b097e3e58&imgtype=0&src=http%3A%2F%2Fimage.biaobaiju.com%2Fuploads%2F20190318%2F15%2F1552892712-qcNoTJbUlV.jpg')
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
      const text = new Konva.Text(this.textProp)
      const propStyle1 = new Konva.Image({
        image: this.image1,
        x: 120,
        y: 50,
        width: 100,
        height: 100
      })
      const propStyle2 = new Konva.Image({
        image: this.image2,
        x: 240,
        y: 50,
        width: 100,
        height: 100
      })
      propStyle1.on('mouseover', function() {
        text.text('第一张图片')
        layer.draw()
      })
      propStyle1.on('mouseout', function() {
        text.text('')
        layer.draw()
      })
      propStyle2.on('mouseover', function() {
        text.text('第二张图片')
        layer.draw()
      })
      propStyle2.on('mouseout', function() {
        text.text('')
        layer.draw()
      })
      layer.add(text)
      layer.add(propStyle1)
      layer.add(propStyle2)
      layer.batchDraw()
    }
  }
}
</script>

