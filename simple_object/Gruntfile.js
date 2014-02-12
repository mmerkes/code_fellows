/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    simplemocha: {
      options: {
        timeout: 3000,
        ignoreLeaks: false,
        reporter: 'tap'
      },

      all: { src: ['tests/**/*.js'] }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        globals: {
          module: true,
          console: true
        }
      },
      files: ['Gruntfile.js', 'test/**/*.js', 'lib/**/*.js']
    }
  });

  // For this to work, you need to have run `npm install grunt-simple-mocha`
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Add a default task. This is optional, of course :)
  grunt.registerTask('default', ['simplemocha', 'jshint']);

};
