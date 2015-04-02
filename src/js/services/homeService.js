'use strict';
define(['config/config', 'services/services'],
  function(conf, services) {
    return services.factory('homeService', ['$http',
      function($http) {
        var service = {};



        return service;
      }
    ]);
  }
);
