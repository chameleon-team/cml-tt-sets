
module.exports = class ToutiaoPlugin {
  constructor(options) {
    let { cmlType, media} = options;
    this.webpackRules = []; // webpack的rules设置  用于当前端特殊文件处理
    this.moduleRules = []; // 文件后缀对应的节点moduleType  
  }
/**
 * @description 注册插件
 * @param {compiler} 编译对象
 * */ 
register(compiler) {
    /**
     * cml节点编译前
     * currentNode 当前节点
     * nodeType 节点的nodeType
     */
    compiler.hook('compile-preCML', function(currentNode, nodeType) {
      
    })
    /**
     * cml节点编译后
     * currentNode 当前节点
     * nodeType 节点的nodeType
     */
    compiler.hook('compile-postCML', function(currentNode, nodeType) {

    })

    /**
     * 编译script节点，比如做模块化
     * currentNode 当前节点
     * parentNodeType 父节点的nodeType
     */
    compiler.hook('compile-script', function(currentNode, parentNodeType) {

      currentNode.output = compiler.amd.amdWrapModule(currentNode.source, currentNode.modId);

    })

    /**
     * 编译template节点 语法转义
     * currentNode 当前节点
     * parentNodeType 父节点的nodeType
     */
    const {cmlparse,generator,types,traverse} = require('mvvm-template-parser');
    compiler.hook('compile-template', function(currentNode, parentNodeType) {
        let ast = cmlparse(currentNode.source);
        traverse(ast, {
          enter(path) {
            //进行转义
          }
        });
        currentNode.output =  generate(ast).code;
    })

    /**
     * 编译style节点  比如尺寸单位转义
     * currentNode 当前节点
     * parentNodeType 父节点的nodeType
     */
    compiler.hook('compile-style', function(currentNode, parentNodeType) {
      
    })

    /**
     * 编译json节点
     * currentNode 当前节点
     * parentNodeType 父节点的nodeType
     */
    compiler.hook('compile-json', function(currentNode, parentNodeType) {
      currentNode
    })

    /**
     * 编译other类型节点
     * currentNode 当前节点
     */
    compiler.hook('compile-other', function(currentNode) {

    })

    /**
     * 标准编译cml文件的script节点前 可以对script内容进行修改
     * resourcePath cml文件绝对路径
     * nodeType 节点的nodeType
     * componentFiles 引用的组件的名称与组件路径的map对象
     * compiledJson script节点对应的json节点内容
     * result: {content}  result.content script节点内容， 
     * 需要修改result.content 最终才能生效，利用result是引用类型进行传值
     */
    compiler.hook('insert-script', function({resourcePath, nodeType, componentFiles, compiledJson}, result) {      
      let newContent = `
      ${result.content}
      import {createPage} from 'cml-toutiao-runtime';
      createPage(exports.default);
      `
      result.content = newContent;
    })

    /**
     * 查找组件扩展 用于原生组件查找
      context 项目根目录
      cmlFilePath cml文件绝对路径
      comPath 引用的组件路径
      cmlType 当前端类型
      result {     返回的结果    
        filePath: '',  查找到组件的绝对路径
        refUrl    json中的引用组件路径
      }
     */
    compiler.hook('find-component', function({context, cmlFilePath, comPath, cmlType}, result) {

    })


    /**
     * 编译结束进入打包阶段
     */
    compiler.hook('pack', function(projectGraph) {
      // 遍历编译图的节点，进行各项目的拼接
      //调用writeFile方法写入文件
      // compiler.writeFile()
    })
}
}