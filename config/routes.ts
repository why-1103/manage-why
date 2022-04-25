export default [
  {
    path: '/',
    key: 'BasicLayout',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/',
        hidden: true,
        redirect: '/test'
      },
      {
        path: '/test',
        title: '测试页面',
        icon: 'PlayCircleOutlined',
        component: './index'
      },
      {
        path: '/charts', 
        icon: 'FundOutlined',
        title: '可视化插件',
        routes: [
          {
            path: '/',
            title: '可视化插件',
            hidden: true,
            icon: 'BarChartOutlined',
            redirect: '/bar'
          },
          {
            path: '/charts/bar',
            title: '柱状图',
            icon: 'BarChartOutlined',
            component: './charts/bar'
          },
          {
            path: '/charts/brokenline',
            title: '折线图',
            icon: 'LineChartOutlined',
            component: './charts/brokenline'
          },
          {
            path: '/charts/doughnut', 
            title: '饼图',
            icon: 'PieChartOutlined',
            component: './charts/doughnut'
          },
        ]
      }
    ]
  },
];