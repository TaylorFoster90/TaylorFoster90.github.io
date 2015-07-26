module.exports = function (grunt) {
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  less: {
      production:{
        src: 'less/main.less',
        dest: 'css/main.min.css',
        options: {
          cleancss: true,
          compress: true
        }
      }
  },
  watch: {
    less: {
      files: ['less/*.less'],
      tasks: ['less:production']
    }
  }
});
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['less']);
}
