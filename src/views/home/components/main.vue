<template>
  <div class="app-container">
    <div id="container" ref="container" class="container" />
    <div class="page_but">
      <el-row>
        <el-button type="primary" @click="addLayer">新建图层</el-button>
        <el-button type="primary" @click="addDlock">新建图层</el-button>
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
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  //border: 1px solid red;

  .container {
    width: 100%;
    height: 420px;
    border: 1px solid red;
    background-color: antiquewhite;
  }

  .page_but {
    margin-top: 20px;
  }
}
</style>
