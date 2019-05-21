function parseDirective(node) {
  // c-show
  let attributes = node.openingElement.attributes;
  let showDirectiveNode = attributes.find((attr, i) => {
    if (attr.name.name === 'c-show') {
      attributes.splice(i, 1);
    }
    return attr.name.name === 'c-show';
  });
  let styleNode = attributes.find((attr) => attr.name.name === 'style' || attr.name.name.name === 'style')
  if (!showDirectiveNode) {
    return ;
  }
  if (styleNode) {
    throw new Error(`The style attribute can't be used in the element that has  attributes with c-show `);
  }
  let elementShow = utils.trimCurly(showDirectiveNode.value.value);

  let styleNodeValue = `display:{{${elementShow}?'':'none'}};{{${elementShow}?'':'height:0px;width:0px;overflow:hidden'}}`
  if (type === 'weex') {
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`style`), t.stringLiteral(styleNodeValue)))
  } else if (type === 'web') {
    attributes.push(t.jsxAttribute(t.jsxIdentifier(`v-show`), t.stringLiteral(elementShow)))
  }
}

module.exports = parseDirective;
