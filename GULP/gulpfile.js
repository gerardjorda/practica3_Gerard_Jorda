var gulp = require('gulp');


//JS
var javascriptObfuscator = require('gulp-javascript-obfuscator');

gulp.task('obfuscate', () => {
    return gulp.src('1.js')
        .pipe(javascriptObfuscator())
        .pipe(gulp.dest('dist'));
});


//CSS
var cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
    return gulp.src('1.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
});


//HTML
var htmlmin = require('gulp-html-minifier');

gulp.task('minify', function() {
    gulp.src('main.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
});