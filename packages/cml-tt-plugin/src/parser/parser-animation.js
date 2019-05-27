const { types: t } = require('mvvm-template-parser');

module.exports = function(cotext) {
  let { attr } = context;
  if (t.isJSXIdentifier(attr.name) && attr.name.name === 'c-animation') {
    attr.name.name = 'animation';
  }
}