export default {
  title: 'ZEN AI',
  description: '您的GPT API服务专家',
  base: '/', // 如果部署在根目录，使用 '/'
  // base: '/docs/', // 如果部署在子目录，使用 '/docs/'
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
  ],
  themeConfig: {
    nav: [], // 空数组而不是 false
    sidebar: [], // 空数组而不是 false
    logo: '/logo.png',
  },
  appearance: false,
  lastUpdated: false,
  outline: false
}
