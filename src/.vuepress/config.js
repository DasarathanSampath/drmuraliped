const { description } = require('../../package')
const languagesList = require('./navigation/languageList')
const englishLang = require('./navigation/en')
const tamilLang = require('./navigation/ta')
const path = require("path")
const autometa_options = {
  site: {
    name   : 'drmuraliped',
    twitter: 'drmuraliped',
  },
  canonical_base: 'https://drmuraliped.org'
};

module.exports = {
  title: 'Dr MuraliKrishnan PED',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity:'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin:'anonymous'}],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js" }],    
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-MQCF2RBS5D",async: true}]
  ],
  locales: languagesList.list,
  themeConfig: {
    logo: '/favicon.svg',    
    lastUpdated: false,
    locales:{
      '/': englishLang.list,
      '/ta/': tamilLang.list
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['feed', {
      canonical_base: 'https://drmuraliped.org',
      posts_directories: ['/articles/']
    }],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://drmuraliped.org'}],
    ['@vuepress/google-analytics', {'ga': 'G-MQCF2RBS5D'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, '../assets')
      }
    }
  },
  chainWebpack (config) {
    config.plugin('injections').tap(([options]) => [
      Object.assign(options, {
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    ])
  }
}
