import routes from './routes'

export default {
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  routes: routes,
  antd: {},
  history: {
    type: 'hash',
  },
}