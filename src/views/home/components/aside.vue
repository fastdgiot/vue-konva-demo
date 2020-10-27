<template>
  <div class="aside">
    <el-row>
      <el-button type="primary" @click="test">测试方法</el-button>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'Home',
  mixins: [],
  data() {
    return {}
  },
  methods: {
    test() {
      console.log('出发aside方法, test')
      this.$emit('test2', '参数222')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
