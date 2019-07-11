global.tt = {
  wxPage: {
    title: '',
    closed: false
  },
  app: {
    opened: false
  }
};
global.tt.getSystemInfo = function (params) {
  params.success({
    system: 'ios',
    windowWidth: 375,
    windowHeight: 667,
    viewportWidth: 375,
    viewportHeight: 667
  });
}
global.tt.getSystemInfoSync = function (params) {
  return {
    windowWidth: 375
  }
}
global.tt.getUserInfo = function (params) {
  params.success({
    uid: 123456
  });
}
global.tt.getLocation = function (params) {
  params.success({
    latitude: 123456,
    longitude: 123456
  });
}

global.tt.canIUse = function (params) {
  return true;
}
global.tt.getLaunchOptionsSync = function (params) {
  return {
    path: '',
    query: {
      name: 'cml'
    }
  }
}

global.tt.chooseImage = function (params) {
  params.success({
    tempFilePaths: ['filepath']
  });
}

global.tt._clipboardData = '';
global.tt.setClipboardData = function (params) {
  global.tt._clipboardData = params.data;
  params.success();
}
global.tt.getClipboardData = function (params) {
  params.success({
    data: global.tt._clipboardData
  });
}

global.tt._storage = {};
global.tt.setStorage = function (params) {
  global.tt._storage[params.key] = params.data;
  params.success({})
}
global.tt.setStorageSync = function (key, value) {
  global.tt._storage[key] = value;
}

global.tt.getStorageSync = function (key) {
  return global.tt._storage[key];
}

global.tt.setNavigationBarTitle = function (params) {
  global.tt.wxPage.title = params.title;
}

global.tt.navigateBack = function (params) {
  global.tt.wxPage.closed = true;
}

global.tt.navigateToMiniProgram = function (params) {
  global.tt.app.opened = true;
}

global.tt.request = function (params) {
  var fromData = queryParse(params.data || params.url.split('?')[1]);
  var fromDataLength = Object.keys(fromData).length;
  var res = {
    errno: "0"
  }
  if (fromDataLength) {
    res = fromData;
  }
  params.success({
    statusCode: 200,
    header: {},
    data: res
  })
}
global.tt.createSelectorQuery = function (params) {
  return {
    in: function () {
      return {
        exec: function (cb) {
          cb([{
            width: 100,
            height: 100,
            left: 100,
            top: 100,
            right: 100,
            bottom: 100
          }])
        },
        select: function () {
          return {
            boundingClientRect: function () {

            }
          }
        }
      }
    }
  }
}

function queryParse(search = '') {
  let arr = search.split(/(\?|&)/);
  let parmsObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf('=') !== -1) {
      let keyValue = arr[i].match(/([^=]*)=(.*)/);
      parmsObj[keyValue[1]] = keyValue[2];
    }
  }
  return parmsObj;
}
