export default {
  title: 'ZEN AI',
  description: '您的GPT API服务专家',
  // 确保使用根路径
  base: '/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ],
  themeConfig: {
    nav: [],
    sidebar: [],
    // 修改 logo 路径，确保以绝对路径方式引用
    logo: './logo.png', // 或使用 'logo.png'
  },
  appearance: false,
  lastUpdated: false,
  outline: false
}
