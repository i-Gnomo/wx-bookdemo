// pages/list/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datalist:[{
      "id":'1',
      "title":"平凡的世界",
      "author":"路遥"
    },{
        "id": '2',
        "title": "晨雨初听",
        "author": "余秋雨"
    },{
        "id": '3',
        "title": "我与地坛",
        "author": "史铁生"
    },{
        "id": '4',
        "title": "倾城之恋",
        "author": "张爱玲"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('list-index', options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('用户下拉了一下页面');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('上拉触底');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: "小宣的小程序",
      path: "/pages/list/index"
    }
  },

  /**
   * 页面滚动触发的事件处理函数
   */
  onPageScroll: function(options) {
    console.log('scrollTop', options.scrollTop);
  },

  /*
    跳转到书单详情页 info
   */
  toDetailInfo: function (event) {
    var _tid = event.currentTarget.dataset.bookid;
    wx.navigateTo({
      url: '/pages/info/index?id=' + _tid
    })
  }

})