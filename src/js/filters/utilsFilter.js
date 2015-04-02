//这里存放一些公用的过滤器
'use strict';
define(['filters/filters'], function(filters) {
    filters.filter('range', function() {
      return function(input) {
        var lowBound, highBound;
        switch (input.length) {
          case 1:
            lowBound = 0;
            highBound = parseInt(input[0]) - 1;
            break;
          case 2:
            lowBound = parseInt(input[0]);
            highBound = parseInt(input[1]);
            break;
          default:
            return input;
        }
        var result = [];
        for (var i = lowBound; i <= highBound; i++)
          result.push(i);
        return result;
      };
    });


    filters.filter('cutText', function() {
      return function(input, params) {
        input = input.replace(/\n/g, "<br/>");
        var strArr = input.split("<br/>");
        if(strArr.length > 4) {
          input = strArr.splice(0, 4).join("<br/>") + '<br/><a href="javascript:;" ng-click="void(0)"><small>全部显示</small></a>' ;
        }
        return input;
      }
    });


    //多选搜索过滤器
    filters.filter('propsFilter', function() {
      return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
          items.forEach(function(item) {
            var itemMatches = false;

            var keys = Object.keys(props);
            for (var i = 0; i < keys.length; i++) {
              var prop = keys[i];
              var text = props[prop].toLowerCase();
              if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                itemMatches = true;
                break;
              }
            }

            if (itemMatches) {
              out.push(item);
            }
          });
        } else {
          // Let the output be the input untouched
          out = items;
        }
        return out;
      };
    });

    //格式化百分比
    filters.filter('percent', function() {
      return function(input, props) {
        return input*100 + "%";
      };
    });

  }
);
