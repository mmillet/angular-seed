//首页控制器
'use strict';
define(['config/config', 'controllers/controllers', 'services/homeService', 'services/ajaxService'],
  function(config, controllers) {
    controllers.controller('homeController', ['$log', '$scope', '$rootScope', '$timeout', '$modal', 'homeService', 'ajaxService',
      function($log, $scope, $rootScope, $timeout, $modal, homeService, ajaxService) {
        $log.info("homeController");

        //记住models都要有.
        $scope.data = {};
        $scope.tmp = {};

        //基本提示框
        $scope.showTips = function(type) {
          $rootScope.showTips({
            type: type,
            msg: "Hi Baymax"
          }).done(function(data) {
            $log.info("点击确定了", data);
          }).fail(function() {
            $log.info("被取消了");
          });
        };

        //消息提示
        $scope.showMes = function(msg) {
          $rootScope.showMes(msg);
        };

        //loading
        $scope.loading = function(msg) {
          $rootScope.loading();
          $timeout(function() {
            $rootScope.loading(false);
          }, 1000)
        };

        //对话框
        $scope.showModal = function(size, hardToClose) {
          $modal.open({
            templateUrl: 'partials/home/modal.html',
            size: size,
            backdrop: !hardToClose,
            keyboard: !hardToClose,
            windowClass: hardToClose?"modal-bg":"",
            controller: function($scope, $modalInstance) {
              $scope.data = {'Hello': 'Baymax'};
              $scope.ok = function() {
                $log.info("点击确定了");
                $modalInstance.close();
              };
              $scope.cancel = function() {
                $modalInstance.close();
              };
            }
          });
        };

        //时间对话框
        $scope.openDate = function($event){
          $event.preventDefault();
          $event.stopPropagation();
          $scope.tmp.dateIsOpen = true;
        };
        $scope.data.myDatetime = new Date();

        //表格
        $scope.data.table = {
          total: 100,
          pageSize: config.page.size,
          pageIndex: 1
        };
        $scope.pageChanged = function() {
          ajaxService.user(_.pick($scope.data.table, 'pageSize', 'pageIndex')).success(function(data) {
            $scope.data.table.items = data.users;
          });
        };
        $scope.pageChanged();


        //下拉选择
        $scope.data.colors = ['黄', '白', '绿'];

        //图表
        $scope.data.pieData = [300, 500, 100];
        $scope.data.pieLabels = ["下载量", "储存量", "邮件订单"];

        $scope.data.chart1 =[
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ];
        $scope.data.series = ['Series A', 'Series B'];
        $scope.data.labels = ["January", "February", "March", "April", "May", "June", "July"];


        $scope.data.radarLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
        $scope.data.radarData = [
          [65, 59, 90, 81, 56, 55, 40],
          [28, 48, 40, 19, 96, 27, 100]
        ];
      }
    ]);
  }
);