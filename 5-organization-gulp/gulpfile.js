var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');

gulp.task('default', function() {
  return gulp.src('src/**') //load all files
    .pipe(react())          //convert
    .pipe(concat('application.js'))
    .pipe(gulp.dest('./'))  //save in current project directory
})
