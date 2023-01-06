module.exports = {
  title: '手撕前端',
  description: '那些年，我们写过的手写题',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://github.com/zhaoyuuu' },
    ],
    sidebar: [
      ['/handwritten/debounce','1 实现防抖函数（debounce）'],
      ['/handwritten/throttle' , '2 实现节流函数（throttle）'],
      ['/handwritten/instanceof' , '3 实现instanceof'],
      ['/handwritten/new' , '4 实现new的过程'],
      ['/handwritten/call' , '5 实现call方法'],
      ['/handwritten/apply' , '6 实现apply方法'],
      ['/handwritten/bind' , '7 实现bind方法'],
      ['/handwritten/deepClone' , '8 实现深拷贝'],
      ['/handwritten/setInterval(setTimeout)' , '9 实现setInterval和setTimeout'],
      ['/handwritten/array_collection' , '10 数组合集'],
      ['/handwritten/promise_collection' , '11 Promise合集'],
      ['/handwritten/ajax' , '12 实现AJAX'],
      ['/handwritten/sort' , '13 手写常见排序'],
      ['/handwritten/Object' , '14 Object合集'],
    ]
  }
}