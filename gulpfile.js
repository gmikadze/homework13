'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style/main.css'));
});
 
gulp.task('watch', function () {
  gulp.watch('styles/*.scss', gulp.parallel('sass'));
});