//路由控制模块
'use strict';
define(function(){
  return {
    //左侧菜单和对应路由的配置
    menus: [
      {title: "首页", state: "home", url: '/home', template: 'partials/home/index.html', controller: 'homeController', css: "fa fa-home"},
      {title: "我的系统", state: "system", url: '/system', template: 'partials/system/index.html', controller: 'systemController', css: "fa fa-cloud"},
      {title: "管理", state: "manager", url: '/manager', template: 'partials/manager/index.html', controller: 'managerController', css: "fa fa-wrench", subStates: [
        {title: "用户管理", state: "user", url: '/user', template: 'partials/manager/user.html', controller: 'managerController', css: "fa fa-user"},
        {title: "权限管理", state: "priv", url: '/priv', template: 'partials/manager/priv.html', controller: 'managerController', css: "fa fa-key"},
        {title: "任务管理", state: "task", url: '/task', template: 'partials/manager/task.html', controller: 'managerController', css: "fa fa-flag"}
      ]},
      //控制器可为空
      {title: "数据统计", state: "stat", url: '/stat', template: 'partials/stat/index.html', controller: '', css: "fa fa-bar-chart"}
    ]
}
});