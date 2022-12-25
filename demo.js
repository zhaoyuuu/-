function _setTimeout(fn, wait) {
  const timer = setInterval(() => {
    fn()
    clearInterval(timer)
  }, wait);
}

function func() {
  console.log('触发');
}
_setTimeout(func, 1000)