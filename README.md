# Monorepo + Lerna + Storybook

## Storybook

- 可视化组件展示平台
- 在隔离的开发环境中，以交互式的方式展示组件
- 独立开发组件

### Storybook 安装

- 自动安装
  - npx -p @storybook/cli sb init --type react
  - yarn add react

- 手动安装

## yarn workspace

### 开启 yarn 的工作区

- 项目根目录的 package.json

```
"private": true,
"workspaces": [
  "package/*"
]
```

### yarn workspace 使用

- 给工作区根目录安装开发依赖
  - yarn add jest -D -W

- 给指定工作区安装依赖
  - yarn workspace garry-button add lodash

- 给所有的工作区安装依赖
  - yarn install

## Lerna

### 介绍

- Lerna 是一个优化使用 git 和 npm 管理多包仓库的工作流工具
- 用于管理具有多个包的 Javascript 项目
- 它可以一键把代码提交到 git 和 npm 仓库 

### Lerna 使用

- 全局安装
  - yarn global add lerna

- 初始化
  - lerna init

- 发布
  - lerna publish

## Rollup

- Rollup 是一个模块打包器
- Rollup 支持 Tree-shaking
- 打包的结果比 Webpack 要小
- 开发框架/组件库的时候使用 Rollup 更合适

### 安装依赖

- rollup
- rollup-plugin-terser
- rollup-plugin-postcss
- @babel/preset-react
- @babel/preset-env
- @rollup/plugin-json
- @rollup/plugin-node-resolve

```
yarn add xxx -D -W
```

### rollup.config.js 配置

### package.json 配置打包命令

```
"scripts": {
  "build": "rollup -c"
}
```

## 通过 plop 生成组件代码模板

### 安装

`yarn add plop -D -W`

### package.json 配置命令

```
"scripts": {
  "plop": "plop"
}
```