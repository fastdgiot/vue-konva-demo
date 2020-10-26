<template>
  <el-container>
    <el-main>
      <home-main />
    </el-main>
    <el-aside width="200px">
      <home-aside />
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
  }
}
</script>
