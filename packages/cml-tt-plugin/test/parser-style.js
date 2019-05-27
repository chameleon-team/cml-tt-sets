const styleParser = require('../src/parser/parser-style');

let content = `
.test {
  font-size: 24cpx;
  lines: 1;
}
`

let result = styleParser(content);
console.log(result);