var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var sass = require('gulp-sass');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('styles', function() {
    gulp.src('src/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat("all.css"))
        .pipe(gulp.dest('build'));
});

gulp.task('watch-code', function() {
    gulp.watch('src/**/*.jsx', ['code']);
});

gulp.task('watch-styles', function() {
    gulp.watch('src/**/*.scss', ['styles']);
});

gulp.task('code', function () {
    browserify({
        entries: 'src/index.jsx',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('all.js'))
    .pipe(gulp.dest('build'));
});


gulp.task('default', ['code', 'styles', 'watch-code', 'watch-styles']);