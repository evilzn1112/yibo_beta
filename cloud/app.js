// 在 Cloud code 里初始化 Express 框架
var express = require('express');
var app = express();
var expressLayouts = require('express-ejs-layouts'); 
var util = require('util');	//node.js核心模块，提供常用函数的集合，用于弥补核心js的功能过于精简不足
var moment = require('moment');	//一个轻量级并健壮的js日期处理类库
var _ = require('underscore'); 
var avosExpressHttpsRedirect = require('avos-express-https-redirect');	//为云代码托管网站启用HTTPS
var avosExpressCookieSession=require('avos-express-cookie-session');	//在云代码中处理用户登录	
var config = require('cloud/config.js');	

// App 全局配置
app.set('views','cloud/views');   // 设置模板目录
app.set('view engine', 'ejs');    // 设置 template 引擎
app.use(express.bodyParser());    // 读取请求 body 的中间件
// app.use(avosExpressHttpsRedirect());
// app.use(expressLayouts);
// app.use(avosExpressCookieSession({ cookie: { maxAge: 3600000 }}));	

// 使用 Express 路由 API 服务 /hello 的 HTTP GET 请求
app.get('/', function(req, res) {


  res.render('reqOrder', { title: '请求服务页面' });
});

app.get('/orderInfo', function(req, res) {
  res.render('orderInfo', { title: '订单信息页面'});
});

app.get('/orderParked', function(req, res) {
  res.render('orderParked', { title: '停完车页面'});
});

app.get('/orderDone', function(req, res) {
  res.render('orderDone', { title: '订单完成页面'});
});






// 最后，必须有这行代码来使 express 响应 HTTP 请求
app.listen();