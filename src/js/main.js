/**
 * Created by cdchenzhengguo on 2014/10/30.
 */
'use strict';
requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery': 'vendor/jquery/jquery-1.11.1.min',
    'bootstrap': 'vendor/bootstrap/js/bootstrap.min',
    'underscore': 'vendor/underscore/underscore-min',
    'angular': 'vendor/angular/angular.min',
    'angular-sanitize': 'vendor/angular-sanitize/angular-sanitize.min',
    'angular-bindonce': 'vendor/angular-bindonce/bindonce.min',
    'angular-ui-router': 'vendor/angular-ui-router/angular-ui-router.min',
    'angular-file-upload': 'vendor/angular-file-upload/angular-file-upload.min',
    'angular-ui-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls-0.11.0.min',
    'angular-strap': 'vendor/angular-strap/adapt-strap.min',
    'angular-strap-tpl': 'vendor/angular-strap/adapt-strap.tpl.min',
    'angular-select': 'vendor/angular-select/select.min',
    'angular-ui-tree': 'vendor/angular-ui-tree/angular-ui-tree.min',
    'angular-ui-utils': 'vendor/angular-ui-utils/ui-utils.min',
    'angular-ui-date': 'vendor/angular-ui-date/date',
    'chart-js': 'vendor/chart.js/Chart.min',
    'angular-chart': 'vendor/angular-chart/angular-chart',
    'angular-smarty': 'vendor/angular-smarty/smarty',
    'angular-smarty-config': 'vendor/angular-smarty/smarty-config',
    'angular-template-main': 'templates'
  },
  shim: {
    'angular': {deps: ['jquery'], exports:'angular'},
    'jquery': {exports:'$'},
    'angular-sanitize': {deps: ['angular']},
    'angular-bindonce': {deps: ['angular']},
    'angular-ui-router': {deps: ['angular']},
    'angular-ui-utils': {deps: ['angular']},
    'angular-ui-date': {deps: ['angular']},
    'angular-ui-bootstrap': {deps: ['angular']},
    'angular-file-upload': {deps: ['angular']},
    'angular-template-main': {deps: ['angular']},
    'angular-strap': {deps: ['angular']},
    'angular-strap-tpl': {deps: ['angular']},
    'angular-select': {deps: ['angular']},
    'angular-ui-tree': {deps: ['angular']},
    'angular-chart': {deps: ['angular', 'chart-js']},
    'angular-smarty': {deps: ['angular']},
    'angular-smarty-config': {deps: ['angular']},
    'bootstrap': {deps: ['jquery']},
    'underscore': {exports:'_'}
  },
  priority: ["angular"],
  deps:['myApp'],
  //防止require缓存，上线时请替换为对应版本号
  urlArgs: Date.now()
});

require([
  'jquery',
  'angular',
  'myApp',
  'bootstrap',
  'underscore',
  'chart-js'
], function($, angular, app) {
  //启动angular
  $(function(){
    angular.bootstrap(document, [app.name]);
  });
});