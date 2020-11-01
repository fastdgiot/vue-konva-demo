<template>
  <div class="app-container">
    <div><h1>基础展示（Shift增加一个;Ctrl减少一个）</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="selectsAll">选中所有形状</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'SelectAndTransform',
  mixins: [konva],
  data() {
    return {
      starStyle: {
        // x: stage.width() * Math.random(),
        // y: stage.height() * Math.random(),
        fill: 'blue',
        numPoints: 3,
        innerRadius: 20,
        outerRadius: 25,
        draggable: true,
        // name: 'star ' + i,
        shadowOffsetX: 5,
        shadowOffsetY: 5
      },
      // 开似乎位置
      starPosition: {
        x1: '',
        x2: '',
        y1: '',
        y2: ''
      },
      // 首次点击
      isFirst: true
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
      const stage = this.pageStage
      const layer = this.pageLayer[0].layer
      const arrData = []
      for (let i = 0; i < 10; i++) {
        const data = new Konva.Star(Object.assign({}, this.starStyle, {
          x: stage.width() * Math.random(),
          y: stage.height() * Math.random(),
          name: `star_${i}`
        }))
        arrData.push(data)
        layer.add(data)
      }
      const tr = new Konva.Transformer({
        name: 'tr'
      })
      layer.add(tr)
      this.selectsAll(stage)
      layer.draw()

      // 开始事件
      var selectionRectangle = new Konva.Rect({
        fill: 'rgba(0,0,255,0.5)',
        visible: false // 默认不显示
      })
      layer.add(selectionRectangle)

      // 鼠标按下或屏幕触摸
      this.mousedownTouchstart(stage, selectionRectangle, layer)
      // 鼠标移动或屏幕触摸移动
      this.mousemoveTouchmove(stage, selectionRectangle, layer)
      // 鼠标放开或屏幕触摸结束
      this.mouseupTouchend(stage, layer, selectionRectangle, tr)
      // 鼠标点击
      this.clickTap(stage, layer, selectionRectangle, tr)
    },
    /**
     * 按钮--选中所有
     */
    selectsAll(stage) {
      const layer = this.pageLayer[0].layer
      const arr = []
      let tr = ''
      layer.children.forEach(item => {
        if (item.getName().indexOf('star_') !== -1) arr.push(item) // 选中所有星形
        if (item.getName() === 'tr') tr = item // 找到选择器
      })
      tr.nodes(arr)
      layer.batchDraw()
    },
    /**
     * 监听--鼠标按下或屏幕触摸
     * @param stage
     * @param layer
     * @param selectionRectangle
     */
    mousedownTouchstart(stage, selectionRectangle, layer) {
      stage.on('mousedown touchstart', (e) => {
        if (e.target !== stage) {
          return
        }
        const x1 = stage.getPointerPosition().x
        const y1 = stage.getPointerPosition().y
        const x2 = stage.getPointerPosition().x
        const y2 = stage.getPointerPosition().y
        this.starPosition = {
          x1, x2, y1, y2
        }

        selectionRectangle.visible(true)
        selectionRectangle.width(0)
        selectionRectangle.height(0)
        layer.draw()
      })
    },
    /**
     * 监听--鼠标移动或屏幕触摸移动
     * @param stage
     * @param layer
     * @param selectionRectangle
     */
    mousemoveTouchmove(stage, selectionRectangle, layer) {
      stage.on('mousemove touchmove', () => {
        if (!selectionRectangle.visible()) {
          return
        }
        const { x1, y1 } = this.starPosition
        const x2 = stage.getPointerPosition().x
        const y2 = stage.getPointerPosition().y
        selectionRectangle.setAttrs({
          x: Math.min(x1, x2),
          y: Math.min(y1, y2),
          width: Math.abs(x2 - x1),
          height: Math.abs(y2 - y1)
        })
        layer.batchDraw()
      })
    },
    /**
     * 监听--鼠标松开或屏幕触摸结束
     * @param stage
     * @param layer
     * @param selectionRectangle
     * @param tr
     */
    mouseupTouchend(stage, layer, selectionRectangle, tr) {
      stage.on('mouseup touchend', () => {
        if (!selectionRectangle.visible()) {
          return
        }
        // update visibility in timeout, so we can check it in click event
        setTimeout(() => {
          selectionRectangle.visible(false)
          layer.batchDraw()
        })

        // var shapes = stage.find('.rect').toArray()
        const shapes = []
        layer.children.forEach(item => {
          if (item.getName().indexOf('star_') !== -1) shapes.push(item) // 选中所有星形
        })
        const box = selectionRectangle.getClientRect()
        const selected = shapes.filter((shape) =>
          Konva.Util.haveIntersection(box, shape.getClientRect())
        )
        tr.nodes(selected)
        layer.batchDraw()
      })
    },
    /**
     * 监听--点击事件
     * @param stage
     * @param layer
     * @param selectionRectangle
     * @param tr
     */
    clickTap(stage, layer, selectionRectangle, tr) {
      stage.on('click tap', (e) => {
        // if we are selecting with rect, do nothing
        // 如果我们用rect进行选择，什么都不做
        if (selectionRectangle.visible()) {
          return
        }
        // if click on empty area - remove all selections
        // 如果单击空白区域-删除所有选择
        if (e.target === stage) {
          tr.nodes([])
          layer.draw()
          return
        }
        // do nothing if clicked NOT on our rectangles
        // 如果点击不在矩形上，什么都不做
        if (e.target.getName().indexOf('star_') === -1) {
          return
        }
        // do we pressed shift or ctrl?
        // 我们是按shift还是ctrl键?
        const metaPressed = e.evt.shiftKey || e.evt.ctrlKey || e.evt.metaKey
        const isSelected = tr.nodes().indexOf(e.target) >= 0

        if (!metaPressed && !isSelected) {
          // if no key pressed and the node is not selected
          // 如果没有按下键，节点没有被选中
          // select just one
          // 选择只有一个
          tr.nodes([e.target])
        } else if (metaPressed && isSelected) {
          // if we pressed keys and node was selected
          // 如果我们按下键，节点被选中
          // we need to remove it from selection:
          // 我们需要从选择中删除
          const nodes = tr.nodes().slice() // use slice to have new copy of array 使用切片有数组的新拷贝
          // remove node from array
          // 从数组中删除节点
          nodes.splice(nodes.indexOf(e.target), 1)
          tr.nodes(nodes)
        } else if (metaPressed && !isSelected) {
          // add the node into selection
          // 将节点添加到选择中
          const nodes = tr.nodes().concat([e.target])
          tr.nodes(nodes)
        }
        layer.draw()
      })
    }
  }
}
</script>

