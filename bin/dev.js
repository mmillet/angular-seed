/**
 * Created by chenzhengguo on 2015/4/1.
 */
var express = require('express');
var mock = require("mockjs"); //mockjs语法见：http://mockjs.com/

var app = express();

//静态目录
app.use(express.static(__dirname + '/../'));

//首页
app.all('/', function(req, res){
  res.sendFile(__dirname + '/asset/index.html');
});

//查看API
app.all('/~api/all', function(req, res) {
  res.contentType("application/json;charset=UTF-8");
  res.send(JSON.stringify(apis));
});
app.all('/~api', function(req, res) {
  res.sendFile(__dirname + '/asset/api.html');
});

//模拟API
var apis = require('./api.json'); //读取API
for(var group in apis) {
  apis[group].forEach(function(reqData) {
    app.all(reqData.url, function(req, res) {
      var data = "";
      //支持callback
      var params = req.params;
      //如果传入了params，尝试替换
      var resStr = JSON.stringify(reqData.res);
      try {
        for(var key in params) {
          var reg = new RegExp('@'+key, "g");
          resStr = resStr.replace(reg, params[key]);
        }
      } catch (e) {
        console.warn(e);
      }

      if(reqData.mock == true) {
        data = JSON.stringify(mock.mock(JSON.parse(resStr)));
      } else {
        data = resStr;
      }
      var callback = req.param('callback');
      if(callback) {
        res.contentType('application/javascript; charset=UTF-8');
        var callback = encodeURIComponent(callback);
        res.send(callback + "&&" + callback + '(' + data + ')');
      } else {
        res.contentType('application/json; charset=UTF-8');
        res.send(data);
      }
    });
  });
}

//启动服务
var args = process.argv.splice(2);
var port = 8080;
console.log(args);
if(args.length > 1 && args[0]=='-p') {
  port = args[1]*1;
}
var server = app.listen(port, function() {
  console.info('***** Server is runing at 0.0.0.0:%d *****', server.address().port);
});