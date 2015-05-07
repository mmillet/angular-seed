angular.module('templates-main', ['partials/component/forbidden.html', 'partials/component/pageNormal.html', 'partials/component/subMenu.html', 'partials/component/tips.html', 'partials/home/index.html', 'partials/home/modal.html', 'partials/manager/index.html', 'partials/manager/priv.html', 'partials/manager/task.html', 'partials/manager/user.html', 'partials/stat/index.html', 'partials/system/index.html']);

angular.module("partials/component/forbidden.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/component/forbidden.html",
    "<p class=\"text-danger\">亲爱的，您还没有访问权限噢！</p>");
}]);

angular.module("partials/component/pageNormal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/component/pageNormal.html",
    "<div class=\"pull-right\">\n" +
    "  <div class=\"text-right text-muted\">\n" +
    "    <small>共{{$parent.totalItems}}条记录，每页{{$parent.query.pageSize}}条</small>\n" +
    "    <button type=\"button\" class=\"btn btn-link btn-xs\" ng-click=\"$parent.pageChanged()\" title=\"刷新列表\"><i class=\"glyphicon glyphicon-repeat text-primary\"></i></button>\n" +
    "  </div>\n" +
    "  <pagination rotate=\"false\"  max-size=\"15\" boundary-links=\"true\" ng-change=\"$parent.pageChanged()\" total-items=\"$parent.totalItems\" items-per-page=\"$parent.query.pageSize\" ng-model=\"$parent.query.pageIndex\" class=\"pagination-sm\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "</div>");
}]);

angular.module("partials/component/subMenu.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/component/subMenu.html",
    "<ul class=\"row nav nav-tabs\" role=\"tablist\">\n" +
    "  <li ng-if=\"hasPriv(item.title)\" role=\"presentation\" ng-repeat=\"item in subMenu\" ng-class=\"{active: $state.includes(item.state)}\">\n" +
    "    <a ui-sref=\"{{item.state}}\">{{item.title}}</a>\n" +
    "    <span ng-if=\"taskTips[item.state]\" class=\"badge badge-tips badge-tips-assign animated bounceIn\">{{taskTips[item.state]}}</span>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "<div class=\"main-content\" ui-view></div>");
}]);

angular.module("partials/component/tips.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/component/tips.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "  <h3 class=\"modal-title\">{{data.title || '提示'}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <p ng-if=\"data.type!='prompt'\" ng-bind-html=\"data.msg || '提示信息'\"></p>\n" +
    "  <form name=\"prompt\" ng-show=\"data.type=='prompt'\">\n" +
    "    <input autofocus type=\"text\" class=\"form-control\" ng-keyup=\"prompt.$valid && $event.keyCode==13 && ok()\" ng-model=\"data.promptInput\" placeholder=\"{{msg || '请填写'}}\" required/>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-primary\" ng-disabled=\"data.type=='prompt' && prompt.$invalid\" ng-click=\"ok()\">{{data.btnOkTitle||'确定'}}</button>\n" +
    "  <button class=\"btn btn-default\" ng-if=\"data.cancelBtn\" ng-click=\"cancel()\">{{data.btnCancelTitle||'取消'}}</button>\n" +
    "</div>");
}]);

angular.module("partials/home/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/home/index.html",
    "<h1 class=\"page-title\">首页</h1>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-lg-12\">\n" +
    "    <p>下面是一些基本组件的用法，这里获取更多你想要的：<a href=\"http://angular-ui.github.io/\" target=\"_blank\">http://angular-ui.github.io/</a></p>\n" +
    "    <table class=\"table\">\n" +
    "      <thead>\n" +
    "      <tr>\n" +
    "        <th>组件</th>\n" +
    "        <th>示例</th>\n" +
    "        <th>参考</th>\n" +
    "      </tr>\n" +
    "      </thead>\n" +
    "      <tbody>\n" +
    "      <tr>\n" +
    "        <td>基本提示框：</td>\n" +
    "        <td>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showTips('info')\">Info</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showTips('error')\">Error</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showTips('confirm')\">Confirm</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showTips('prompt')\">Prompt</button>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          -\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>使用图标：</td>\n" +
    "        <td>\n" +
    "          <i class=\"fa fa-rocket\" fly-me></i>\n" +
    "          <i class=\"fa fa-fighter-jet\" fly-me></i>\n" +
    "          <i class=\"fa fa-space-shuttle\" fly-me></i>\n" +
    "          <i class=\"fa fa-spinner fa-spin\"></i>\n" +
    "          <i class=\"fa fa-circle-o-notch fa-spin\"></i>\n" +
    "          <i class=\"fa fa-refresh fa-spin\"></i>\n" +
    "          <i class=\"fa fa-cog fa-spin\"></i>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://v3.bootcss.com/components/#glyphicons\" target=\"_blank\">http://v3.bootcss.com/components/#glyphicons</a>\n" +
    "          <br/>\n" +
    "          <a href=\"http://fontawesome.io/icons/\" target=\"_blank\">http://fontawesome.io/icons/</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>消息提示框：</td>\n" +
    "        <td><button class=\"btn btn-default\" ng-click=\"showMes('Hi, I am Baymax!')\">Say Hi</button></td>\n" +
    "        <td>\n" +
    "          -\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>加载中：</td>\n" +
    "        <td><button class=\"btn btn-default\" ng-click=\"loading()\">loading</button></td>\n" +
    "        <td>\n" +
    "          -\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>对话框：</td>\n" +
    "        <td>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showModal('hg')\">超大</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showModal('lg')\">大</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showModal('')\">一般（默认）</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showModal('sm')\">小</button>\n" +
    "          <button class=\"btn btn-default\" ng-click=\"showModal('md', true)\">点击遮罩或按ESC不关闭</button>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/modal\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/modal</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>泡泡提示信息：</td>\n" +
    "        <td>\n" +
    "          <button popover=\"乖，你真听话!\" popover-trigger=\"mouseenter\" class=\"btn btn-default ng-scope\">鼠标移到我</button>\n" +
    "          <button popover=\"乖，我知道你很听话了!\" popover-trigger=\"click\" popover-placement=\"right\" class=\"btn btn-default ng-scope\">鼠标点我</button>\n" +
    "          <a href=\"#\" tooltip-placement=\"top\" tooltip=\"我是一个工具提示噢!\"> 我是一个工具提示噢</a>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/popover\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/popover</a>\n" +
    "          <br/>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/tooltip\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/tooltip</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>按钮组：</td>\n" +
    "        <td>\n" +
    "          <div class=\"btn-group\">\n" +
    "            <label class=\"btn\" ng-class=\"{'btn-success':tmp.radioModel,'btn-default':!tmp.radioModel}\" ng-model=\"tmp.radioModel\" btn-radio=\"true\">启用</label>\n" +
    "            <label class=\"btn\" ng-class=\"{'btn-danger':!tmp.radioModel,'btn-default':tmp.radioModel}\" ng-model=\"tmp.radioModel\" btn-radio=\"false\">禁用</label>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"btn-group btn-group-dropdown\" dropdown>\n" +
    "            <button type=\"button\" class=\"btn btn-xs btn-default\">\n" +
    "                <span class=\"fa fa-files-o text-warning\"></span>\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-xs btn-default\" title=\"添加\">\n" +
    "              <span class=\"fa text-primary fa-plus\"></span>\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-xs btn-default\" title=\"重命名\">\n" +
    "              <span class=\"fa text-primary fa-edit\"></span>\n" +
    "            </button>\n" +
    "            <button type=\"button\" class=\"btn btn-xs btn-default dropdown-toggle\">\n" +
    "              <span class=\"caret\"></span>\n" +
    "            </button>\n" +
    "            <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "              <li><a class=\"btn btn-link btn-xs\"><span class=\"fa fa-remove text-danger\"></span> 删除</a></li>\n" +
    "              <li class=\"divider\"></li>\n" +
    "              <li><a class=\"btn btn-link btn-xs\"><span class=\"fa text-primary fa-arrow-up\"></span> 上移</a></li>\n" +
    "              <li><a class=\"btn btn-link btn-xs\"><span class=\"fa text-primary fa-arrow-down\"></span> 下移</a></li>\n" +
    "            </ul>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/buttons\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/buttons</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "\n" +
    "      <tr>\n" +
    "        <td>日期：</td>\n" +
    "        <td>\n" +
    "          <div class=\"input-group\" style=\"width: 200px;\">\n" +
    "            <input type=\"text\" class=\"form-control\" datepicker-popup=\"yyyy-MM-dd\" ng-model=\"data.myDatetime\" is-open=\"tmp.dateIsOpen\"\n" +
    "               datepicker-options=\"dateOptionsBootstrap\"\n" +
    "               show-button-bar=\"false\"/>\n" +
    "            <span class=\"input-group-btn\">\n" +
    "              <button type=\"button\" class=\"btn btn-default\" ng-click=\"openDate($event)\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\n" +
    "            </span>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/datepicker\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/datepicker</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "\n" +
    "      <tr>\n" +
    "        <td>下拉列表：</td>\n" +
    "        <td>\n" +
    "          <ui-select multiple ng-model=\"data.select1\" theme=\"bootstrap\" style=\"width: 200px; display: inline-block;\">\n" +
    "            <ui-select-match placeholder=\"多选列表，请选择...\">{{$item}}</ui-select-match>\n" +
    "            <ui-select-choices repeat=\"color in data.colors | filter:$select.search\">\n" +
    "              <div ng-bind-html=\"color | highlight: $select.search\"></div>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "\n" +
    "          <ui-select multiple tagging ng-model=\"data.select3\" theme=\"bootstrap\" style=\"width: 200px; display: inline-block;\">\n" +
    "            <ui-select-match placeholder=\"标签多选，请选择或填写...\">{{$item}}</ui-select-match>\n" +
    "            <ui-select-choices repeat=\"color in data.colors | filter:$select.search\">\n" +
    "              <div ng-bind-html=\"color | highlight: $select.search\"></div>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "\n" +
    "          <ui-select ng-model=\"data.select2\" theme=\"bootstrap\" style=\"width: 200px; display: inline-block;\">\n" +
    "            <ui-select-match allow-clear=\"true\" placeholder=\"单选列表，请选择...\">{{$select.selected}}</ui-select-match>\n" +
    "            <ui-select-choices group-by=\"groupFn\" repeat=\"color in data.colors | filter: $select.search\">\n" +
    "              <span ng-bind-html=\"color | highlight: $select.search\"></span>\n" +
    "            </ui-select-choices>\n" +
    "          </ui-select>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"https://github.com/angular-ui/ui-select/\" target=\"_blank\">https://github.com/angular-ui/ui-select/</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "\n" +
    "      <tr>\n" +
    "        <td>图表：</td>\n" +
    "        <td>\n" +
    "          <div class=\"row\">\n" +
    "            <!--<div class=\"col-md-4\">-->\n" +
    "              <!--<canvas class=\"chart chart-line\" data=\"data.chart1\" labels=\"data.labels\"-->\n" +
    "                      <!--legend=\"true\" series=\"data.series\" click=\"onClick\"></canvas>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--<div class=\"col-md-4\">-->\n" +
    "              <!--<canvas legend=\"true\" class=\"chart chart-pie\" data=\"data.pieData\" labels=\"data.pieLabels\"></canvas>-->\n" +
    "            <!--</div>-->\n" +
    "            <!--<div class=\"col-md-4\">-->\n" +
    "              <!--<canvas id=\"area\" class=\"chart chart-radar\" data=\"data.radarData\" labels=\"data.radarLabels\"></canvas>-->\n" +
    "            <!--</div>-->\n" +
    "\n" +
    "          </div>\n" +
    "\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a target=\"_blank\" href=\"https://github.com/jtblin/angular-chart.js\">https://github.com/jtblin/angular-chart.js</a>\n" +
    "          <br/>\n" +
    "          <a target=\"_blank\" href=\"http://www.chartjs.org/docs/#getting-started-include-chart.js\">http://www.chartjs.org/docs/#getting-started-include-chart.js</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "\n" +
    "      <tr>\n" +
    "        <td>表格：</td>\n" +
    "        <td>\n" +
    "          <table class=\"table table-hover table-condensed\">\n" +
    "            <thead><tr><th width=\"25%\">编号</th><th width=\"25%\">账号</th><th width=\"25%\">邮箱</th><th width=\"25%\">操作</th></tr></thead>\n" +
    "            <tbody>\n" +
    "            <tr ng-repeat=\"item in data.table.items\">\n" +
    "              <td>{{item.id}}</td>\n" +
    "              <td>{{item.name}}</td>\n" +
    "              <td>{{item.email}}</td>\n" +
    "              <td>\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-xs pull-left\" title=\"编辑\"><i class=\"fa fa-edit\"></i> 编辑</button>\n" +
    "                <button type=\"button\" class=\"btn btn-link btn-xs pull-left\" title=\"查看\"><i class=\"fa fa-eye\"></i> 查看</button>\n" +
    "              </td>\n" +
    "            </tr>\n" +
    "            </tbody>\n" +
    "          </table>\n" +
    "          <div class=\"pull-right\">\n" +
    "            <div class=\"text-right text-muted\">\n" +
    "              <small>共{{data.table.total}}条记录，每页{{data.table.pageSize}}条</small>\n" +
    "              <button type=\"button\" class=\"btn btn-link btn-xs\" ng-click=\"pageChanged()\" title=\"刷新列表\"><i class=\"glyphicon glyphicon-repeat text-primary\"></i></button>\n" +
    "            </div>\n" +
    "            <pagination ng-change=\"pageChanged()\" total-items=\"data.table.total\" items-per-page=\"data.table.pageSize\" ng-model=\"data.table.pageIndex\"\n" +
    "                        rotate=\"false\" max-size=\"15\" boundary-links=\"true\" class=\"pagination-sm\" previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\" first-text=\"&laquo;\" last-text=\"&raquo;\"></pagination>\n" +
    "          </div>\n" +
    "        </td>\n" +
    "        <td>\n" +
    "          <a href=\"http://angular-ui.github.io/bootstrap/#/pagination\" target=\"_blank\">http://angular-ui.github.io/bootstrap/#/pagination</a>\n" +
    "        </td>\n" +
    "      </tr>\n" +
    "\n" +
    "      </tbody>\n" +
    "    </table>\n" +
    "\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("partials/home/modal.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/home/modal.html",
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"cancel()\">&times;</button>\n" +
    "  <h3 class=\"modal-title\">我是一个测试对话框哦</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "  <form class=\"form-horizontal\" role=\"form\" name=\"userAddOrEdit\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <label class=\"col-sm-4 control-label\">今天天气</label>\n" +
    "      <div class=\"col-sm-8 form-control-static\">\n" +
    "        很不错！\n" +
    "      </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <p class=\"col-sm-4 col-sm-offset-4 text-muted\">My Scope: {{data}}</p>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"ok()\">确定</button>\n" +
    "  <button class=\"btn btn-default\" ng-click=\"cancel()\">取消</button>\n" +
    "</div>");
}]);

angular.module("partials/manager/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/manager/index.html",
    "<h1 class=\"page-title\">管理</h1>");
}]);

angular.module("partials/manager/priv.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/manager/priv.html",
    "<h1 class=\"page-title\">权限管理</h1>");
}]);

angular.module("partials/manager/task.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/manager/task.html",
    "<h1 class=\"page-title\">任务管理</h1>");
}]);

angular.module("partials/manager/user.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/manager/user.html",
    "<h1 class=\"page-title\">用户管理</h1>");
}]);

angular.module("partials/stat/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/stat/index.html",
    "<h1 class=\"page-title\">数据统计</h1>");
}]);

angular.module("partials/system/index.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/system/index.html",
    "<h1 class=\"page-title\">我的系统</h1>");
}]);
