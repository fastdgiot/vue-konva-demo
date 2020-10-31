<template>
  <div class="app-container">
    <div><h1>创建图片2</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(prop)">创建图形</el-button>
        <el-button type="primary" @click="addElem2()">创建图形2</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ImageT',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 50,
        y: 50,
        image: '',
        width: 106,
        height: 118
      }
    }
  },
  created() {
    const imageObj = new Image()
    imageObj.src = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg'
    this.prop.image = imageObj
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    addElem(prop) {
      const layer = this.pageLayer[0].layer
      const image = new Image()
      image.src = 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg'
      image.onload = () => {
        const data = Object.assign({}, prop, {
          image: image
        })
        const graph = new Konva.Image(data)
        layer.add(graph)
        layer.batchDraw()
      }
    },
    /**
     * 按钮--图片画法2 yyshu 20201031
     */
    addElem2() {
      const layer = this.pageLayer[0].layer
      Konva.Image.fromURL('https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3320388466,1933263842&fm=26&gp=0.jpg', darthNode => {
        darthNode.setAttrs({
          x: 200,
          y: 100,
          scaleX: 0.5,
          scaleY: 0.5
        })
        layer.add(darthNode)
        layer.batchDraw()
      })
    }
  }
}
</script>
