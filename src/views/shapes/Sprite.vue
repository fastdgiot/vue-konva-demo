<template>
  <div class="app-container">
    <div><h1>创建图片1</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="addElem(prop)">创建圆形</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'Sprite',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 50,
        y: 50,
        image: '',
        animation: 'idle',
        animations: {
          idle: [2, 2, 70, 119, 71, 2, 74, 119, 146, 2, 81, 119, 226, 2, 76, 119],
          punch: [2, 138, 74, 122, 76, 138, 84, 122, 346, 138, 120, 122]
        },
        frameRate: 7,
        frameIndex: 0
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
      const graph = new Konva.Sprite(prop)
      layer.add(graph)
      layer.batchDraw()
      console.log('创建图形成功', graph)
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .container {
    width: 100%;
    height: 420px;
    margin-bottom: 10px;
    border: 1px solid red;
    background-color: antiquewhite;
  }
}
</style>
