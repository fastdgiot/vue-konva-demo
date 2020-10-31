<template>
  <div class="app-container">
    <div><h1>定位和偏移</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        红色矩形定位: X: {{ graph.attrs.x }} , Y: {{ graph.attrs.y }} 当前速度: speed: {{ isStart ? angularSpeed : 0 }}
        <br>
        <el-button :disabled="isStart" type="primary" @click="startAnimation">开启动画</el-button>
        <el-button :disabled="!isStart" type="primary" @click="changeSpeed(true)">动画正加速</el-button>
        <el-button :disabled="!isStart" type="primary" @click="changeSpeed(false)">动画正减速</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'CircleT',
  mixins: [konva],
  data() {
    return {
      prop: {
        x: 220,
        y: 80,
        width: 100,
        height: 50,
        fill: 'red',
        shadowBlur: 10,
        cornerRadius: 10,
        draggable: true,
        strokeWidth: 4,
        offset: {
          x: 100,
          y: 0
        }
      },
      // 用于监听定位
      graph: {
        attrs: {
          x: 0,
          y: 0
        }
      },
      isStart: false,
      // 速度(刷新频率)
      angularSpeed: 120
    }
  },
  created() {
    // 因为第一个图层是10ms后创建的,避免图层未创建问题
    setTimeout(() => {
      this.addElem(this.prop)
    }, 20)
  },
  methods: {
    /**
     * 按钮--创建图形 yyshu 20201031
     * @param rect 图形属性
     */
    addElem(prop) {
      const layer = this.pageLayer[0].layer
      const graph = new Konva.Rect(prop)
      layer.add(graph)
      layer.batchDraw()
      this.graph = graph // 监听定位用
      console.log('创建图形成功\n', graph)
    },
    /**
     * 按钮--开启旋转动画 yyshu 20201031
     */
    startAnimation() {
      if (!this.isStart) {
        this.isStart = true
      }
      // 开启旋转动画
      const layer = this.pageLayer[0].layer
      const graph = this.graph
      const anim = new Konva.Animation((frame) => {
        const angleDiff = (frame.timeDiff * this.angularSpeed) / 1000
        graph.rotate(angleDiff)
      }, layer)
      anim.start()
    },
    /**
     * 改变动画速度
     * @param type
     */
    changeSpeed(type) {
      if (type) {
        this.angularSpeed = this.angularSpeed + 40
      } else {
        this.angularSpeed = this.angularSpeed - 40
      }
    }
  }
}
</script>

