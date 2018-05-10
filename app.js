//app.js 程序注册 
//逻辑层 App Service
App({
  onLaunch: function (options) {
    console.log('打开小程序的路径', options.path, '打开小程序的场景', options.scene);
    // 只触发一次
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        /*
        * res.authSetting = {
        *   "scope.userInfo": true,
        *   "scope.userLocation": true
        * }
        */
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              //console.log(res.userInfo);
              /*
                avatarUrl:""
                city:"Hangzhou"
                country:"China"
                gender:2
                language:"zh_CN"
                nickName:"小宣"
                province:"Zhejiang"
              */
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  
  },
  onShow: function (options){
    //获取系统信息
    wx.getSystemInfo({
      success: res => {
        //小程序客户端基础库版本
        console.log('res.SDKVersion:',res.SDKVersion);
      },
    })
  },
  onHide: function(){

  },
  onError: function(msg){
    console.log('errormsg', msg);
  },
  onPageNotFound: function(){
    //当页面找不到时 可以做重定向处理
    // wx.redirectTo({
    //   url: '',
    // })
  },
  globalData: {
    abc: "abc",
    userInfo: null
  }
})