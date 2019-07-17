const postcss = require('postcss');
const cpx = require('chameleon-css-loader/postcss/cpx.js')
const weexPlus = require('chameleon-css-loader/postcss/weex-plus.js')
const fs = require('fs');
const path = require('path');
module.exports = function(source) {
  let isTtInjectBaseStyle = cml.config.get().baseStyle.tt;
  let options = {
    cpxType: 'rpx'
  }
  if(isTtInjectBaseStyle){
    let ttBaseStylePath = path.resolve(__dirname,'../style/index.css') 
    let css = fs.readFileSync(ttBaseStylePath, "utf8")
    source = css + source
    return postcss([cpx(options), weexPlus()]).process(source).css;
  }
  return postcss([cpx(options), weexPlus()]).process(source).css;
}
