import cml from 'cml-tt-api';
import { createAnimation } from "cml-tt-api";
console.log(createAnimation,'---')
// const animation = createAnimation();// cml-com.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    animationData: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showAlert: function(event) {
      cml.alert({
        message:'This is alert! ',
        confirmTitle:"ok"
      }).then(function(res){
          cml.showToast({
              message:'success!',
              duration:1000
          })
      })
    },
    setTitle: function(){
      cml.setTitle('我是标题')
    },
    setTitle1: function(){
     
    },
    showComfirm: function(){
      cml.confirm({
        message:'Do you confirm?',
        confirmTitle:"ok",
        cancelTitle: "cancel"
      }).then(function(value){
          cml.showToast({
              message: "用户点击了"+value,
              duration:1000
          })
      })
    },

    chooseImg: function(){
      cml.chooseImage({ type: 'choice' }).then((res) => {
        console.log(res)
        // 接下来可以进行上传到服务器等操作
      })
    },

    close: function(){
      cml.close();
    },

    animate: function() {  
      console.log(cml)

      let animate = cml.createAnimation()
      console.log(animate)
      this.animationData = animate
      .rotate(90).step({duration: 1000})
      .export();
    },

    storage: function(){
      cml.setStorage('name', 'Hanks').then(()=>{
        cml.getStorage('name').then((value)=>{
          // 处理获取到的键值
          console.log(value)
        })

        cml.removeStorage('name').then(()=>{
          cml.getStorage('name').then((value)=>{
            // 处理获取到的键值
            console.log(value,'----')
          })
        })
      })
    },
    clipBoard: function(){
      cml.setClipBoardData('变态boss').then(res=>{
        cml.showToast({
          message: JSON.stringify(res),
          duration: 2000
        })
      }).catch(reason=>{
        cml.showToast({
          message: JSON.stringify(reason),
          duration: 2000
        })
      })

      cml.getClipBoardData().then(res=>{
       console.log(res)
      })
    },
    redirect: function(){
      cml.redirectTo({
        path: '/pages/index/index'
      })

      // cml.navigateTo({
      //   path: '/pages/index/index'
      // })

      // cml.navigateBack(-1);
    },
    getSystemInfo: function(){
      cml.getSystemInfo().then(info => {
        console.log(info)
        cml.navigateBack(-1);
      })      
    },
    lunchOptionsSync: function(){
      let obj = cml.getLaunchOptionsSync();
      console.log(obj)
      // cml.showToast({
      //   message: JSON.stringify(obj)
      // })
    },
    getRect: function(){
      cml.getRect('refTest', this).then(res => {
        console.log(res)
        cml.showToast({
          message: JSON.stringify(res)
        })
      })
    },
    px2cpx: function(){
      const cpx = cml.px2cpx(100);
      const px = cml.cpx2px(100);
      console.log(cpx, px, cml)

      cml.canIUse('showToast').then(() => {
        // 支持
        console.log('支持')
      }, () => {
        // 不支持
        console.log('不支持')
      });
    },
    initSocket: function(){
      let ws = cml.initSocket('ws://172.22.137.223:3333');

      ws.onopen(() => {
        cml.showToast({
          message: 'socket connected...',
          duration: 1000
        });
        setTimeout(() => {
          ws.send('hello cml socket');
        }, 2000);
      });

      ws.onmessage(res => {
        cml.showToast({
          message: 'receive from server: ' + res.data,
          duration: 1000
        })
        ws.send({
          keyword:'socket传递复杂类型',
          content: 'hello cml socket',
          arr: ['test1', 12, {}]
        })
      });

      ws.onerror(err => {
          console.error(err)
      });

      ws.onclose(() => {
        cml.showToast({
          message: 'socket closed...'
        })
      });

      setTimeout(() => {
        ws.close();
      }, 20000);

    },
    getLocationInfo: function(){
      cml.getLocationInfo().then(res => {
        // res: { lng[number]: 40.33, lat[number]: 154.33 }
        console.log(res)
      })
    },
    request: function(){
      cml.request({
        url: 'https://pianku.api.mgtv.com/rider/module/tags',
        data: {
          a: 1
        },
        method: 'GET'
      }).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })

      cml.get({
        url: 'https://pianku.api.mgtv.com/rider/module/tags'
      }).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })

      cml.post({
        url: 'https://cml.com/api/user/update',
        data: {
          a: 1
        }
      }).then(res => {
        console.log(res)
      }, err => {
        console.log(err)
      })
    }

  }
})
