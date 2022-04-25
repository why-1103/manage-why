export default [
  {
    path: '/', component: '../layouts/BasicLayout',
    routes: [
      { path: '/', redirect: '/test' },
      { path: '/test', component: './index' },
      {
        path: '/charts', 
        routes: [
          { path: '/', redirect: '/bar' },
          { path: '/charts/bar', component: './charts/bar' },
          { path: '/charts/brokenline', component: './charts/brokenline' },
          { path: '/charts/doughnut', component: './charts/doughnut' },
        ]
      }
    ]
  },
];