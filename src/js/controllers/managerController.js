//首页控制器
'use strict';
define(['config/config', 'controllers/controllers'],
  function(config, controllers) {
    controllers.controller('managerController', ['$log', '$scope', '$rootScope', '$timeout', '$modal',
      function($log, $scope, $rootScope, $timeout, $modal) {
        $log.info("managerController");
      }
    ]);
  }
);