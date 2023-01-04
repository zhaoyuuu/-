## 1 实现Promise.resolve
### 思路
- 传参为一个 `Promise`, 则直接返回它。
- 传参为一个 `thenable` 对象，**返回的 `Promise` 会跟随这个对象，采用它的最终状态作为自己的状态。**
- 其他情况，直接返回以该值为成功状态的`promise`对象。

```js
Promise._resolve = (param) => {
  if(param instanceof Promise) return param
  return new Promise((resolve, reject) => {
    if(param && param.then) {
      param.then(resolve, reject)
    }
    else {
      resolve(param)
    }
  })
}

// 使用
const p1 = Promise._resolve(12)
console.log(p1);  // Promise { 12 }
const p2 = Promise._resolve(new Promise((res, rej) => { res(12) }))
console.log(p2);  // Promise { 12 }  状态：成功
const p3 = Promise._resolve(new Promise((res, rej) => { rej(12) }))
console.log(p3);  // Promise { <rejected> 12 }  状态：失败
// thenable
var thenable = { then: function(resolve) {
  resolve("Resolving");
}};
const p4 = Promise._resolve(thenable)
p4.then(val => {
  console.log(val);  // Resolving
}, err => {
  // 不会被调用
})
```

## 2 实现Promise.reject
> Promise.reject 中传入的参数会作为一个 reason 原封不动地往下传：
```js
Promise._reject = (reason) => {
  return new Promise((resolve, reject) => {
    reject(reason)
  })
}

// 使用
Promise._reject(new Error('fail!'))
  .then(val => {
    // 不会被调用
  }, err => {
    console.log(err);  // Error: fail!
  })
```