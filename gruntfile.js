module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files: {
                    'dev/styles/main.css':'source/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css':'source/styles/main.less'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);
}