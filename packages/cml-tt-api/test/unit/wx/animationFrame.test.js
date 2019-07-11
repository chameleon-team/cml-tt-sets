require('../../vm/tt/index')
var cml = require('../../.api/tt/index')["default"];
var expect = require('chai').expect;

describe('动画帧', function () {
  it('requestAnimationFrame', function () {
    cml.requestAnimationFrame(function (id) {
      expect(id).to.match(/\d+/);
    })
  })

  it('cancelAnimationFrame', function () {
    cml.cancelAnimationFrame();
  })
})
