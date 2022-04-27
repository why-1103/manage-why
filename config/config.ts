import routes from './routes';

export default {
  base: '/docs/',
  publicPath: '/static/',
  hash: true,
  routes: routes,
  fastRefresh: {},
  // mfsu: {},
  // webpack5: {},
  // dynamicImport: {},
  antd: {
    // dark: true, // 开启暗色主题
  },
  mock: false,
  theme: {
    'primary-color': '#1DA57A',
  },
  history: {
    type: 'hash',
  },
};
