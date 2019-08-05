const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');
const parserTag = require('./parser-tag');
const parserEvent = require('./parser-event');
const parserClass = require('./parser-class');
const parserDirective = require('./parser-directive');
const parserAnimationTag = require('./parser-animation');
const parserDynamicComponent = require('./parser-dynamic-component');
const parserTemplateStyle = require('./parser-template-style.js');
const preProcessTemplate = require('../common/pre-process-template.js');
// 标记此attr需要被替换或者是单纯的删除
const EMPTYTAG = Symbol('cml-remove-tag');

module.exports = function(content, options = {}) {
  content = preProcessTemplate.preParseAnimation(content)
  let ast = cmlparse(content);
  traverse(ast, {
    enter(path) {
      let node = path.node;
      if (t.isJSXElement(node)) {
        
        let tagName = node.openingElement.name.name;
        let attributes = node.openingElement.attributes;
        let context = { options, path, node, tagName, attributes, EMPTYTAG };

        attributes.forEach(attr => {
          context.attr = attr;
          // 处理组件指令
          parserDirective(context);
          // 动态组件
          parserDynamicComponent(context);
          //处理style 包括动态或者静态style的cpx ==> rpx的转化
          parserTemplateStyle(context)
          // c-bind,c-catch 事件处理
          parserEvent(context);

          // 处理c-animation
          parserAnimationTag(context);
        })
        // 处理组件tag相关, 处理tag要放在后边，防止对原生组件的event进行处理
        parserTag(context);
        // 处理完tag再处理class
        parserClass(context);
        // 去掉被标记为删除的attr
        node.openingElement.attributes = attributes = attributes.filter(attr => attr.name.name !== EMPTYTAG);
      }
    }
  });
  return generator(ast).code;
}