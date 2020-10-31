<template>
  <div class="aside">
    <h5>路由</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo">
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
        }
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
