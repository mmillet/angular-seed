'use strict';
define(['config/config', 'directives/directives'],
  function(config, directives) {
    //控制左侧菜单的弹出和收起
    directives.directive("lrFrame", ['$rootScope', '$timeout', function ($rootScope,$timeout) {
      return {
        restrict: 'EA',
        transclude: true,
        template: '<span ng-transclude></span>',
        scope: false,
        link: function (scope, element, attrs) {
          var ANIMATE_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              bwQuery = ".glyphicon-backward:first",
              fwQuery = ".glyphicon-forward:first",
              $sidebar = element.find(".sidebar");
          $sidebar.on("mouseenter", function() {
            $(this).find(bwQuery).fadeIn("fast");
          }).on("mouseleave", function() {
            $(this).find(bwQuery).fadeOut("fast");
          }).on("click", bwQuery, function() {
            $(this).removeClass("glyphicon-backward").addClass("glyphicon-forward");
            $sidebar.nextAll(".main").addClass("broad");
            $sidebar.addClass('animated fadeOutLeft').one(ANIMATE_END, function() {
              $(this).addClass("mini").removeClass('animated fadeOutLeft').addClass('animated fadeInLeft').one(ANIMATE_END, function() {
                $(this).removeClass('animated fadeInLeft');
              });
            });
          }).on("click", fwQuery, function() {
            $(this).removeClass("glyphicon-forward").addClass("glyphicon-backward");
            $sidebar.nextAll(".main").removeClass("broad");
            $sidebar.removeClass("mini").addClass('animated fadeInLeft').one(ANIMATE_END, function() {
              $(this).removeClass('animated fadeInLeft');
            });
          });

        }
      }
    }]);
  }
);