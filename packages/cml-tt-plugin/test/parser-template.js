let templateParser = require('../src/parser/parser-template');
let content = `
<view>
  <view c-for="{{array}}">
  </view>
  <view c-if="{{condition}}"> True </view>
  <view c-show="{{showDialog}}" c-text="{{msg}}"></view>
  <text c-text="{{msg}}"></text>
  <input c-model="{{msg}}"></input>
  <origin-button c-bind:tap="handlerFunc"></origin-button>
  <component is="{{ condition ? 'com1' : 'com2' }}" shrinkcomponents="com1, com2"></component>
</view>
`

let result = templateParser(content);
console.log(result)

