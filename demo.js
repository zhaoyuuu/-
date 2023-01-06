Object._is = function(x, y) {
  // +0 和 -0 的情况
  if(x === 0 && y === 0) {
    return (1 / x) === (1 / y)
  }
  // x,y都是 NaN 的情况
  if(x !== x && y !== y) return true

  return x === y
}

// 使用
console.log(-0 === +0);  // true
console.log(Object._is(-0, +0));  // false

console.log(NaN === NaN);  // false
console.log(Object._is(NaN, NaN));  // true