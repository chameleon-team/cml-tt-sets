
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const path = require('path');

cml.config.merge({
  enableLinter: false,
  templateLang: "cml",
  templateType: "html",
  builtinNpmName: 'cml-tt-ui-builtin',
  extPlatform: {
    tt: 'cml-tt-plugin',
  },
  babelPath: [
    path.join(__dirname,'node_modules/cml-tt-ui-builtin'),
    path.join(__dirname,'node_modules/cml-tt-runtime'),
    path.join(__dirname,'node_modules/cml-tt-api'),
    path.join(__dirname,'node_modules/cml-tt-ui'),
    path.join(__dirname,'node_modules/cml-tt-store'),
    path.join(__dirname,'node_modules/cml-tt-mixins'),
    path.join(__dirname,'node_modules/mobx'),
  ],
  baseStyle:{
    wx: true,
    web: true,
    weex: true,
    alipay: true,
    baidu: true,
    qq: true,
    tt:true,
  },
  platforms: ['tt','wx','web'],
  buildInfo: {
    ttAppId:'2423',
    wxAppId: '123456'
  },
  base: {
    dev: {
      domain: {
        domain1: "localhost",
        domain2: "localhost",
        domain3: "localhost"
      },
    },
    build: {
      domain: {
        domain1: "http://api.cml.com",
        domain2: "http://api2.cml.com",
        domain3: "http://api3.cml.com"
  
      },
    },
  },
  tt: {
    dev: {
      moduleIdType: 'name',
    },
    build: {
      minimize: false
    }
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize: false
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

