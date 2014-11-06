var gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('styles', function(){
    gulp.src(['css/website.less'])
        .pipe(less())
        .pipe(gulp.dest('css/'));
});
