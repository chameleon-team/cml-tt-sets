const utils = require('..//src/util');
var expect = require('chai').expect;
describe('utils', function() {
  describe('trimCurly', function() {
    it('trim {{variable}} to variable', function() {
      expect(utils.trimCurly(`{{name}}`)).to.equal(`name`)
    })
  });
  //驼峰化
  describe('camelize', function() {
    it('transform ab-c to abC' , function() {
      expect(utils.camelize(`abc-de-f`)).to.equal(`abcDeF`)
    })
  });
  //中划线化
  describe('dasherise', function() {
    it('transform  abcDeF to abc-de-f' , function() {
      expect(utils.dasherise(`abcDeF`)).to.equal(`abc-de-f`)
    })
  });
  describe('getModelKey', function() {
    it('trim {{ variable }} to variable', function() {
      expect(utils.getModelKey(`{{ name }}`)).to.equal(`name`)
    })
  });
  describe('trim', function() {
    it(`trim the word`, function() {
      expect(utils.trim(' beTrimed ')).to.equal('beTrimed');
    })
  });
  describe('isInlineStatementFn', function() {
    it(`judge if the expression is inlineStatement`, function() {
      expect(utils.isInlineStatementFn(`c-bind:click="handleClick(item,1,'1',  'index')"`)).to.be.an('array');
    })
  });
  describe('isInlineStatementFn', function() {
    it(`judge if the expression is inlineStatement`, function() {
      expect(utils.isInlineStatementFn(`c-bind:click="handleClick"`)).to.not.be.ok;
    })
  })
  describe('isReactive', function() {
    it('judge if the arguments is reactive', function() {
      expect(utils.isReactive(`'index'`)).to.be.an('array')
    })
  });
  describe('isReactive', function() {
    it('judge if the arguments is not reactive', function() {
      expect(utils.isReactive(`'index'+1`)).to.not.be.ok;
    })
  });
  describe('doublequot2singlequot', function() {
    it('transform doublequot to singlequot', function() {
      expect(utils.doublequot2singlequot(`"name"`)).to.equal(`'name'`)
    })
  });
  describe('isOnlySpaceContent', function() {
    it('judge if the value is only space key', function() {
      expect(utils.isOnlySpaceContent('   ')).to.be.ok;
    })
  });
  describe('getInlineStatementArgs', function() {
    it('transform argsStr to args', function() {
      expect(utils.getInlineStatementArgs("1,'index'+1,$event,'item',index+1,item")).to.equal("1,'index'+1,'$event','item',index+1,item");
    })
  });
  describe('isOriginTagOrNativeComp', function() {
    it('judge if the node is origin or native node', function() {
      expect(utils.isOriginTagOrNativeComp('button', {
        usingComponents: [
          {
            tagName: 'button',
            isNative: true
          }
        ]
      })).to.equal(true);
    })
  });
  describe('isOriginTagOrNativeComp', function() {
    it('judge if the node is origin or native node', function() {
      expect(utils.isOriginTagOrNativeComp('origin-button')).to.equal(true);
    })
  });
  describe('isOriginTagOrNativeComp', function() {
    it('judge if the node is origin or native node', function() {
      expect(utils.isOriginTagOrNativeComp('button')).to.equal(false);
    })
  });
})
