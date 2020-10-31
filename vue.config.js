const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: './',
  publicPath: '/vue-konva-demo/',
  chainWebpack: config => {
    config.resolve.alias.set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))
  },
  // 输出文件目录
  outputDir: 'dist'
}
