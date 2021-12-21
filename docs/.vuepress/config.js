module.exports = {
  base: '/vue-keyboard-cn-doc/',
  title: 'vue-key-board-cn',
  description: '手机端输入法模拟插件，中文输入法，英文输入法，数字输入法',
  themeConfig: {
    displayAllHeaders: true, // 默认值：false
    nav: [
      { text: '入手', link: '/guide/' },
      {
        text: '组件',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'kyInput', link: '/kyInput/' },
          { text: 'kyKeyBoard', link: '/kyKeyBoard/' },
          { text: 'kyPasswordInput', link: '/kyPasswordInput/' }
        ]
      },
      { text: '根事件', link: '/rootEvents/' },

    ],
    sidebarDepth: 100,
    sidebar: 'auto'
  }
}