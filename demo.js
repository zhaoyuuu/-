Array.prototype._some = function(callback, context) {
  const arr = this
  for(let i = 0; i < arr.length; i++) {
    if(callback.call(context, arr[i], i, arr) === true) return true
  }
  return false
}

// 使用
const arr1 = [1,2,3,4]
const arr2 = []
const isValid = n => n < 4
console.log(arr1._some(isValid));  // true
console.log(arr2._some(isValid));  // false  若收到一个空数组，此方法在任何情况下都会返回 true