var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task('transpile', function () {
    return gulp.src('src/*.jsx')
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat("all.js"))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('src/*.jsx', ['default']);
});


gulp.task('default', ['transpile', 'watch']);