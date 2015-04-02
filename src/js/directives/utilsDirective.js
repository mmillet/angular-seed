//存放一些公用的模块
'use strict';
define(['config/config', 'directives/directives'],
  function(config, directives) {
    //可编辑的静态内容
    directives.directive("staticinput", ['$rootScope', function ($rootScope) {
      return {
        restrict: 'EA',
        replace: true,
        template: '<input ng-model="bindModel" class="form-control input-md static-input" ' +
          'ng-disabled="{{bindDisabled}}"' +
          'ng-class="{\'static-input-blur\':!focus, \'static-input-changed\':isChanged}" ' +
          'ng-blur="focus=false;" ng-focus="focus=true;" placeholder="{{placehoder}}" title="点击编辑" ' +
          'ng-change="changed()"/>',
        scope : {
          bindModel : '=bindModel',
          placehoder: '@placehoder',
          bindDisabled: '='
        },
        link: function(scope, ele) {
          ele.bind('focus', function() {
            $(this).select();
          })
          var origData = scope.bindModel;
          scope.changed = function() {
            $rootScope.staticinputIsChanged = scope.isChanged = ((origData||"") != scope.bindModel);
          };
        }
      }
    }]);

    //左侧菜单的指令
    directives.directive('leftMenu', ['$timeout', function($timeout) {
      return {
        link: function(scope, element, attrs) {
          element.on("click", "li.menu-toggle > a", function() {
            var $ul = $(this).siblings("ul");
            if($ul.hasClass("submenu-close")) {
              element.find("li.menu-toggle > ul").addClass("submenu-close");
              $ul.removeClass("submenu-close");
            } else {
              $ul.addClass("submenu-close");
            }
          });
          $timeout(function() {
            var $cur = element.find(".submenu li.active");
            $cur.parent().removeClass("submenu-close");
          }, 100);
        }
      };
    }]);

    //一个小飞机
    directives.directive('flyMe', function() {
      return {
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            $(this).addClass('animated flyRight').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
              $(this).removeClass('animated flyRight');
            });
          });
        }
      };
    });

  }
);
