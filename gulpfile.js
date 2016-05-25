/**
 * Created by Lance on 8/9/2015.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var del = require('del');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var ngAnnotate = require('gulp-ng-annotate');

var paths = {
    sass: ['./webapp/assets/sass/*.scss'],
    sass_partials: ['./webapp/assets/sass/partials/*.scss'],
    images: ['./webapp/assets/images/**'],
    views: ['./webapp/views/*.html'],
    js: ['./webapp/assets/js/**'],
    tests: ['./webapp/tests/**'],
    data: ['./webapp/assets/data/**'],
    music: ['./webapp/assets/music/**'],
    main: ['./webapp/*.*'],
    dep: ['./webapp/dependencies/**'],
    angular: {
        app: './webapp/angular/app.js',
        routing: './webapp/angular/routing.js',
        controllers: './webapp/angular/controllers/**',
        directives: './webapp/angular/directives/**',
        services: './webapp/angular/services/**'
    }
};

gulp.task('clean', function(cb) {
    del(['target'], cb);
});

gulp.task('angular', function() {
    gulp.src([paths.angular.app, paths.angular.routing,
        paths.angular.services, paths.angular.controllers,
        paths.angular.directives
        ])
	      .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['es2015']
        }))
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

//Compiles es6 -> es5
gulp.task('js', function() {
    gulp.src(paths.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./target/assets/js'));
});

gulp.task('data', function() {
    gulp.src(paths.data)
        .pipe(gulp.dest('./target/assets/data'));
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

gulp.task('music', function() {
    gulp.src(paths.music)
        .pipe(gulp.dest('./target/assets/music'));
});

// Copy all static img
gulp.task('images', function() {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 2}))
        .pipe(gulp.dest('target/assets/images'));
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
    gulp.watch(paths.sass_partials, ['sass']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.music, ['music']);
    gulp.watch(paths.main, ['main']);
    gulp.watch(paths.dep, ['dep']);
    gulp.watch(paths.angular.app, ['angular']);
    gulp.watch(paths.angular.routing, ['angular']);
    gulp.watch(paths.angular.controllers, ['angular']);
    gulp.watch(paths.angular.directives, ['angular']);
    gulp.watch(paths.angular.services, ['angular']);
    gulp.watch(paths.views, ['views']);
    gulp.watch(paths.js, ['js']);
    gulp.watch(paths.data, ['data']);
    gulp.watch(paths.tests, ['test']);
});

gulp.task('default', ['watch', 'music', 'views', 'sass', 'images', 'main', 'angular', 'js', 'data']);


//Testing Build tasks

gulp.task('test', function(){
    gulp.src(paths.tests)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('target/tests'));
});