import Konva from 'konva'

/**
 * KONVA
 */
export default {
  data() {
    return {
      // canvas宽度
      canWidth: 0,
      // 页面canvas
      pageStage: '',
      // canvas的图层列表
      pageLayer: []
    }
  },
  created() {
    // 初始化
    setTimeout(() => {
      this.init()
    }, 10)
  },
  methods: {
    /**
     * 生命周期--初始化
     */
    init() {
      console.log('初始化init()')
      const main = this.$refs.container
      this.canWidth = main.offsetWidth
      this.pageStage = new Konva.Stage({
        container: 'container',
        width: main.offsetWidth,
        height: main.offsetWidth / 3
      })
    },
    /**
     * 按钮--新增图层
     */
    addLayer() {
      const name = this.getTimestamp('l_')
      const layer = new Konva.Layer()
      this.pageLayer.push({ name, layer })
      this.$message({
        message: `${name} 图层添加成功`,
        type: 'success'
      })
    },
    /**
     * 点击增加方块
     */
    addDlock() {
      const layer = this.pageLayer[0].layer
      const rect1 = new Konva.Rect({
        x: 40,
        y: 70,
        width: 100,
        height: 50,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 1
      })
      console.log(rect1)
      layer.add(rect1)
      this.pageStage.add(layer)
    }
  }
}
