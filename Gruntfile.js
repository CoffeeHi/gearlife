/**
 * Created by 陈祥 on 2016/8/4.
 */



module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/global.js',
                dest: 'build/<%= pkg.name %>_global.min.js'
            }
        },
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: ['./build/test/test1.js', './build/test/test2.js'],
				dest: './build/global.js'
			}
		},
	/*	jshint: {
			all: ['./js/test*.js']
		},*/
        watch: {
            scripts: {
                files: ['./build/test/test1.js', './build/test/test2.js'],
                tasks: ['concat','uglify']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'build/*',
                    'build/test/*'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                open: {
                    target: 'http://localhost:9001/build/test.html', // target url to open
                    appName: 'open', // name of the app that opens, ie: open, start, xdg-open
                    callback: function() {} // called when the app has opened
                },
                livereload: 35729,//LiveReload的默认端口号，你也可以改成你想要的端口号
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            server: {
                options: {
                    port: 9001,
                    base: './'
                }
            }
        }
    });


    grunt.registerTask('concatjs',['concat']);
    grunt.registerTask('compressjs',['concat','uglify']);
    grunt.registerTask('watchit',['concat','uglify','connect','watch']);
    grunt.registerTask('default');
};