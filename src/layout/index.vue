<template>
  <el-container>
    <el-aside width="220px">
      <page-aside/>
    </el-aside>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import PageAside from './components/page-aside'

export default {
  name: 'Layout',
  components: {
    PageAside
  },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>
