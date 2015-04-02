//我的系统
'use strict';
define(['config/config', 'controllers/controllers'],
  function(config, controllers) {
    controllers.controller('systemController', ['$log', '$scope', '$rootScope', '$timeout', '$modal',
      function($log, $scope, $rootScope, $timeout, $modal) {
        $log.info("systemController");
      }
    ]);
  }
);