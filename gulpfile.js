var gulp        = require('gulp')
var sass        = require('gulp-sass')
var sourcemaps  = require('gulp-sourcemaps')

gulp.task('css', () => {
    return gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(sourcemaps.write('../maps/sass'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', () => {
    gulp.watch('src/sass/*.scss', ['css'])
})

gulp.task('default', ['css', 'watch'])
