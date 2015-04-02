/**
 * Created by chenzhengguo on 2015/4/1.
 */
var sh = require('execSync');
module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),

  grunt.initConfig({

    html2js: {
      main: {
        src: ['src/partials/**/*.html'],
        dest: 'src/js/templates.js'
      }
    },

    //自动做html转js，开发时需要执行
    watch: {
      scripts: {
        files: 'src/partials/**/*.html',
        tasks: ['html2js']
      }
    }
  });


  // 加载提供"uglify"任务的插件
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.registerTask('run-server', '启动服务...', function(port) {
    port = port || 8080; //默认端口8080
    console.log(port);
    sh.run("supervisor -w bin\\. -e js,json,html -- bin\\dev.js -p " + port);
  });
};

