const styleParser = require('../src/parser/parser-style');
const expect = require('chai').expect;
describe('parse-style', function() {
  describe('cpx2rpx', function() {
    let content = `
    .test {
      font-size: 24cpx;
      lines: 1;
    }
    `
    it('transfrom cpx to rpx', function() {
      expect(styleParser(content)).to.exist
    })
  });
})