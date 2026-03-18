/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: '私が高性能住宅を選ぶまで',
  author: 'takasaki',
  headerTitle: '高性能住宅への道',
  description:
    'マンションvs戸建て、新築vs中古、建売vs注文住宅、土地選び、住宅性能まで──家づくりの意思決定プロセスを論理的に整理するブログ',
  language: 'ja',
  theme: 'system',
  siteUrl: 'https://high-performance-home-journey.vercel.app',
  siteRepo: 'https://github.com/takasaki376/high-performance-home-journey',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: '',
  github: 'https://github.com/takasaki376',
  locale: 'ja-JP',
  stickyNav: false,
  analytics: {},
  newsletter: {},
  comments: {},
  search: {
    provider: 'kbar',
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
