const { types: t } = require('mvvm-template-parser');
const { trim } = require('../util');

module.exports = function (context) {
  let { attr } = context;
  let namespace = attr.name && attr.name.namespace
  if (namespace && (namespace.name === 'c-bind' || attr.name.namespace.name === 'c-catch')) {
    // 头条文档上并没有找到关于catch的描述。。。。。。
    let handler = attr.value.value && trim(attr.value.value);
    let eventNameKey = namespace.name === 'c-bind' ? 'bind' : 'catch';
    let eventNameVal = attr.name.name.name === 'click' ? 'tap' : attr.name.name.name;
    let eventName = `${eventNameKey}${eventNameVal}`;
    attr.name = t.jsxIdentifier(eventName);
  }
}