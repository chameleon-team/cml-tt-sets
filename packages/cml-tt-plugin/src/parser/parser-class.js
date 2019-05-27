const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');
const { trimCurly, getModelKey, modelEventProxyName, trim, isInlineStatementFn } = require('../util');

module.exports = function(context) {
  let { attributes, tagName, attr } = context;
  let classNodes = attributes.filter((attr) => attr.name.name === 'class');
  let extraClass = ` cml-base cml-${tagName}`;
  // 这里有一个useComponents的逻辑，带template节点加上之后再处理
  if (classNodes.length === 0) {
    attributes.push(t.jsxAttribute(t.jsxIdentifier('class'), t.stringLiteral(extraClass)));
  } else if (classNodes.length === 1) {
    classNodes.forEach((itemNode) => {
      const dealedClassNodeValue = `${itemNode.value.value} ${extraClass}`
      itemNode.value.value = dealedClassNodeValue;
    })
  } else {
    throw new Error(`Only allow one class node in element's attribute with cml syntax`);
  }
}
