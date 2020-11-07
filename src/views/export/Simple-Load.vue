<template>
  <div class="app-container">
    <div><h1>反序列化</h1></div>
    <div id="container" ref="container" class="container" />
    <el-row>
      <el-col>
        <el-button type="primary" @click="deserialization">序列化</el-button>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2}"
          placeholder="序列化"
          v-model="textarea">
        </el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { konva } from '@/mixins'
import Konva from 'konva'

export default {
  name: 'StopAnimation',
  mixins: [konva],
  data() {
    return {
      // 序列化
      textarea: ''
    }
  },
  created() {
  },
  methods: {
    /**
     * 反序列化
     */
    deserialization() {
      Konva.Node.create(this.textarea, 'container')
    }
  }
}
</script>
