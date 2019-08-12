## 仓库说明
本仓库是基于[chameleon扩展新端标准](https://cml.js.org/doc/extend/extend.html)进行今日头条小程序开发。

## 运行项目

- 首先全局安装支持扩展新端的脚手架`npm i chameleon-tool@0.4.0-alpha.2 -g`。
- `packages/cml-tt-project`中安装项目依赖 `npm install `。
- 在`cml-tt-project`目录执行`cml tt dev`, 用字节跳动开发者工具打开`cml-tt-project/dist/tt`目录。

## 需要扩展仓库
[![version](https://img.shields.io/npm/v/cml-tt-api.svg?style=flat)](https://www.npmjs.com/package/cml-tt-api)

|包名|版本|描述|
|-----|----|----|
|cml-tt-plugin|[![version](https://img.shields.io/npm/v/cml-tt-plugin.svg?style=flat)](https://www.npmjs.com/package/cml-tt-plugin)|对各个节点编译成符合对应端的语法，然后进行打包|
|cml-tt-runtime|[![version](https://img.shields.io/npm/v/cml-tt-runtime.svg?style=flat)](https://www.npmjs.com/package/cml-tt-runtime)| 对新端的运行时和生命周期进行映射等             |
|cml-tt-api|[![version](https://img.shields.io/npm/v/cml-tt-api.svg?style=flat)](https://www.npmjs.com/package/cml-tt-api)|对新端的api进行实现|
|cml-tt-store|[![version](https://img.shields.io/npm/v/cml-tt-store.svg?style=flat)](https://www.npmjs.com/package/cml-tt-store)|扩展新端的数据系统|
|cml-tt-mixin|[![version](https://img.shields.io/npm/v/cml-tt-mixins.svg?style=flat)](https://www.npmjs.com/package/cml-tt-mixins)|扩展新端的mixins，用于代理一些事件|
|cml-tt-ui|[![version](https://img.shields.io/npm/v/cml-tt-ui.svg?style=flat)](https://www.npmjs.com/package/cml-tt-ui)|扩展新端的ui组件|
|cml-tt-ui-builtin|[![version](https://img.shields.io/npm/v/cml-tt-ui-builtin.svg?style=flat)](https://www.npmjs.com/package/cml-tt-ui-builtin)|扩展新端ui-builtin组件|





