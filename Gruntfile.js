/**
 * Created by chenzhengguo on 2015/4/1.
 */
var sh = require('execSync');
module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),

  grunt.initConfig({

    requirejs: {
      main: {
        options: {
          name: "main",
          baseUrl: "src/js",
          mainConfigFile: "src/js/main.js",
          out: "dist/js/app.js",
          useStrict: false,
          //wrapShim: true,
          optimize: "uglify2",
          preserveLicenseComments: false
        }
      }
    },

    targethtml: {
      main: {
        options: {
          curlyTags: {
            rlsdate: '<%= grunt.template.today("yyyymmdd") %>'
          }
        },
        files: {
          'dist/index.html': 'src/index.html'
        }
      }
    },


    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            cwd: 'src/css/lib/fontawesome/fonts/',
            src: '**',
            dest: 'dist/fonts/'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'src/iejs/',
            src: '**',
            dest: 'dist/iejs/'
          },
          {
            src: 'src/js/vendor/requirejs/require.js',
            dest: 'dist/js/require.js'
          },
          {
            src: 'src/favicon.ico',
            dest: 'dist/favicon.ico'
          },
          {
            expand: true,
            flatten: true,
            cwd: 'src/img/',
            src: '**',
            dest: 'dist/img/'
          }
        ]
      }
    },

    cssmin: {
      main: {
        files: {
          'dist/css/all.min.css': [
            "src/css/lib/bootstrap/bootstrap.css",
            "src/css/lib/bootstrap/theme.css",
            "src/css/lib/fontawesome/css/font-awesome.min.css",
            "src/js/vendor/angular-select/select.min.css",
            "src/js/vendor/angular-ui-tree/angular-ui-tree.min.css",
            "src/js/vendor/angular-chart/angular-chart.css",
            "src/css/app.css"
          ]
        }
      }
    },

    html2js: {
      main: {
        src: ['src/partials/**/*.html'],
        dest: 'src/js/templates.js'
      }
    },

    //自动做html转js，开发时需要执行
    watch: {
      main: {
        files: 'src/partials/**/*.html',
        tasks: ['html2js']
      }
    },

    uglify: {
      main: {
        options: {
          banner: '/*!<%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
        },
        build: {
          src: 'dist/js/app.js',
          dest: 'dist/js/app.js'
        }
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

  grunt.registerTask('default', ['html2js:main', 'requirejs:main', 'cssmin:main', 'copy:main', 'targethtml:main']);
};

