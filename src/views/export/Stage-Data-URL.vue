<template>
  <div class="app-container">
    <div><h1>反序列化(导出为图片)</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col :span="8">
        <el-button type="primary" @click="getPicture">导出为图片</el-button>
      </el-col>
      <el-col :span="8">
        <el-col :span="12">
          <el-input v-model="multiple" type="number" placeholder="请输入倍数"/>
        </el-col>
        <el-col :span="12">
          <el-button type="primary" @click="getPicturePlus">导出为大图片</el-button>
        </el-col>
      </el-col>
      <el-col :span="8">
        <el-button type="primary" @click="textarea = pageStage.toDataURL()">导出为Base64</el-button>
      </el-col>
      <el-col :span="22" :offset="1">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="序列化"
          v-model="textarea">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'StageDataURL',
  mixins: [konva],
  data() {
    return {
      // 图片倍数
      multiple: 1,
      // 序列化
      textarea: ''
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
      const box = new Konva.Rect({
        x: 200,
        y: 200,
        width: 100,
        height: 50,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true
      })
      layer.add(box)
      layer.draw()
    },
    /**
     * 导出为图片
     */
    getPicture() {
      const link = document.createElement('a')
      link.href = this.pageStage.toDataURL()
      link.download = 'stage.png'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
    /**
     * 导出大图片
     */
    getPicturePlus() {
      if (!this.multiple) {
        this.$message({
          message: `请输入倍数`
        })
      } else {
        const link = document.createElement('a')
        link.href = this.pageStage.toDataURL({
          pixelRatio: this.multiple // or other value you need
        })
        link.download = 'stage.png'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }
}
</script>
