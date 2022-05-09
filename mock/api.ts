export default {
  // 支持值为 Object 和 Array
  'GET /api/users': {
    users: [
      {
        id: 1,
        username: 'why',
        password: '123456',
        avatar:
          'https://images.pexels.com/photos/6962024/pexels-photo-6962024.jpeg',
      },
      {
        id: 2,
        username: 'user02',
        password: '123456',
        avatar:
          'https://images.pexels.com/photos/6626882/pexels-photo-6626882.jpeg',
      },
      {
        id: 3,
        username: 'user03',
        password: '123456',
        avatar:
          'https://images.pexels.com/photos/6214874/pexels-photo-6214874.jpeg',
      },
      {
        id: 2,
        username: 'user02',
        password: '123456',
        avatar:
          'https://images.pexels.com/photos/5032023/pexels-photo-5032023.jpeg',
      },
    ],
  },

  // GET 可忽略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => {
    // 添加跨域请求头
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('ok');
  },
};
