module.exports = function(grunt) {
  grunt.initConfig({
    sass : {
      dist: {
				options: {
					style: 'expanded'
				}, // options
				files : [{
					src: 'sass/style.scss',
					dest: 'style.css'
				}] // files
      } // sass dist
    },// sass

		watch: {
			options: {
				spawn: false,
				livereload: true
			}, //options
			scripts: {
				files: ['**/*.php',
							'js/**/*.js',
							'sass/**/*.scss'],
				tasks: ['sass']
			} //scripts
    } // :watch:
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass','watch']);
};
