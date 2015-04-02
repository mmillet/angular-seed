# 基于angular的前端框架

基础结构是require + angular + bootstrap  
 
目的是让angular的前端项目可以快速启动~

##快速开始

1. npm install
2. grunt run-server[:port] //默认使用8080端口
3. grunt watch //监听src/partials变化动态生成templates.js

##前端开发

1. 增加路由（src/js/config/route.js）
2. 增加控制器（src/js/controllers/）、服务[可选]（src/js/services/）和对应的模板（src/partials）
3. myApp中添加你的控制器
4. 开始愉快的使用angular

##异步数据调试

1. 在bin/api.json中增加一条后端数据，可使用[mock语法](http://mockjs.com/mock)。
2. 访问http://ip[:port]/~api 可看到当前项目的接口列表

##目录结构

    src
     -css
     -img
     -js
      -config   全局配置
      -controllers   控制器
      -directives   指令
      -filters   过滤器
      -services   服务
     -vendor   框架、库和三方组件
     main.js   项目启动入口
     myApp.js   angular启动入口
     templates.js   动态生成的模板文件
    -partials   模板
    index.html   入口页面


## @todo

1. grunt打包，精简文件
2. bower来管理各种三方库和插件
3. 整理less，精简css
4. api管理，接口文档生成
5. TDD
