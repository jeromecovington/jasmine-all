module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            my_target: {
                files: {
                    'dist/jasmine-all.js': [
                        'lib/jasmine-css.js',
                        'lib/jasmine.js',
                        'lib/jasmine-html.js',
                        'lib/boot.js'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};