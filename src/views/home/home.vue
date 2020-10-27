<template>
  <el-container>
    <el-main>
      <home-main />
    </el-main>
    <el-aside width="200px">
      <home-aside @test2="tests" />
    </el-aside>
  </el-container>
</template>

<script>
import HomeMain from './components/main'
import HomeAside from './components/aside'

export default {
  name: 'Home',
  components: {
    HomeMain,
    HomeAside
  },
  data() {
    return {
      name: '张三'
    }
  },
  watch: {
    name(val) {
      console.log(val)
      console.log(`${val} 改变完成`)
    }
  },
  methods: {
    tests(name) {
      console.log(`接收${name}`)
      const methods = this.$options.methods
      methods['changeName'].call(this, '参数阿凡达是否')
    },
    changeName(names) {
      console.log('出发aaa')
      console.log(names)
    }
  }
}
</script>
