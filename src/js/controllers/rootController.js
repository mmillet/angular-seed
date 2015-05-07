//父级控制器
'use strict';
define(["config/config", 'controllers/controllers'],
  function(conf, controllers) {
    controllers.controller('rootController',['$log', '$scope', '$rootScope', '$state', '$timeout', '$modal', '$interval',
      function($log, $scope, $rootScope, $state, $timeout, $modal, $interval) {
        $log.info('rootController init');

        //判断是否是当前菜单
        $scope.isCurrentMenu = function(state) {
          return $state.includes(state);
        }

        $rootScope.menus = conf.route.menus;

        //路由初始化
        var initRoute = function() {
          $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams) {
              $rootScope.loading(true);
            });
          $rootScope.$state = $state;
          var changeRoute = function(name) {
            var stateArr = name.split('.');
            _.each($rootScope.menus, function(route) {
              if(route.subStates && route.subStates.length>0 && (route.state == name || route.state == stateArr[0])) {
                $rootScope.subMenu = route.subStates;
                return false;
              }
            });
            $rootScope.loading(false);
          };
          $rootScope.$on('$stateChangeSuccess',
            function(event, toState, toParams, fromState, fromParams) {
              changeRoute(toState.name);
            });
          changeRoute($state.current.name);
        };


        //Loading控制
        $rootScope.isLoading = false;
        var timeout = null;
        /**
         * 显示加载中
         * @param status 显示/关闭
         * @param long 超时控制，默认30秒，long为60秒
         */
        $rootScope.loading = function(status, long) {
          status = status !== undefined ? status : true;
          //防止抖动
          $timeout.cancel(timeout);
          timeout = $timeout(function() {
            $rootScope.isLoading = status;
          }, status?0:200);
          //一段时间后加载框自动消失，并提示出错
          if(status) {
            timeout = $timeout(function() {
              $rootScope.isLoading = false;
              $rootScope.showTips("error");
            }, (long ? 1000*60 : 1000*30) );
          }
        };

        //消息提示控制
        var _hideMesTimeout = null;
        $rootScope.showMes = function(message) {
          var $message = $(".page-message");
          if(!$message.length) {
            $message = $('<p class="page-message animated fadeIn" style="display: none;">'+message+'</p>');
            $(document.body).append($message);
          } else {
            $message.html(message);
          }
          $timeout.cancel(_hideMesTimeout);
          $message.hide();
          $message.css("margin-left", -1 * $message.width() );
          $message.fadeIn("fast");
          _hideMesTimeout = $timeout(function() {
            $message.fadeOut();
          }, 1000);
        }

        //基本提示框控制
        var $modalInstanceErr = null;
        $rootScope.showTips = function(obj) {
          var type = obj.type || 'info';
          var deferred = $.Deferred();
          var modalInstance = $modal.open({
            templateUrl: 'partials/component/tips.html',
            size: type=="prompt"?"":"sm",
            controller: ['$scope', '$modalInstance', function($scope, $modalInstance) {
              $scope.data = {type:type};
              if(type=='error') {
                //错误窗口只报一个
                if($modalInstanceErr) {
                  try{$modalInstanceErr.close()}catch(e){;}
                }
                $modalInstanceErr = $modalInstance;
                $scope.data.title = obj.title || '出错啦';
                $scope.data.msg = obj.msg || '请稍后再试或联系管理员小伙伴';
                $scope.data.btnOkTitle = "我知道了";
              } else if(type=='info') {
                $scope.data.title = obj.title || '提示信息';
                $scope.data.btnOkTitle = "我知道了";
                $scope.data.msg = obj.msg;
              } else if(type=='confirm') {
                $scope.data.title = obj.title || '确认提示';
                $scope.data.msg = obj.msg || '该操作将不可恢复，是否继续？';
                $scope.data.btnOkTitle = obj.btnCancelTitle || "确定";
                $scope.data.btnCancelTitle = obj.btnCancelTitle || "取消";
                $scope.data.cancelBtn = true;
              } else if(type=='prompt') {
                $scope.data.title = obj.title || '请填写';
                $scope.data.msg = obj.msg;
                $scope.data.cancelBtn = true;
                $scope.data.promptInput = obj.promptInput || "";
              }
              modalInstance.result.then(function (result) {
              }, function (reason) {
                if(reason == 'backdrop click' || reason == "escape key press") {
                  deferred.reject();
                }
              });
              $scope.ok = function () {
                deferred.resolve($scope.data.promptInput);
                $modalInstance.close();
              };
              $scope.cancel = function () {
                deferred.reject();
                $modalInstance.dismiss('cancel');
              };
            }]
          });
          return deferred;
        };
      }
    ]);
  }
);