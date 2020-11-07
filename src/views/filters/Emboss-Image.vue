<template>
  <div class="app-container">
    <div><h1>图像浮雕 (跟着官网做了,但是浮雕是啥不知道啊)</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <span class="demonstration">Strength</span>
        <el-slider v-model="value1" @input="val1" />
        <span class="demonstration">WhiteLevel</span>
        <el-slider v-model="value2" @input="val2" />
        <el-col span="12">
          <span class="demonstration">Direction</span>
          <el-select v-model="value3" @change="val3">
            <el-option
              v-for="item in options"
              :key="item"
              :label="item"
              :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col span="12">
          <el-checkbox v-model="value4" @change="val4">Blend</el-checkbox>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'EmbossImage',
  mixins: [konva],
  data() {
    return {
      options: ['top', 'top-left', 'top-right', 'left', 'right', 'bottom', 'bottom-left', 'bottom-right'],
      value1: '',
      value2: '',
      value3: '',
      value4: ''
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
        lion.filters([Konva.Filters.Emboss])
        layer.add(lion)
        layer.draw()
        this.lion = lion
        this.layer = layer
      }
    },
    changeSlider(val) {
      this.lion.embossWhiteLevel(val)
      this.layer.batchDraw()
    },
    val1(num) {
      this.lion.embossStrength(num / 40)
      this.layer.batchDraw()
    },
    val2(num) {
      this.lion.embossWhiteLevel(num / 40)
      this.layer.batchDraw()
    },
    val3(val) {
      this.lion.embossDirection(val)
      this.layer.batchDraw()
    },
    val4(boo) {
      console.log(boo)
      this.lion.embossBlend(boo)
      this.layer.batchDraw()
    }
  }
}
</script>
