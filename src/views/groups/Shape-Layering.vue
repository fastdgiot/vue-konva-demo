<template>
  <div class="app-container">
    <div><h1>图层区分</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="toTop">黄色置顶</el-button>
        <el-button type="primary" @click="toBottom">黄色置底</el-button>
        <el-button type="primary" @click="toUp">黄色升级</el-button>
        <el-button type="primary" @click="toDown">黄色降级</el-button>
        <el-button type="primary" @click="setZIndex">黄色等级置为3</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'ShapeLayering',
  mixins: [konva],
  data() {
    return {
      // 黄色元素
      yellowBox: null
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
      const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
      colors.forEach((item, i) => {
        const box = new Konva.Rect({
          x: i * 30 + 210,
          y: i * 18 + 40,
          width: 100,
          height: 50,
          fill: item,
          stroke: 'black',
          strokeWidth: 4,
          draggable: true,
          name: item
        })
        box.on('mouseover', function() {
          document.body.style.cursor = 'pointer'
        })
        box.on('mouseout', function() {
          document.body.style.cursor = 'default'
        })
        if (item === 'yellow') {
          this.yellowBox = box
        }
        layer.add(box)
      })
      layer.draw()
    },
    /**
     * 黄色置顶
     */
    toTop() {
      const layer = this.pageLayer[0].layer
      this.yellowBox.moveToTop()
      layer.draw()
    },
    /**
     * 黄色置底
     */
    toBottom() {
      const layer = this.pageLayer[0].layer
      this.yellowBox.moveToBottom()
      layer.draw()
    },
    /**
     * 黄色升级
     */
    toUp() {
      const layer = this.pageLayer[0].layer
      this.yellowBox.moveUp()
      layer.draw()
    },
    /**
     * 黄色降级
     */
    toDown() {
      const layer = this.pageLayer[0].layer
      this.yellowBox.moveDown()
      layer.draw()
    },
    /**
     * 等级置为3
     */
    setZIndex() {
      const layer = this.pageLayer[0].layer
      this.yellowBox.setZIndex(3)
      layer.draw()
    }
  }
}
</script>
