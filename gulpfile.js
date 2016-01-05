/**
 * Created by Lance on 8/9/2015.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');
var concat = require('gulp-concat');

var paths = {
    sass: ['./webapp/assets/sass/*.scss'],
    sass_partials: ['./webapp/assets/sass/partials/*.scss'],
    images: ['./webapp/assets/img/**'],
    views: ['./webapp/views/*.html'],
    js: ['./webapp/assets/js/**'],
    main: ['./webapp/*.*'],
    dep: ['./webapp/dependencies/**'],
    angular: ['./webapp/angular'],
    angularDir: ['./webapp/angular/**/*.*']
};

gulp.task('clean', function(cb) {
    del(['target'], cb);
});

gulp.task('angular', function() {
    gulp.src([paths.angular + "/app.js",paths.angular + "/controller/*.js",
        paths.angular + "/directives/*.js"])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./target/angular'));

    gulp.src([paths.angular + "/cs-app.html"])
        .pipe(gulp.dest('./target/angular'));
    //
    //
    //gulp.src(paths.angular)
    //    .pipe(gulp.dest('./target/angular'));
});

gulp.task('views', function() {
    gulp.src(paths.views)
        .pipe(gulp.dest('./target/views'));
});

gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(gulp.dest('./target/assets/js'));
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
        .pipe(gulp.dest('./target/assets/css'));

    //Not working
    gulp.src(paths.sass_partials)
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths : [paths.sass_partials]
        }))
        .pipe(gulp.dest('./target/assets/css/partials'));
});

gulp.task('main', function() {
    gulp.src(paths.main)
        .pipe(gulp.dest('./target'));
});

// Copy all static img
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 2}))
        .pipe(gulp.dest('target/assets/img'));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.main, ['main']);
    gulp.watch(paths.dep, ['dep']);
    gulp.watch(paths.angular, ['angular']);
    gulp.watch(paths.angularDir, ['angular']);
    gulp.watch(paths.views, ['views']);
    gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'views', 'sass', 'images', 'main', 'angular', 'js']);