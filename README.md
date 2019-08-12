## 仓库说明
本仓库是基于[chameleon扩展新端标准](https://cml.js.org/doc/extend/extend.html)进行今日字节跳动小程序开发。

## 本仓库发布的包

|包名|版本|描述|
|-----|----|----|
|cml-tt-plugin|[![version](https://img.shields.io/npm/v/cml-tt-plugin.svg?style=flat)](https://www.npmjs.com/package/cml-tt-plugin)|对各个节点编译成符合对应端的语法，然后进行打包|
|cml-tt-runtime|[![version](https://img.shields.io/npm/v/cml-tt-runtime.svg?style=flat)](https://www.npmjs.com/package/cml-tt-runtime)| 对新端的运行时和生命周期进行映射等             |
|cml-tt-api|[![version](https://img.shields.io/npm/v/cml-tt-api.svg?style=flat)](https://www.npmjs.com/package/cml-tt-api)|对新端的api进行实现|
|cml-tt-store|[![version](https://img.shields.io/npm/v/cml-tt-store.svg?style=flat)](https://www.npmjs.com/package/cml-tt-store)|扩展新端的数据系统|
|cml-tt-mixin|[![version](https://img.shields.io/npm/v/cml-tt-mixins.svg?style=flat)](https://www.npmjs.com/package/cml-tt-mixins)|扩展新端的mixins，用于代理一些事件|
|cml-tt-ui|[![version](https://img.shields.io/npm/v/cml-tt-ui.svg?style=flat)](https://www.npmjs.com/package/cml-tt-ui)|扩展新端的ui组件|
|cml-tt-ui-builtin|[![version](https://img.shields.io/npm/v/cml-tt-ui-builtin.svg?style=flat)](https://www.npmjs.com/package/cml-tt-ui-builtin)|扩展新端ui-builtin组件|

## 字节跳动小程序初体验

安装最新 `chameleon-tool`

```
npm i chameleon-tool@0.4.0 -g
```

下载体验仓库

[cml-demo](https://github.com/beatles-chameleon/cml-demo/tree/master-tt)
[cml-flexbox](https://github.com/chameleon-team/cml-flexbox/tree/master-tt)
[cml-yanxuan](https://github.com/chameleon-team/cml-yanxuan/tree/master-tt)
[cml-todomvc](https://github.com/chameleon-team/cml-todomvc/tree/master-tt)

下载[字节跳动小程序开发者工具](https://microapp.bytedance.com/docs/devtool/versionUpdate.html)

clone 下来以上仓库之后，切换到 `master-tt` 分支，执行 cml tt dev，在开发者工具中即可预览效果

效果图如下

<div style="display: flex;flex-direction: row;justify-content: space-around; align-items: flex-end;">
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="./assets/mvvm/cml-tt-demo.png" width="200px" height="100%" />
    <text style="color: #fda775;font-size: 24px;"></text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="./assets/mvvm/cml-tt-flexbox.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;"></text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="./assets/mvvm/cml-tt-yanxuan.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;"></text>
  </div>
  <div style="display: flex;flex-direction: column;align-items: center;">
    <img src="./assets/mvvm/cml-tt-todomvc.png" width="200px" height="100%"/>
    <text style="color: #fda775;font-size: 24px;"></text>
  </div>
</div>

## CML项目接入字节跳动小程序步骤


根据以下步骤配置之后，既有 CML 的项目可以直接在字节跳动小程序运行。


## 1. 安装字节跳动扩展需要的仓库

检查原有依赖的版本

```json
"chameleon-api": "^0.5.3",
"chameleon-runtime": "0.1.4",
"chameleon-store": "0.0.3",
"chameleon-ui-builtin": "^0.4.1",
"cml-ui": "^0.3.1"
```

新增字节跳动小程序相关仓库

```json
"cml-tt-api": "0.2.3",
"cml-tt-plugin": "0.2.3",
"cml-tt-runtime": "0.2.3",
"cml-tt-store": "0.2.3",
"cml-tt-ui": "0.2.3",
"cml-tt-ui-builtin": "0.2.3",
```

## 2 修改 chameleon.config.js 配置文件

### 2.1 引入 `path`模块

```javascript
const path = require("path");
```

### 2.2 增加 builtinNpmName 、 extPlatform 和 babelPath 配置

```javascript

builtinNpmName: 'cml-tt-ui-builtin',
extPlatform: {
  tt: 'cml-tt-plugin',
},
babelPath: [
  path.join(__dirname,'node_modules/cml-tt-ui-builtin'),
  path.join(__dirname,'node_modules/cml-tt-runtime'),
  path.join(__dirname,'node_modules/cml-tt-api'),
  path.join(__dirname,'node_modules/cml-tt-ui'),
  path.join(__dirname,'node_modules/cml-tt-store'),
  path.join(__dirname,'node_modules/cml-tt-mixins'),
  path.join(__dirname,'node_modules/mobx'),
],
```

以上配置解释

builtinNpmName 字段是你定义的内置 npm 包名称
extPlatform 是配置扩展新端的编译插件，key 值为端标识，value 为编译插件 npm 包名称。
babelPath 配置的是哪些 npm 包要过 babel 处理

具体解释[参考](https://cml.js.org/doc/extend/quickstart.html?h=builtinnpmname)

扩展字节跳动的核心实现具体可以[参考](https://github.com/chameleon-team/cml-tt-sets/tree/dev) 的 dev 分支

### 2.3 如果要引入基础样式,需要增加 `tt：true`的配置,默认导入基础样式

[工程配置-baseStyle](https://cml.js.org/doc/framework/config.html?h=basestyle)

```javascript
baseStyle:{
  wx: true,
  web: true,
  weex: true,
  alipay: true,
  baidu: true,
  qq: true,
  tt:true,
},
```

## 3 修改项目中代码

### 3.1 修改项目中引入 `chameleon-store chameleon-api cml-ui` 的地方

store 和 api 的引用:

`chameleon-store` 改为 `cml-tt-store`

`chameleon-api`改为`cml-tt-api`

```javascript
import cml from "chameleon-api";
import store from "chameleon-store";
```

改为

```javascript
import cml from "cml-tt-api";
import store from "cml-tt-stroe";
```

组件的引用: `cml-ui` 改为 `cml-tt-ui`

```html
<script cml-type="json">
  {
      "base": {
          "usingComponents": {
              "c-actionsheet": "cml-ui/components/c-actionsheet/c-actionsheet"
          },
      }
  }
</script>
```

改为

```html
<script cml-type="json">
  {
      "base": {
          "usingComponents": {
              "c-actionsheet": "cml-tt-ui/components/c-actionsheet/c-actionsheet"
          },
      }
  }
</script>
```

### 3.2 项目中任意多态组件都要增加字节跳动这一端组件

如果原来某个多态组件 `poly-comp`

```
poly-comp.interface
poly-comp.web.cml
poly-comp.weex.cml
poly-comp.wx.cml
poly-comp.alipay.cml
poly-comp.baidu.cml

```

接入字节跳动小程序的话，则需要在加一个 `poly-comp.tt.cml`

### 3.3 项目中任意多态接口要增加字节跳动这一端接口

如果原来一个多态接口 `poly-api.interfacce`

```html
<script cml-type="interface">
  type res = [String];
  interface UnsupportedInterface {
    getUnsupportApis(): res;
  }
</script>

<script cml-type="web">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return [];
    }
  }

  export default new Method();
</script>

<script cml-type="weex">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ["设置页面标题", "WebSocket", "地理位置"];
    }
  }

  export default new Method();
</script>

<script cml-type="wx">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      // 线上版微信小程序未配置demo请求的域名为可信域名，发版时去掉'网络请求'
      // return ['网络请求', 'WebSocket'];
      return [];
    }
  }

  export default new Method();
</script>

<script cml-type="alipay">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ["启动参数", "beatles-bridge能力"];
    }
  }

  export default new Method();
</script>
<script cml-type="baidu">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      return ["beatles-bridge能力"];
    }
  }

  export default new Method();
</script>

<script cml-type="qq">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      // 线上版微信小程序未配置demo请求的域名为可信域名，发版时去掉'网络请求'
      // return ['网络请求', 'WebSocket'];
      return [];
    }
  }

  export default new Method();
</script>
```

那么需要增加

```html
<script cml-type="tt">
  class Method implements UnsupportedInterface {
    getUnsupportApis() {
      // 线上版微信小程序未配置demo请求的域名为可信域名，发版时去掉'网络请求'
      // return ['网络请求', 'WebSocket'];
      return [];
    }
  }

  export default new Method();
</script>
```

### 4 字节跳动小程序命令

字节跳动小程序支持的命令有

```
cml tt dev

cml tt build

```

当你完成了以上的步骤之后，就可以在你的项目中执行 `cml tt dev` 进行字节跳动小程序的开发了。

一个`cml-demo`仓库的 diff[在这里](https://github.com/beatles-chameleon/cml-demo/compare/master-copy...master-copy-tt?expand=1),可供大家参考。




