const {cmlparse, generator, types: t, traverse} = require('mvvm-template-parser');
const utils = require('../util.js')
//预处理animation
exports.preParseAnimation = function(source, type) {
  let ast = cmlparse(source);
  traverse(ast, {
    enter(path) {
      let node = path.node;
      if (t.isJSXAttribute(node) && (node.name.name === 'c-animation')) {
        let value = utils.trimCurly(node.value.value).trim();
        path.insertAfter(t.jsxAttribute(t.jsxIdentifier(`c-bind:transitionend`), t.stringLiteral(`_animationCb('${value}',$event)`)))
      }
    }
  });
  return generator(ast).code;

}