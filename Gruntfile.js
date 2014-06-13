module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
            separator: ';'
            },
            dist: {
                src: [
                    'lib/jasmine-css.js',
                    'lib/jasmine.js',
                    'lib/jasmine-html.js',
                    'lib/boot.js'
                ],
                dest: 'dist/jasmine-all.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify']);
};