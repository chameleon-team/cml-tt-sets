import cml from 'cml-tt-api';
// import { createAnimation } from "cml-tt-api";
// const animation = createAnimation();
// cml-com.js
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
      // this.animationData = animation
      // .translateX(200).step({duration: 1000})
      // .translateY(200).step({duration: 1000})
      // .width(100).step({duration: 1000})
      // .height(100).step({duration: 1000})
      // .backgroundColor('#000000').step({duration: 1000})
      // .opacity(0.1).step({duration: 1000})
      // .export();
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
    }
  }
})
