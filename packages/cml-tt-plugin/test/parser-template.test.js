let templateParser = require('../src/parser/parser-template');
const expect = require('chai').expect;

const options = {
  usingComponents: [
    {
      tagName: 'component1',
      refUrl: '/path/to/ref1',
      filePath: 'path/to/real1',
      isNative: false
    },
    {
      tagName: 'component2',
      refUrl: '/path/to/ref2',
      filePath: 'path/to/real2',
      isNative: false
    }
  ]
}

describe('parse-template', function() {
  // 处理originTag名称
  describe('parser-tag', function() {
    let content = `<origin-view></origin-view>`
    it('transform originTag to origin name', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-origin-view"></view>`)
    })
  })
  // 处理需要替换的tag名称
  describe('parser-tag', function() {
    let content = `
      <view>
        <cell></cell>
        <cover-view></cover-view>
        <slider-item></slider-item>
        <carousel></carousel>
        <carousel-item></carousel-item>
      </view>
    `
    it('replace some tag', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view">
        <view class=" cml-base cml-cell"></view>
        <view class=" cml-base cml-cover-view"></view>
        <swiper-item class=" cml-base cml-slider-item"></swiper-item>
        <swiper class=" cml-base cml-carousel"></swiper>
        <swiper-item class=" cml-base cml-carousel-item"></swiper-item>
      </view>`)
    })
  })
  // 处理class名称
  describe('parser-class', function() {
    let content = `<view></view>`
    it('add base class to tt node', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view"></view>`)
    })
  })
  describe('parser-class', function() {
    let content = `<view class="base-style"></view>`
    it('add base class to tt node', function() {
      expect(templateParser(content, options)).to.equal(`<view class="base-style  cml-base cml-view"></view>`)
    })
  })
  describe('parser-class', function() {
    let content = `<component1></component1>`
    it('add base class to tt node', function() {
      expect(templateParser(content, options)).to.equal(`<component1 class=" cml-view cml-component1"></component1>`)
    })
  })

  // 处理template指令
  describe('parser-directive', function() {
    // 处理列表循环指令
    let content = `<view c-for="{{array}}" c-for-index="{{ index }}" c-for-item="{{ item }}" c-key="{{ index }}"></view>`
    it('transform c-for to tt-for', function() {
      expect(templateParser(content)).to.equal(`<view tt:for="{{array}}" tt:for-index="{{ index }}" tt:for-item="{{ item }}" tt:key="{{ index }}" class=" cml-base cml-view"></view>`)
    })
  });
  describe('parser-directive', function() {
    // 处理条件渲染指令
    let content = `
      <view>
        <view c-if="{{ condition }}"></view>
        <com c-else-if="{{ condition2 }}"></com>
        <com2 c-else></com2>
      </view>
    `
    it('transform condition render', function() {
      expect(templateParser(content)).to.equal(`<view class=" cml-base cml-view">
        <view tt:if="{{ condition }}" class=" cml-base cml-view"></view>
        <com tt:elif="{{ condition2 }}" class=" cml-base cml-com"></com>
        <com2 tt:else class=" cml-base cml-com2"></com2>
      </view>`)
    })
  });

  // 处理c-model指令
  describe('parser-directive', function() {
    let content = `<input c-model="{{msg}}"></input>`
    it('transform c-model directive to origin directive', function() {
      expect(templateParser(content)).to.equal(`<input value="{{msg}}" data-modelkey="msg" bindinput="_cmlModelEventProxy" class=" cml-base cml-input"></input>`)
    })
  });
  // 处理c-show指令
  describe('parser-directive', function() {
    let content = `<view c-show="{{showDialog}}"></view>`
    it('transform c-show directive to origin directive', function() {
      expect(templateParser(content)).to.equal(`<view style="display:{{showDialog?'':'none'}};{{showDialog?'':'height:0px;width:0px;overflow:hidden'}}" class=" cml-base cml-view"></view>`)
    })
  });
  // 处理c-text指令
  describe('parser-directive', function() {
    let content = `<text c-text="{{msg}}"></text>`
    it('transform c-text directive to origin directive', function() {
      expect(templateParser(content)).to.equal(`<text class=" cml-base cml-text">{{msg}}</text>`)
    })
  });
  // 处理c-animation指令
  describe('parser-animation', function() {
    let content = `<view c-animation="{{ animationData }}"></view>`
    it('handle c-animation directive', function() {
      expect(templateParser(content)).to.equal(`<view animation="{{ animationData }}" class=" cml-base cml-view"></view>`)
    })
  });

  // 处理动态组件
  describe('parser-dunamic-component', function() {
    let content = `<view><component is="{{ condition ? 'component1' : 'component2' }}"></component></view>`
    it('handle dynamic components', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view"><component1 tt:if="{{ condition ? 'component1' : 'component2'  === 'component1'}}" class=" cml-view cml-component1"></component1><component2 tt:if="{{ condition ? 'component1' : 'component2'  === 'component2'}}" class=" cml-view cml-component2"></component2></view>`)
    })
  });
  describe('parser-dunamic-component', function() {
    let content = `<view><component is="{{ condition ? 'component1' : 'component2' }}" shrinkcomponents="component1, component2"></component></view>`
    it('handle dynamic components', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view"><component1 tt:if="{{ condition ? 'component1' : 'component2'  === 'component1'}}" class=" cml-view cml-component1"></component1><component2 tt:if="{{ condition ? 'component1' : 'component2'  === 'component2'}}" class=" cml-view cml-component2"></component2></view>`)
    })
  });

  // 处理事件代理
  describe('parser-event', function() {
    let content = `<view><text c-bind:tap="gotoApiPage">gotoApiPage</text></view>`
    it('handle event proxy', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view"><text bindtap="_cmlEventProxy" data-eventtap="{{['gotoApiPage']}}" class=" cml-base cml-text">gotoApiPage</text></view>`)
    })
  });
  describe('parser-event', function() {
    let content = `<view><text c-bind:tap="gotoApiPage(name, age)">gotoApiPage</text></view>`
    it('handle event proxy', function() {
      expect(templateParser(content, options)).to.equal(`<view class=" cml-base cml-view"><text bindtap="_cmlInline" data-eventtap="{{['gotoApiPage',name, age]}}" class=" cml-base cml-text">gotoApiPage</text></view>`)
    })
  });
})