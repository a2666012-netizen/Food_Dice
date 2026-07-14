Page({
  data: {
    currentPreference: "",
    showResult: false,
    breakfast: "",
    lunch: "",
    dinner: ""
  },

  // 美食数据
  preferences: {
    chinese: {
      breakfast: ["豆浆油条", "小笼包配粥", "煎饼果子", "蒸蛋羹", "包子配小米粥", "茶叶蛋配馒头", "豆腐脑", "粢饭团"],
      lunch: ["宫保鸡丁饭", "红烧肉盖饭", "鱼香肉丝面", "番茄鸡蛋面", "麻婆豆腐盖饭", "糖醋里脊饭", "回锅肉盖饭", "酸菜鱼火锅"],
      dinner: ["清蒸鲈鱼", "冬瓜排骨汤", "蒜蓉空心菜", "糖醋里脊", "凉拌黄瓜", "红烧茄子", "蒸蛋豆腐", "白切鸡"]
    },
    italian: {
      breakfast: ["意式咖啡配牛角包", "燕麦奶昔", "意式吐司配番茄", "酸奶配坚果", "意式煎蛋", "提拉米苏", "卡布奇诺配杏仁饼干", "意式酸奶配蜂蜜"],
      lunch: ["意大利面配肉酱", "玛格丽特披萨", "意式炖饭", "意式沙拉", "帕尔马火腿配面包", "海鲜意面", "蘑菇烩饭", "凯撒沙拉"],
      dinner: ["烤蔬菜意面", "意式海鲜汤", "提拉米苏", "意式烤鸡", "蔬菜千层面", "意式炖牛肉", "蘑菇烩饭", "意式蔬菜汤"]
    },
    american: {
      breakfast: ["培根煎蛋三明治", "美式松饼配枫糖", "燕麦粥", "煎饼配培根", "早餐汉堡", "班尼迪克蛋", "法式吐司", "酸奶配蓝莓"],
      lunch: ["芝士汉堡", "炸鸡汉堡", "热狗", "薯条配可乐", "鸡肉沙拉", "BLT三明治", "美式烤肉", "凯撒沙拉"],
      dinner: ["烤牛排", "炸鸡配土豆泥", "芝士通心粉", "玉米浓汤", "苹果派", "烤肋排", "奶油菠菜", "烤红薯"]
    },
    japanese: {
      breakfast: ["味噌汤配米饭", "日式煎蛋卷", "烤鱼配米饭", "纳豆配米饭", "日式酸奶", "绿茶配和果子", "豆腐沙拉", "海苔配粥"],
      lunch: ["寿司拼盘", "拉面", "照烧鸡排饭", "天妇罗定食", "乌冬面", "日式咖喱饭", "鳗鱼饭", "亲子丼"],
      dinner: ["刺身拼盘", "日式火锅", "烤秋刀鱼", "茶碗蒸", "日式煎饺", "味噌汤", "烤鸡肉串", "日式豆腐"]
    },
    korean: {
      breakfast: ["韩式紫菜包饭", "韩式煎饼", "韩式米肠汤", "韩式拌饭", "韩式豆浆", "韩式年糕", "韩式泡菜粥", "韩式煎蛋"],
      lunch: ["韩式烤肉", "石锅拌饭", "韩式冷面", "部队锅", "韩式炸鸡", "韩式拌饭", "韩式豆腐汤", "韩式煎饺"],
      dinner: ["韩式烤肉", "泡菜汤", "韩式炖排骨", "韩式煎饺", "韩式拌饭", "韩式冷面", "韩式海鲜汤", "韩式煎饼"]
    },
    southeast_asian: {
      breakfast: ["越南河粉", "泰式粥", "新加坡炒粿条", "印尼炒饭", "泰式奶茶配油条", "越南春卷", "马来西亚椰浆饭", "泰式炒河粉"],
      lunch: ["泰式绿咖喱鸡", "越南三明治", "新加坡辣椒蟹", "印尼沙爹", "泰式冬阴功汤", "越南河粉", "马来西亚咖喱面", "泰式炒河粉"],
      dinner: ["泰式椰汁鸡汤", "越南春卷", "新加坡炒粿条", "印尼炒饭", "泰式咖喱蟹", "越南河粉", "马来西亚椰浆饭", "泰式炒河粉"]
    },
    vegetarian: {
      breakfast: ["燕麦粥配坚果", "全麦吐司配牛油果", "水果沙拉", "豆浆配包子", "蔬菜煎饼", "坚果酸奶", "豆腐脑", "藜麦沙拉"],
      lunch: ["蔬菜沙拉", "豆腐炒饭", "素食汉堡", "蘑菇意面", "蔬菜汤", "藜麦碗", "素食寿司", "烤蔬菜三明治"],
      dinner: ["烤蔬菜沙拉", "豆腐汤", "素食炒面", "蔬菜咖喱", "藜麦沙拉", "素食披萨", "蒸蔬菜", "豆腐炒饭"]
    },
    mediterranean: {
      breakfast: ["希腊酸奶配蜂蜜", "全麦面包配橄榄油", "地中海水果", "鹰嘴豆泥配蔬菜", "橄榄配奶酪", "地中海燕麦", "坚果拼盘", "地中海酸奶"],
      lunch: ["希腊沙拉", "地中海烤鱼", "橄榄油意面", "地中海蔬菜汤", "鹰嘴豆沙拉", "地中海烤蔬菜", "橄榄油面包", "地中海炖菜"],
      dinner: ["地中海烤鱼", "橄榄油意面", "希腊沙拉", "地中海蔬菜汤", "烤蔬菜", "橄榄油面包", "地中海炖菜", "鹰嘴豆沙拉"]
    }
  },

  // 选择偏好类型
  selectPreference(e) {
    const type = e.currentTarget.dataset.type;
    this.setData({
      currentPreference: type
    });
  },

  // 获取随机美食
  getRandomMeal(meals) {
    return meals[Math.floor(Math.random() * meals.length)];
  },

  // 生成推荐菜单
  generateMeals() {
    if (!this.data.currentPreference) {
      wx.showToast({
        title: '请选择一种食品偏好！',
        icon: 'none'
      });
      return;
    }

    const data = this.preferences[this.data.currentPreference];
    this.setData({
      breakfast: this.getRandomMeal(data.breakfast),
      lunch: this.getRandomMeal(data.lunch),
      dinner: this.getRandomMeal(data.dinner),
      showResult: true
    });
  },

  // 重新生成
  regenerate() {
    this.generateMeals();
  },

  // 重置选择
  reset() {
    this.setData({
      showResult: false,
      currentPreference: "",
      breakfast: "",
      lunch: "",
      dinner: ""
    });
  }
});