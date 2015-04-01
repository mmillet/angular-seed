/**
 * Created by chenzhengguo on 2015/4/1.
 */
var sh = require('execSync');
module.exports = function(grunt) {
  grunt.registerTask('run-server', '启动服务...', function(port) {
    port = port || 8080; //默认端口8080
    sh.run("supervisor -w bin\\. -e js,json,html -p " + port + " bin\\dev.js");
  });
};