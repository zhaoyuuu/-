function _new(constructorFn, ...args) {
  // 创建一个新对象，并绑定原型链
  const newObj = Object.create(constructorFn.prototype)
  // 添加属性到新对象上 并获取obj函数的结果
  const ret = constructorFn.apply(newObj, args)  // 改变 this 指向
  // 如果执行结果有返回值并且是一个对象, 返回执行的结果,
  // 否则, 返回新创建的对象
  return typeof ret === 'object' ? ret : newObj
}

function Person(name, age) {
  this.name = name
  this.age = age
  return {
    ming_zi: 'liudehua',
    nian_ji: 40
  }
}
Person.prototype.say = function() {
  console.log(`我叫${this.name},我今年${this.age}岁`);
}

const me = _new(Person, 'zhaoyuuu', 20)
console.log(me);  // Person { name: 'zhaoyuuu', age: 20 }
console.log(me.name);  // zhaoyuuu
me.say()  // 我叫zhaoyuuu,我今年20岁