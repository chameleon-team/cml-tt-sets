# 仓库说明
本仓库是对chameleon进行新端扩展的demo示例代码，实现了基本的微信小程序的扩展。
`packages`是需要开发的npm包。
```
├── cml-demo-api   扩展端api库
├── cml-demo-plugin  扩展端编译插件
├── cml-demo-ui-builtin 扩展端内置组件库
├── cml-demo-runtime 扩展端运行时库
└── cml-demo-project  示例项目
```

### 运行项目
- 首先全局安装支持扩展新端的脚手架`npm i chameleon-tool@0.4.0-mvvm.5 -g`。
- 全局安装`lerna` 对本项目进行管理 `npm i lerna -g`。
- 在本仓库根目录执行`lerna bootstrap`，安装外部依赖与建立本仓库npm包之间的依赖。
- 在`cml-demo-project`目录执行`cml demo dev`, 用微信开发者工具打开`cml-demo-project/dist/demo`目录。

