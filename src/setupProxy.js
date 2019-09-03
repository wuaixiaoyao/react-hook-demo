/**
 * @author wuaixiaoyao
 * @date 2019/8/30
 * @Description:
*/
const proxy = require('http-proxy-middleware');
const env = process.env.NODE_ENV||'development';
const apiMap = {
  development:{//开发环境
    api:'http://localhost:3888'
  },
  test:{//测试环境
    api:'http://10.250.200.200:3888'
  }
}
const apiEnv = apiMap[env];
let {api} = apiEnv;
module.exports = function(app){
  app.use('/api', proxy({
    target: api, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: false, // proxySetup websockets
    pathRewrite: {
      '^/api': '', // rewrite path
    }
  }));
};