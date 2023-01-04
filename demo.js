Promise.prototype._finally = function(callback) {
  return this.then(data => {
    return Promise.resolve(callback()).then(() => data)
  }, err => {
    return Promise.resolve(callback()).then(() => {
      throw err; // 把之前的失败的err，抛出去
    });
  })
}

// 使用
// 简单的情况
Promise.resolve(12)
  ._finally((data) => { // 这里传入的函数，无论如何都会执行
  console.log(data); // undefined
})
// 这里只要reject，都会走到下一个then的err中
Promise.reject(12)
  ._finally((data) => {
    console.log(data); // undefined
  })
  .then(data => {
    console.log(data);
  }, err => {
    console.log(err, 'err'); // 12 err
  })
// 一开始就成功之后，会等待finally里的promise执行完毕后，再把前面的data传递到下一个then中
Promise.resolve(12)
  ._finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ok');
      }, 3000)
    })
  })
  .then(data => {
    console.log(data, 'success'); // 12 success
  }, err => {
    console.log(err, 'err');
  })
// // 虽然一开始成功，但是只要finally函数中的promise失败了，就会把其失败的值传递到下一个then的err中
Promise.resolve(12)
  ._finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('rejected');
      }, 3000)
    })
  })
  .then(data => {
    console.log(data, 'success');
  }, err => {
    console.log(err, 'err'); // rejected err
  })
// // 虽然一开始失败，但是也要等finally中的promise执行完，才能把一开始的err传递到err的回调中
Promise.reject(12)
  ._finally((data) => {
    console.log(data); // undefined
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('resolve');
      }, 3000)
    })
  })
  .then(data => {
    console.log(data, 'success');
  }, err => {
    console.log(err, 'err'); // 12 err
  })