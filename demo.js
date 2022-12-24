Function.prototype._bind = function(context = window, ...args) {
  // this是调用bind的函数
  const self = this
  // 返回一个函数，innerArgs是实际调用时传入的参数
  function fBound(...innerArgs) {
    // 利用 apply 改变this指向，并调用函数
    return self.apply(context, [...args, ...innerArgs])
  }

  return fBound
}


/* 实验一：创建绑定函数 */
function say() {
  console.log(`我是${this.name},今年${this.age}岁`);
}
const me = {
  name: 'zhaoyuuu',
  age: 20
}

say()  // 我是undefined,今年undefined岁
const boundSay = say._bind(me)
boundSay()  // 我是zhaoyuuu,今年20岁

/* 实验二：偏函数 */
function list() {
  console.log(arguments);
}

list('arg1', 'arg2')
const presetList = list._bind(null, 'presetParameter')  // 不需要绑定this，所以第一个参数为null
presetList('arg1', 'arg2')