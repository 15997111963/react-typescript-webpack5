# 前言

**一年一度的架构升级 项目包含基础配置`react typescript mobx less axios` 为了保证尽量减少依赖 需要什么自己加！ `node`版本需要在10.x以上 这边我自己的是`v14.15.0`**

## 项目结构

```
└─ src
│  ├─ assets
│  ├─ components
│  ├─ entrys
│  ├─ hooks
│  ├─ pages
│  ├─ router
│  ├─ store
│  ├─ styles
│  ├─ utils
│  └─ App.tsx
└─ webpack-config
│  ├─ devserver.js
│  ├─ entry.js
│  ├─ module.js
│  ├─ plugins.js
│  └─ webpack.config.js
├─ .babelrc
├─ .gitignore
├─ .prettierrc.json
├─ global.d.ts
├─ package.json
├─ README.md
└─ tsconfig.json
```

## 简介

1. 项目默认是分包结构 文件夹名就是访问路径

**例如**

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81f650a121ef4183b2d8ed047f135c45~tplv-k3u1fbpfcp-watermark.image?)

`second`就是包名称 也是访问路径

本地起的devServer只需要通过`/second.html`来访问 如果不需要 删掉入口即可

2. `.babelrc`文件只包含`react` + `typescript` + `es6`的高级语法编译和`@`修饰符编译

3. 项目默认值配了`@`绝对路径指向`/src`

4. 项目已经包含了`less woff png`等等`css` 及`文字 图片`的解析 具体可以自行查看配置



> 不得不说升级到`webpack5`以后改动确实很大 很多包之间的互相依赖出现了五花八门的问题 但是以前的那些多余的loader现在都有了新的替代 真香！

**如果需要antd之类的直接引入即可用**

```javascript
plugins: [
    ["import", { "libraryName": "antd", "style": true }]
]
```

**默认已经包含了antd的style解析**


**以上已经替换到项目中在实际使用了 基本上问题都已经修复过了 如果再有什么需要 自己研究吧！应该不会有什么问题 虽然项目真的很简洁 但该有的基本配置基本上都是有的**
