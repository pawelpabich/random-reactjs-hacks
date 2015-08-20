var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var sass = require('gulp-sass');

gulp.task('code', function () {
    return gulp.src('src/**/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('build'));
});

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


gulp.task('default', ['code', 'styles', 'watch-code', 'watch-styles']);