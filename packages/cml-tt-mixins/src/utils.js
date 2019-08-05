const _ = module.exports = {};
const {px2cpx} = require('./px2cpx.js');
_.getStyleKeyValue = function(declaration) {
  let colonIndex = declaration.indexOf(':');
  let key = declaration.slice(0, colonIndex);
  let value = declaration.slice(colonIndex + 1);
  return {
    key, value
  }
}

_.handleCompEventType = function(eventType) {
  let aliEventMap = {
    touchstart: 'touchStart',
    touchend: 'touchEnd',
    touchmove: 'touchMove'
  }
  if (Object.keys(aliEventMap).includes(eventType)) {
    return aliEventMap[eventType]
  } else {
    return eventType
  }
}
_.getNewEvent = function(e) {
  let newEvent = {};
  ['type', 'timeStamp', 'target', 'currentTarget', 'detail', 'touches', 'changedTouches'].forEach((key) => {
    if (e[key]) {
      if (~['target', 'currentTarget'].indexOf(key)) {
        let newTarget = {}
        newTarget = {
          id: e[key].id,
          dataset: e[key].dataset
        }
        newEvent[key] = newTarget
      } else if (~['touches', 'changedTouches'].indexOf(key)) {
        if (key == 'touches') {
          let touches = e[key];
          newEvent.touches = [];
          for (let i = 0;i < touches.length;i++) {
            let touch = touches[i];
            let ret = {}
            ret.identifier = touch.identifier;
            ret.pageX = px2cpx(parseInt(touch.pageX, 10));
            ret.pageY = px2cpx(parseInt(touch.pageY, 10));
            ret.clientX = px2cpx(parseInt(touch.clientX, 10));
            ret.clientY = px2cpx(parseInt(touch.clientY, 10));
            newEvent.touches.push(ret);
          }
        }

        if (key == 'changedTouches') {
          let changedTouches = e[key]
          newEvent.changedTouches = [];
          for (let i = 0;i < changedTouches.length;i++) {
            let touch = changedTouches[i];
            let ret = {}
            ret.identifier = touch.identifier;
            ret.pageX = px2cpx(parseInt(touch.pageX, 10));
            ret.pageY = px2cpx(parseInt(touch.pageY, 10));
            ret.clientX = px2cpx(parseInt(touch.clientX, 10));
            ret.clientY = px2cpx(parseInt(touch.clientY, 10));
            newEvent.changedTouches.push(ret);
          }
        }
      } else {
        newEvent[key] = e[key]
      }
    }
  })

  newEvent._originEvent = e;
  return newEvent;
}

