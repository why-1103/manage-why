export default [
  {
    path: '/user',
    key: 'User',
    component: '../layouts/UserLayout',
    routes: [
      {
        path: '/user',
        hidden: true,
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        key: 'Login',
        component: './User/Login',
      },
    ],
  },
  {
    path: '/',
    key: 'BasicLayout',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        hidden: true,
        redirect: '/test',
      },
      {
        path: '/test',
        name: '测试页面',
        icon: 'PlayCircleOutlined',
        component: './index',
      },
      {
        path: '/charts',
        icon: 'FundOutlined',
        name: '可视化插件',
        routes: [
          {
            path: '/',
            name: '可视化插件',
            hidden: true,
            icon: 'BarChartOutlined',
            redirect: '/bar',
          },
          {
            path: '/charts/bar',
            name: '柱状图',
            icon: 'BarChartOutlined',
            component: './charts/bar',
          },
          {
            path: '/charts/brokenline',
            name: '折线图',
            icon: 'LineChartOutlined',
            component: './charts/brokenline',
          },
          {
            path: '/charts/doughnut',
            name: '饼图',
            icon: 'PieChartOutlined',
            component: './charts/doughnut',
          },
        ],
      },
    ],
  },
];
