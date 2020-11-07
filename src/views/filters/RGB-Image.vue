<template>
  <div class="app-container">
    <div><h1>图像RGB</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <span class="demonstration">Red</span>
        <el-slider v-model="value1" @input="val1" />
        <span class="demonstration">Green</span>
        <el-slider v-model="value2" @input="val2" />
        <span class="demonstration">Blue</span>
        <el-slider v-model="value3" @input="val3" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'RGBImage',
  mixins: [konva],
  data() {
    return {
      value1: '',
      value2: '',
      value3: ''
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
        lion.filters([Konva.Filters.RGB])
        layer.add(lion)
        layer.draw()
        this.lion = lion
        this.layer = layer
      }
    },
    val1(num) {
      this.lion.red(num / 100 * 255)
      this.layer.batchDraw()
    },
    val2(num) {
      this.lion.green(num / 100 * 255)
      this.layer.batchDraw()
    },
    val3(num) {
      this.lion.blue(num / 100 * 255)
      this.layer.batchDraw()
    }
  }
}
</script>
