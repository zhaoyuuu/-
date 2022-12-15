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
      ['/handwritten/debounce','1 实现一个防抖函数'],
      ['/handwritten/throttle' , '2 实现一个节流函数' ]
    ]
  }
}