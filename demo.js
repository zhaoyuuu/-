Promise._race = function(iterable) {
  return new Promise((resolve, reject) => {
    const len = iterable.length
    for(let i = 0; i < len; i++) {
      Promise.resolve(iterable[i])
        .then(val => {
          resolve(val)
        }, err => {
          reject(err)
        })
    }
  })  
}

// 使用
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two');
});

Promise._race([promise1, promise2]).then(val => {
  console.log(val);  // 未被调用
}, err => {
  console.log(err);  // two
  // Both resolve, but promise2 is faster
});