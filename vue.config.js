const path = require('path')
const { name } = require('./package')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const port = 80 // 设置特定的端口号开启本地开发服务
module.exports = {
  filenameHashing: true,
  publicPath: `//localhost:${port}`, // 配置静态资源路径，使其在微服务中不会找不到静态资源
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    // 允许跨域
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  // 自定义webpack配置
  configureWebpack: {
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
