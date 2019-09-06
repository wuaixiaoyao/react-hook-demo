/**
 * @author wuaixiaoyao
 * @date 2019/9/3
 * @Description: 静态服务
 */

const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const compression = require('compression');
const app = express();
const port = process.env.PORT || 3111;
//修改port PORT=3999 && node server.js

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/api',
  proxy({
    changeOrigin: true,
    ws: true,
    pathRewrite: {'^/api' : ''},
    target: 'http://localhost:3888'
  })
);


app.listen(port);