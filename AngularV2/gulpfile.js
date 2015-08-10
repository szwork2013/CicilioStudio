/**
 * Created by Lance on 8/9/2015.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');

var paths = {
    sass: ['./webapp/sass/*.scss'],
    images: ['./webapp/img/**/*.*'],
    index: ['./webapp/index.html'],
    dep: ['./webapp/dependencies/**'],
    angular: ['./webapp/angular/*.*']
};

gulp.task('clean', function(cb) {
    del(['target'], cb);
});

gulp.task('angular', function() {
    gulp.src(paths.angular)
        .pipe(gulp.dest('./target/angular'));
});

gulp.task('dep', function() {
    gulp.src(paths.dep)
        .pipe(gulp.dest('./target/dependencies'));
});

// Compile SCSS to CSS
gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths : [paths.sass]
        }))
        .pipe(gulp.dest('./target/css'));
});

gulp.task('index', function() {
    gulp.src(paths.index)
        .pipe(gulp.dest('./target'));
});

// Copy all static img
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 2}))
        .pipe(gulp.dest('target/img'));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.index, ['index']);
    gulp.watch(paths.dep, ['dep']);
    gulp.watch(paths.angular, ['angular']);
});

gulp.task('default', ['watch', 'sass', 'images', 'index', 'dep', 'angular']);