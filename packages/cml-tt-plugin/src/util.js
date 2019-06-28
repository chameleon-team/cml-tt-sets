const { types: t } = require('mvvm-template-parser');
const _ = module.exports = {};
_.trimCurly = (str) => str.replace(/(?:{{)|(?:}})/ig, '');

_.getModelKey = function(modelKey) {
  modelKey = _.trimCurly(modelKey);
  modelKey = modelKey.trim();
  return modelKey;
}

// 驼峰化单词
_.camelize = function(str) {
  return str.replace(/[-_\s]+(.)/g, function(match, key) {
    return key ? key.toUpperCase() : '';
  })
}
// 中划线化单词
_.dasherise = function(str) {
  return str.replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-')
    .toLowerCase();
}

/* 获取某个jsxElement 上的某个具体属性的值*
@params:
path:代表JSXElement的path值
return
该JSXElement上所有的属性集合
*/
_.trim = function (value) {
  return value.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
};
_.isInlineStatementFn = function (statament) {
  let reg = /\(([\s\S]*?)\)/;
  return statament.match(reg);
}
// 判断函数参数值在微信中是否是响应式的属性，'index' 代表字符串 'index'+1 代表表达式；
_.isReactive = function (value) {
  let reg = /(?:^'([^']*?)'$)/;
  return _.trim(value).match(reg);
}
_.doublequot2singlequot = function (value) {
  return value.replace(/["]/g, "'");
}
_.isOnlySpaceContent = function(value) {
  let reg = /[^\s]+/;
  return !reg.test(value);
}

// 转换 $event参数
_.getInlineStatementArgs = function(argsStr) {
  const result = argsStr.split(',').reduce((result, current, index) => {
    if (current === '$event') {
      result.push("'$event'");
    } else {
      result.push(current)
    }
    return result
  }, []);
  return result.join();// "1,'index'+1,'$event','item',index+1,item"

}

_.isOriginTagOrNativeComp = function(tagName, options = {}) {
  let usedComponentInfo = (options.usingComponents || []).find((item) => item.tagName === tagName)
  let isNative = usedComponentInfo && usedComponentInfo.isNative;
  let isOrigin = (tagName && typeof tagName === 'string' && tagName.indexOf('origin-') === 0);
  if (isOrigin || isNative) {
    return true
  }
  return false;
}
