function _instanceof(example, classFunc) {
  // 由于 incetanceof 要检测的是对象（引用类型），所以要有这个前置判断：
  // 如果是原始数据类型，直接返回 false
  if(typeof example !== 'object' || example === null) return false

  let proto = example.__proto__  // 原型链上的原型对象
  while(true) {
    if(proto === null) return false

    // 如果在实例对象的原型链上找到了当前类，返回true
    if(proto === classFunc.prototype) return true
    // 否则顺着原型链往上继续找
    proto = proto.__proto__
  }
}

console.log(_instanceof(null, Object));  // false
console.log(_instanceof([], Array));  // true
console.log(_instanceof({}, Object));  // true