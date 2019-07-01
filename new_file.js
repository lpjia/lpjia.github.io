var $$ = {
  /**
   * 常见写法
   */
  fc: function() {
    setInterval(function() {
      console.log(this); // this指向 window
    }, 1000)
  },
  /**
   * 加箭头函数，这是解决办法！！！
   */
  fc2: function() {
    setInterval(() => {
      console.log(this); // this指向 $$
    }, 1000)
  },
  /**
   * 用赋值的写法，
   * 测试循环定时器，停止
   */
  fc3: setInterval(function() {
    console.log('fc3测试');
    console.log(this)
    $$.fc3_1();
  }, 1000),
  fc3_1: function() {
    clearInterval(this.fc3); // 停止
  }
}