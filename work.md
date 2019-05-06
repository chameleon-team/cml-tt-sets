# CML扩展字节跳动小程序

## 目标
按照新端扩展标准支持字节跳动小程序

## 参与方
滴滴CML团队、阿里影业、芒果TV

## 具体工作拆分和排期

- cml-tt-api的工作是独立的 不依赖其他npm包的开发
- cml-tt-runtime 运行时的工作也是独立的 不依赖其他npm包
- cml-tt-plugin中的模板编译 在事件绑定的代理函数中依赖runtime 其他的工作不依赖
- cml-tt-ui-builtin和 cml-tt-ui依赖cml-tt-runtime和cml-tt-plugin的完成 才能正确执行。
- cml-tt-store的工作也是独立的，基本上小程序端实现是相同的。

<table>
   <tr>
    <th>工作</th><th>总体工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>需要单测</th><th>备注</th>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-api
    </td>
    <td>
    <!--工作量 -->
    7天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    是
    </td>
    <td>
    <!--备注 -->
    31个方法 小程序的api基本一致，每天完成5个。
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-runtime
    </td>
    <td>
    <!--工作量 -->
    7天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    是
    </td>
    <td>
    <!--备注 -->
    小程序的VM对象也基本一致，熟悉chameleon-runtime代码 然后进行当前端的改动。
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-plugin
    </td>
    <td>
    <!--工作量 -->
    7天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    是
    </td>
    <td>
    <!--备注 -->
    数据ast的增删改操作，事件处理复杂一些，参考chameleon-template-parse和chameleon-mixins
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-store
    </td>
    <td>
    <!--工作量 -->
    3天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    是
    </td>
    <td>
    <!--备注 -->
    小程序的store基本一致，参考chameleon-store
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-ui-builtin
    </td>
    <td>
    <!--工作量 -->
    7天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    否
    </td>
    <td>
    <!--备注 -->
    11个多态组件，其他的组件不是多态可以直接测试 需要依赖编译和运行时完成
    但也可以提前写好后测试
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      cml-tt-ui
    </td>
    <td>
    <!--工作量 -->
    3天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    否
    </td>
    <td>
    <!--备注 -->
    3个多态组件，其他的组件不是多态可以直接测试 需要依赖编译和运行时完成
    但也可以提前写好后测试
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      联调测试
    </td>
    <td>
    <!--工作量 -->
    4天
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--是否需要单测 -->
    </td>
    <td>
    <!--备注 -->
    各部分开发完成后进行联调测试
    </td>
  </tr>
</table>

### cml-tt-api

<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      alert方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      canIUse方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      cancelAnimationFrame方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      chooseImage方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      close方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      confirm方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      cpx2px方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      createAnimation方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      get方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getClipBoardData方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getLaunchOptionsSync方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getLocationInfo方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getRect方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getStorage方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      getSystemInfo方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      inSDK方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      initSocket方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      navigateBack方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      navigateTo方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      open方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      post方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      px2cpx方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      redirectTo方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      reload方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      removeStorage方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      request方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      requestAnimationFrame方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      setClipBoardData方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      setStorage方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      setTitle方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      <tr>
    <td>
    <!--工作 -->
      showToast方法实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>

</table>



### cml-tt-runtime

<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
  <tr>
    <td colspan="6">适配options</td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
     处理props
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理data
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     生命周期映射
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理mixins
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理钩子hooks
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理methods
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>

  <tr>
    <td colspan="6">能力注入（在最早生命周期hook，对执行上下文 this 改造）</td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
     处理 data【使具备响应式数据处理能力】
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理 computed【使具备计算属性能力】
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     处理 watch【使具备数据监听能力】
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>

</table>


### cml-tt-plugin

<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
   <tr>
    <td>
    <!--工作 -->
     c-if c-else c-else-if c-show c-for c-text c-key
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     component is 动态组件
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     c-model
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     c-bind 事件绑定 配合运行时mixins代理事件与处理事件对象
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     c-animation
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     style与class处理
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
    <tr>
    <td>
    <!--工作 -->
     基本标签替换
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    如果需要的话，比如cell 替换成view
    slider-item替换成swiper-item
    </td>
  </tr>
</table>








### cml-tt-ui-builtin
<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      checkbox/radio/layout文件夹下的7个布局 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      button 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      carousel 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      carousel-item 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      input 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      list 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      page 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      richtext 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      scroller 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      switch 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      textarea 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      video 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
      
</table>


### cml-tt-ui
<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
  <tr>
    <td>
    <!--工作 -->
     c-picker-item 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  <tr>
    <td>
    <!--工作 -->
      c-refresh 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
      c-actionsheet,
  c-checkbox-group,
  c-dialog,
  c-loading,
  c-picker,
  c-picker-panel,
  c-popup,
  c-radio-group,
  c-tab,
  c-tab-item,
  c-tab-pane,
  c-tab-pane-item,
  c-tabbar,
  c-tip,
  c-toast 组件实现与测试demo
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
</table>


### cml-tt-store

<table>
  <tr>
    <th>工作</th><th>工作量</th><th>排期</th><th>负责人</th><th>进度</th><th>备注</th>
  </tr>
  <tr>
    <td>
    <!--工作 -->
     createStore
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     commit
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     dispatch
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     mapState
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     mapGetters
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     mapMutations
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     mapActions
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
  
  <tr>
    <td>
    <!--工作 -->
     registerModule
    </td>
    <td>
    <!--工作量 -->
    </td>
    <td>
    <!--排期 -->
    </td>
    <td>
    <!--负责人 -->
    </td>
    <td>
    <!--进度 -->
    </td>
    <td>
    <!--备注 -->
    </td>
  </tr>
</table>