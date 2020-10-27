<template>
  <div class="main">
    <div id="container" ref="container" class="container" />
    <div class="page_but">
      <el-row>
        <el-button type="primary" @click="addLayer">新建图层</el-button>
        <el-button type="primary" @click="addDlock">新建图层</el-button>
        <el-button type="primary" @click="test2">新建图层</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import { konva } from '@/mixins'

export default {
  name: 'Home',
  mixins: [konva],
  data() {
    return {
      type: 'primary'
    }
  },
  created() {
    this.$on('test2', (name) => {
      console.log(`接收参数${name}`)
    })
  },
  methods: {
    test2() {
      console.log('触发test2')
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //border: 1px solid red;

  .container {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    background-color: antiquewhite;
  }

  .page_but {
    margin-top: 20px;
  }
}
</style>
