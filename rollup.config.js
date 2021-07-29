import fs from 'fs'
import path from 'path'
import json from 'rollup-plugin-json'
import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

const isDev = process.env.NODE_ENV !== 'production'

// 公共组件配置
const plugins = [
  babel({
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ]
  }),
  json()
]

// 如果不是开发环境，开启压缩
isDev || plugins.push(terser())

// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root).filter(item => {
  return fs.statSync(path.resolve(root, item).isDirectory())
}).map(item => {
  const pkg = require(path.resolve(root, item, 'package.json'))

  return {
    input: path.resolve(root, item, 'index.js'),
    output: [
      {
        exports: 'auto',
        file: path.resolve(root, item, pkg.main),
        format: 'cjs'
      },
      {
        exports: 'auto',
        file: path.resolve(root, item, pkg.module),
        format: 'es'
      }
    ],
    plugins
  }
})