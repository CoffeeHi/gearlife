/**
 * Created by Administrator on 2016/8/4 0004.
 */
module.exports = function(grunt) {
    var sassStyle = 'expanded';
    // Project configuration.
    grunt.initConfig(
        {
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'js/index.js',
                dest: 'build/<%= pkg.name %>_index.min.js'
            }
        }
    },
        {
            pkg: grunt.file.readJSON('package.json'),
            sass: {
                output : {
                    options: {
                        style: sassStyle
                    },
                    files: {
                        './style.css': './scss/style.scss'
                    }
                }
            }
        }
    );

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-sass');



    // Default task(s).
    grunt.registerTask('default', ['uglify']);

    grunt.registerTask('outputcss',['sass']);
    //grunt.registerTask('default');
};