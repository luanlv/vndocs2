/*jshint node:true*/
module.exports = function(grunt) {

"use strict";

var banner,
	umdStart,
	umdMiddle,
	umdEnd,
	umdStandardDefine,
	umdAdditionalDefine,
	umdLocalizationDefine;

banner = "/*!\n" +
	" * jQuery Validation Plugin v<%= pkg.version %>\n" +
	" *\n" +
	" * <%= pkg.homepage %>\n" +
	" *\n" +
	" * Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
	" * Released under the <%= _.pluck(pkg.licenses, 'type').join(', ') %> license\n" +
	" */\n";

// define UMD wrapper variables

umdStart = "(function( factory ) {\n" +
	"\tif ( typeof define === \"function\" && define.amd ) {\n";

umdMiddle = "\t***REMOVED*** else {\n" +
	"\t\tfactory( jQuery );\n" +
	"\t***REMOVED***\n" +
	"***REMOVED***(function( $ ) {\n\n";

umdEnd = "\n***REMOVED***));";

umdStandardDefine = "\t\tdefine( [\"jquery\"], factory );\n";
umdAdditionalDefine = "\t\tdefine( [\"jquery\", \"./jquery.validate\"], factory );\n";
umdLocalizationDefine = "\t\tdefine( [\"jquery\", \"../jquery.validate\"], factory );\n";

grunt.initConfig({
	pkg: grunt.file.readJSON("package.json"),
	concat: {
		// used to copy to dist folder
		dist: {
			options: {
				banner: banner +
					umdStart +
					umdStandardDefine +
					umdMiddle,
				footer: umdEnd
			***REMOVED***,
			files: {
				"dist/jquery.validate.js": [ "src/core.js", "src/*.js" ]
			***REMOVED***
		***REMOVED***,
		extra: {
			options: {
				banner: banner +
					umdStart +
					umdAdditionalDefine +
					umdMiddle,
				footer: umdEnd
			***REMOVED***,
			files: {
				"dist/additional-methods.js": [ "src/additional/additional.js", "src/additional/*.js" ]
			***REMOVED***
		***REMOVED***
	***REMOVED***,
	uglify: {
		options: {
			preserveComments: false,
			banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " +
				"<%= grunt.template.today('m/d/yyyy') %>\n" +
				" * <%= pkg.homepage %>\n" +
				" * Copyright (c) <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>;" +
				" Licensed <%= _.pluck(pkg.licenses, 'type').join(', ') %> */\n"
		***REMOVED***,
		dist: {
			files: {
				"dist/additional-methods.min.js": "dist/additional-methods.js",
				"dist/jquery.validate.min.js": "dist/jquery.validate.js"
			***REMOVED***
		***REMOVED***,
		all: {
			expand: true,
			cwd: "dist/localization",
			src: "**/*.js",
			dest: "dist/localization",
			ext: ".min.js"
		***REMOVED***
	***REMOVED***,
	compress: {
		dist: {
			options: {
				mode: "zip",
				level: 1,
				archive: "dist/<%= pkg.name %>-<%= pkg.version %>.zip",
				pretty: true
			***REMOVED***,
			src: [
				"changelog.txt",
				"demo/**/*.*",
				"dist/**/*.js",
				"Gruntfile.js",
				"lib/**/*.*",
				"package.json",
				"README.md",
				"src/**/*.*",
				"test/**/*.*"
			]
		***REMOVED***
	***REMOVED***,
	qunit: {
		files: "test/index.html"
	***REMOVED***,
	jshint: {
		options: {
			jshintrc: true
		***REMOVED***,
		core: {
			src: "src/**/*.js"
		***REMOVED***,
		test: {
			src: "test/*.js"
		***REMOVED***,
		grunt: {
			src: "Gruntfile.js"
		***REMOVED***
	***REMOVED***,
	watch: {
		options: {
			atBegin: true
		***REMOVED***,
		src: {
			files: "<%= jshint.core.src %>",
			tasks: [
				"concat"
			]
		***REMOVED***
	***REMOVED***,
	jscs: {
		all: [ "<%= jshint.core.src %>", "<%= jshint.test.src %>", "<%= jshint.grunt.src %>" ]
	***REMOVED***,
	copy: {
		dist: {
			options: {
				// append UMD wrapper
				process: function( content ) {
					return umdStart + umdLocalizationDefine + umdMiddle + content + umdEnd;
				***REMOVED***
			***REMOVED***,
			src: "src/localization/*",
			dest: "dist/localization",
			expand: true,
			flatten: true,
			filter: "isFile"
		***REMOVED***
	***REMOVED***,
	replace: {
		dist: {
			src: "dist/**/*.min.js",
			overwrite: true,
			replacements: [
				{
					from: "./jquery.validate",
					to: "./jquery.validate.min"
				***REMOVED***
			]
		***REMOVED***
	***REMOVED***
***REMOVED***);

grunt.loadNpmTasks("grunt-contrib-jshint");
grunt.loadNpmTasks("grunt-contrib-qunit");
grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-concat");
grunt.loadNpmTasks("grunt-contrib-compress");
grunt.loadNpmTasks("grunt-contrib-watch");
grunt.loadNpmTasks("grunt-jscs");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-text-replace");

grunt.registerTask("default", [ "concat", "copy", "jscs", "jshint", "qunit" ]);
grunt.registerTask("release", [ "default", "uglify", "replace", "compress" ]);
grunt.registerTask("start", [ "concat", "watch" ]);

***REMOVED***;
