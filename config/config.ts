import routes from './routes'

export default {
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  routes: routes,
  fastRefresh: {},
  antd: {},
  mock: false,
  history: {
    type: 'hash',
  },
}