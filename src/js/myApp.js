define([
  //配置文件
  'config/config',
  'angular',

  //加载各个模块
  'controllers/controllers',
  'services/services',
  'filters/filters',
  'directives/directives',

  //angular三方模块
  'angular-sanitize',
  'angular-bindonce',
  'angular-ui-router',
  'angular-ui-bootstrap',
  'angular-file-upload',
  'angular-template-main',
  'angular-strap',
  'angular-strap-tpl',
  'angular-select',
  'angular-ui-tree',
  'angular-ui-utils',
  'angular-ui-date',
  'angular-smarty',
  'angular-smarty-config',
  'angular-chart',

  //加载各个控制器，服务，过滤器，指令
  'controllers/rootController',
  'controllers/homeController',
  'controllers/managerController',
  'controllers/systemController',

  //加载过滤器
  'filters/utilsFilter',

  //加载指令
  'directives/utilsDirective',
  'directives/lrFrameDirective',

], function (config, angular) {
  return angular.module('webapp', ['controllers', 'services', 'filters', 'directives',
    'ui.select', 'ui.tree', 'pasvaz.bindonce', 'ui.utils', 'ui.date',
    'angular-smarty', 'chart.js',
    'ngSanitize', 'ui.router', 'ui.bootstrap', 'adaptv.adaptStrap', 'angularFileUpload', 'templates-main'])
    .config(['$provide', function ($provide) {
      //装饰$log.debug
      $provide.decorator('$log', ['$delegate', function ($delegate) {
        var origDebug = $delegate.debug;
        $delegate.debug = function () {
          var args = [].slice.call(arguments);
          args[0] = [new Date().toString(), ': ', args[0]].join('');
          origDebug.apply(null, args);
        };
        return $delegate;
      }]);
    }])
    .config(function($stateProvider, $urlRouterProvider) {
      //解析路由
      $urlRouterProvider.otherwise(config.route.menus[0].state);
      $stateProvider
        .state('forbidden', {
          url: '/forbidden',
          templateUrl: 'partials/component/forbidden.html'
        });
      (function(routes) {
        var _func = arguments.callee;
        _.each(routes, function(route) {
          $stateProvider
            .state(route.state, {
              url: route.url,
              templateUrl: route.template,
              controller: route.controller
            });
          if(route.subStates && route.subStates.length>0) {
            _func(route.subStates);
          }
        });
      }(config.route.menus));
    })
    .run(function($state, $timeout) {
      //do sth once
    })
});