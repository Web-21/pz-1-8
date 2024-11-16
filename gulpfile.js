const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
    return gulp.src('./app/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
    gulp.watch('./app/scss/**/*.scss', gulp.series('sass'));
});
