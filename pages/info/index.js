// pages/info/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentbook:{
    },
    infoJson:{
      bdata:[{
        "id":'1',
        "title": "平凡的世界",
        "author": "路遥",
        "coverimg":'https://img3.doubanio.com/view/subject/l/public/s2335693.jpg',
        "url":'',
        "score":'9.0',
        "binfo":'《平凡的世界》是一部现实主义小说，也是一部小说形式的家族史。作者浓缩了中国西北农村的历史变迁过程，在小说中全景式地表现了中国当代城乡的社会生活。在近十年的广阔背景下，通过复杂的矛盾纠葛，刻划社会各阶层众多普通人的形象。劳动与爱情，挫折与追求，痛苦与欢乐，日常生活与巨大社会冲突，纷繁地交织在一起，深刻地展示了普通人在大时代历史进程中所走过的艰难曲折的道路。'
      },{
        "id": '2',
        "title": "晨雨初听",
        "author": "余秋雨",
        "coverimg": 'https://img3.doubanio.com/view/subject/l/public/s1077261.jpg',
        "url": '',
        score: '7.6',
        binfo: '《晨雨初听》是余秋雨的散文集，收有《青年人的阅读》、《寻找文化现场》、《一个王朝的背影》、《遥远的绝响》、《最后的课程》、《人生的最后智慧》等文章。'
      },{
        "id": '3',
        "title": "我与地坛",
        "author": "史铁生",
        coverimg: 'https://img1.doubanio.com/view/subject/l/public/s4594868.jpg',
        url: '',
        score: '9.2',
        binfo: '《我与地坛》收入《我与地坛》、《记忆与印象》等以记事为主的散文，配少量图片。《我与地坛》由中国当代著名作家史铁生著。是史铁生文学作品中，充满哲思又极为人性化的代表作之一。其前第一段和第二段被纳入人民教育出版社的高一教材中。前两部分注重讲地坛和他与母亲的后悔，对于中学生来说，这是一篇令人反思的优秀文章。史铁生是当代中国最令人敬佩的作家之一。他的写作与他的生命完全同构在了一起，在自己的“写作之夜”，史铁生用残缺的身体，说出了最为健全而丰满的思想。他体验到的是生命的苦难，表达出的却是存在的明朗和欢乐，他睿智的言辞，照亮的反而是我们日益幽暗的内心。 地坛只是一个载体，而文章的本质却是一个绝望的人寻求希望的过程，以及对母亲的思念。'
      },{
        "id": '4',
        "title": "倾城之恋",
        "author": "张爱玲",
        coverimg: 'https://img3.doubanio.com/view/subject/l/public/s4638950.jpg',
        url: '',
        score: '8.7',
        binfo: '《倾城之恋》是张爱玲的成名作与代表作。白流苏和范柳原这一对现实庸俗的男女，在战争的兵荒马乱之中被命运掷骰子般地掷到了一起，于“一刹那”体会到了“一对平凡的夫妻”之间的“一点真心”。'
      }]
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    console.log(option.id);
    const len = this.data.infoJson.bdata.length;
    for(let i=0;i<len;i++){
      const tmp = this.data.infoJson.bdata[i];
      if(option.id == tmp['id']){
        this.setData({
          currentbook: tmp
        })
        break;
      }
    }
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})