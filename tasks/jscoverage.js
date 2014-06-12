"use strict";

module.exports = function(grunt) {
    grunt.registerTask("jscoverage", "Grunt task for jscoverage; which will parse your source code and generate an instrumented version allowing testing tools to generate code coverage reports", function() {

        var options = this.options();

        var jscoverage = require('jscoverage');
        var source = options.inputDirectory;
        var dest = options.outputDirectory;
        var exclude = options.exclude;

        if (!source) {
            grunt.log.error('Source is required');
        }

        if (!dest) {
            if (/\.\w+$/.test(source)) {
                dest = source.replace(/(\.\w+)$/, '-cov$1');
            } else {
                dest = source + '-cov';
            }
        }

        jscoverage.processFile(source, dest, exclude, {});
    });
};
