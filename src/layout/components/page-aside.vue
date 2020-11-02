<template>
  <div class="aside">
    <h5>路由</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" unique-opened>
      <el-submenu v-for="item in router" :key="item.name" :index="item.name">
        <template slot="title">
          <i class="el-icon-setting" />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group v-for="iten in item.childrens" :key="iten.name">
          <el-menu-item :index="iten.route" @click="pageTo(iten.route)">{{ iten.name }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'PageAside',
  mixins: [],
  data() {
    return {
      router: [
        {
          name: '基础形状',
          route: 'shapes',
          childrens: [
            { name: '矩形', route: 'Rect' },
            { name: '圆形', route: 'Circle' },
            { name: '椭圆', route: 'Ellipse' },
            { name: '扇形', route: 'Wedge' },
            { name: '折线-直线', route: 'Line-Simple' },
            { name: '折线-多边形', route: 'Line-Polygon' },
            { name: '折线-曲线', route: 'Line-Spline' },
            { name: '折线-曲线多边形', route: 'Line-Blob' },
            { name: '图片-1', route: 'Sprite' },
            { name: '图片-2', route: 'Image' },
            { name: '文字', route: 'Text' },
            { name: '文字-弯曲', route: 'TextPath' },
            { name: '星形', route: 'Star' },
            { name: '环行', route: 'Ring' },
            { name: '环行(部分)', route: 'Arc' },
            { name: '标题', route: 'Label' },
            { name: '轨迹', route: 'Path' },
            { name: '六边形', route: 'RegularPolygon' },
            { name: '箭头', route: 'Arrow' },
            { name: '模型', route: 'Shape' } // 重点,这个可以直接画出想要的形状
          ]
        },
        {
          name: '定位偏移',
          route: 'guides',
          childrens: [
            { name: '定位和偏移', route: 'Position-vs-Offset' }
          ]
        }, {
          name: '样式变化',
          route: 'styling',
          childrens: [
            { name: '填充样式', route: 'Fill' },
            { name: '边框样式', route: 'Stroke' },
            { name: '透明度', route: 'Opacity' },
            { name: '阴影', route: 'Shadow' },
            { name: '连线方式', route: 'Line-Join' },
            { name: '显示隐藏', route: 'Hide-and-Show' },
            { name: '鼠标样式', route: 'Mouse-Cursor-Styles' },
            { name: '混合模式', route: 'Blend-Mode' }
          ]
        }, {
          name: '事件监听',
          route: 'events',
          childrens: [
            { name: '鼠标移入', route: 'Shape-Events' },
            { name: '鼠标移入（图片）', route: 'Image-Events' },
            { name: '取消监听', route: 'Remove-Event-Listener' },
            { name: '取消监听（通过名称）', route: 'Remove-Event-Listener-by-Name' },
            { name: '区域监听', route: 'Custom-Hit-Function' },
            { name: '父级监听', route: 'Event-Delegation' },
            { name: '键盘监听', route: 'Keyboard-events' }
          ]
        },
        {
          name: '拖放事件',
          route: 'DragAndDrop',
          childrens: [
            { name: '基础拖放', route: 'Drag-and-Drop' },
            { name: '整组拖放', route: 'Drag-and-Drop-a-Group' },
            { name: '限定方向', route: 'Simple-Drag-Bounds' },
            { name: '限定位置', route: 'Complex-Drag-and-Drop-Bounds' },
            { name: '单个拖动', route: 'Drop-Events' }
          ]
        },
        {
          name: '选择变形',
          route: 'SelectAndTransform',
          childrens: [
            { name: '基础展示', route: 'Select-and-Transform' },
            { name: '中心扩展', route: 'Centered-Scaling' },
            { name: '保持比例', route: 'Keep-Ratio' },
            { name: '选择器样式', route: 'Select-and-Transform-Styling' },
            { name: '监听tr属性', route: 'Transform-Events' },
            { name: '调整大小限制', route: 'Transform-Limits' },
            { name: '旋转捕捉', route: 'Centered-Scaling2' },
            { name: '增加元素', route: 'Transform-Events2' },
            { name: '文本宽度', route: 'Resize-Text' },
            { name: '重置比例', route: 'Resize-Text2' }
          ]
        }
        // （）
      ]
    }
  },
  methods: {
    /**
     * 跳转页面(通过name)
     * @param name 路由name
     */
    pageTo(name) {
      console.log(`页面跳转${name}`)
      const query = Object.assign({}, {
        t: +new Date()
      })
      this.$router.push({
        name: name,
        query: query
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.aside {
  height: 95vh;
  overflow-y: auto;
}
</style>
