'use strict';
define(['config/config', 'services/services'],
  function(conf, services) {
    return services.factory('ajaxService', ['$http',
      function($http) {

        var services = {
          "user": {method: 'GET', url: '/user'}
        };

        //初始化各个服务接口
        $.each(services, function(funcName, request) {
          services[funcName] = function(data) {
            data = data || {};
            return $http({
              method: request.method,
              url: request.url,
              cache: false,
              //GET防止缓存
              params: request.method == 'GET' ? (data ? _.extend({'_':new Date().getTime()}, data): null): null,
              data:  request.method == 'POST' ? (data ? $.param(data): null) : null,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            });
          }
        });
        return services;


      }
    ]);
  }
);


