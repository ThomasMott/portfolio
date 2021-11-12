'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('node-sass'));
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {   
	return gulp.src('./scss/all.css')
		.pipe(sass())
		.pipe(concat("all.css"))
		.pipe(cleanCss("all.css"))
		.pipe(gulp.dest('./css'));
});
