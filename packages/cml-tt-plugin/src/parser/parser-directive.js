const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');
const { trimCurly, getModelKey, modelEventProxyName, trim, isInlineStatementFn } = require('../util');

module.exports = function(context) {
  let { attributes, attr, node, EMPTYTAG } = context;
  // 列表渲染
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-for') {
    attr.name.name = 'tt:for'
  }
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-for-index') {
    attr.name.name = 'tt:for-index'
  }
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-for-item') {
    attr.name.name = 'tt:for-item'
  }
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-key') {
    attr.name.name = 'tt:key'
  }
  // 条件渲染
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-if') {
    attr.name.name = 'tt:if'
  }
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-else') {
    attr.name.name = 'tt:else'
  }
  if(t.isJSXIdentifier(attr.name) && attr.name.name === 'c-else-if') {
    attr.name.name = 'tt:elif'
  }

  // c-model
  if (t.isJSXIdentifier(attr.name) && attr.name.name === 'c-model') {
    // 去除原本的cml-model指令，替换为value和input双向的语法糖
    attr.name.name = EMPTYTAG;
    let modelKey = getModelKey(attr.value.value);
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`value`), t.stringLiteral(attr.value.value)))
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`data-modelkey`), t.stringLiteral(`${modelKey}`)))
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`bindinput`), t.stringLiteral(`${modelEventProxyName}`)));
  }

  // c-show
  if (t.isJSXIdentifier(attr.name) && attr.name.name === 'c-show') {
    // c-show和style不能同时使用
    let styleNode = attributes.find((attr) => attr.name.name === 'style' || attr.name.name.name === 'style')
    if (styleNode) {
      throw new Error(`The style attribute can't be used in the element that has  attributes with c-show `);
    }
    // 去掉c-show指令
    attr.name.name = EMPTYTAG;
    let elementShow = trimCurly(attr.value.value);

    let styleNodeValue = `display:{{${elementShow}?'':'none'}};{{${elementShow}?'':'height:0px;width:0px;overflow:hidden'}}`
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`style`), t.stringLiteral(styleNodeValue)))
  }

  // c-text
  if (t.isJSXIdentifier(attr.name) && attr.name.name === 'c-text') {
    // 去掉c-show指令
    attr.name.name = EMPTYTAG;
    let textValue = attr.value.value;
    node.children = [t.jsxText(textValue)];
  }
}