# 仓库说明
本仓库是基于chameleon扩展新端标准进行今日头条小程序开发。

### 运行项目
- 首先全局安装支持扩展新端的脚手架`npm i chameleon-tool@0.4.0-mvvm.5 -g`。
- 全局安装`lerna` 对本项目进行管理 `npm i lerna -g`。
- 在本仓库根目录执行`lerna bootstrap`，安装外部依赖与建立本仓库npm包之间的依赖。
- 在`cml-tt-project`目录执行`cml tt dev`, 用微信开发者工具打开`cml-tt-project/dist/demo`目录。

