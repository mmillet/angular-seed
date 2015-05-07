'use strict';
define(['config/config', 'directives/directives'],
  function(config, directives) {
    //控制左侧菜单的弹出和收起
    directives.directive("lrFrame", function() {
      return {
        restrict: 'EA',
        transclude: true,
        template: '<span ng-transclude></span>',
        scope: false,
        link: function (scope, element) {
          var ANIMATE_END = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
              bwQuery = ".fa-backward:first",
              fwQuery = ".fa-forward:first",
              $sidebar = element.find(".sidebar");
          $sidebar.on("mouseenter", function() {
            $(this).find(bwQuery).fadeIn("fast");
          }).on("mouseleave", function() {
            $(this).find(bwQuery).fadeOut("fast");
          }).on("click", bwQuery, function() {
            var $this = $(this);
            $this.removeClass("fa-backward").addClass("fa-forward");
            $sidebar.nextAll(".main").addClass("broad");
            if("transition" in document.body.style) {
              $sidebar.addClass('animated fadeOutLeft').one(ANIMATE_END, function() {
                $(this).addClass("mini").removeClass('animated fadeOutLeft').addClass('animated fadeInLeft').one(ANIMATE_END, function() {
                  $(this).removeClass('animated fadeInLeft');
                });
              });
            } else {
              $sidebar.addClass("mini");
            }
          }).on("click", fwQuery, function() {
            var $this = $(this);
            $this.removeClass("fa-forward").addClass("fa-backward");
            $sidebar.nextAll(".main").removeClass("broad");
            $sidebar.removeClass("mini");
            if("transition" in document.body.style) {
              $sidebar.addClass('animated fadeInLeft').one(ANIMATE_END, function () {
                $this.removeClass('animated fadeInLeft');
              });
            }
          });
        }
      }
    });
  }
);