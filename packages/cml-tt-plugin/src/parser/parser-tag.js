module.exports = function(context) {
  let { tagName, node } = context;
  // origin-tag原生组件替换
  if(/^origin\-/.test(tagName)) {
    let newtagName = tagName.replace(/^origin\-/,'');
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
  // 部分组件替换
  if(tagName === 'cover-view') {
    let newtagName = 'view';
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
  if(tagName === 'cell') {
    let newtagName = 'view';
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
  if(tagName === 'slider-item') {
    let newtagName = 'swiper-item';
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
  if(tagName === 'carousel') {
    let newtagName = 'swiper';
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
  if(tagName === 'carousel-item') {
    let newtagName = 'swiper-item';
    node.openingElement.name.name = newtagName;
    node.closingElement.name.name = newtagName;
  }
}