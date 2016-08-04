/**
 * Created by 陈祥 on 2016/8/4.
 */
module.exports = function(grunt) {
    var sassStyle = 'expanded';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'global.js',
                dest: 'build/<%= pkg.name %>_global.min.js'
            }
        },
        sass: {
            output : {
                options: {
                    style: sassStyle
                },
                files: {
                    './style.css': './scss/style.scss'
                }
            }
        },
		concat: {
			options: {
				separator: ''
			},
			dist: {
				src: ['./js/test1.js', './js/test2.js'],
				dest: './global.js'
			}
		},
		jshint: {
			all: ['./js/test*.js']
		},
        watch: {
            scripts: {
                files: ['./src/plugin.js','./src/plugin2.js'],
                tasks: ['concat','jshint','uglify']
            },
            sass: {
                files: ['./scss/style.scss'],
                tasks: ['sass']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    'index.html',
                    'style.css',
                    'js/global.min.js'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
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

   // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.loadNpmTasks('grunt-contrib-concat');
 
    grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('ug', ['uglify']);
	grunt.registerTask('concatjs',['concat'])
    grunt.registerTask('outputcss',['sass']);
    grunt.registerTask('hint',['jshint']);
	grunt.registerTask('compressjs',['jshint','concat','uglify']);

    grunt.registerTask('default');
};