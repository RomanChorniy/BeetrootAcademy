const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyjs');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const image = require('gulp-image');
const del = require('del');
const autoprefixer = require('gulp-autoprefixer');

// Компілятор Sass
gulp.task('sass', async function () {
    return gulp.src('app/scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 5 versions']))
        .pipe(gulp.dest('app/css'));
});

//Зжимання сss
gulp.task('css-min', async () => {
    return gulp.src('app/css/style.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('app/css'));
});

//Упаковка зображень
gulp.task('image', async () => {
    gulp.src('app/img/**/*')
        .pipe(image({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            guetzli: false,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true // defaults to false
        }))
        .pipe(gulp.dest('dist/img'));
});

// Обєднання Js.
gulp.task('scripts', async () => {
    return gulp.src('app/js/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/js'))
});

// Упаковка Js -- не працює!!!!!
gulp.task('uglify', async () => {
    gulp.src('app/js/index.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

// Clear directory dist
gulp.task('clean', async () => {
    return del.sync('dist');
});

gulp.task('watch', () => {
    gulp.watch('app/scss/*.scss', gulp.parallel('sass'));
});

// Збирання папок на продакшин
gulp.task('prebuild', async () => {
    gulp.src(['app/css/*'])
        .pipe(gulp.dest('dist/css'));
    gulp.src('app/fonts/**')
        .pipe(gulp.dest('dist/fonts'));
    gulp.src(['app/libs/jquery/dist/jquery.min.js', 'app/libs/slick.min.js'])
        .pipe(gulp.dest('dist/js'));
    gulp.src('app/svg/*')
        .pipe(gulp.dest('dist/svg'));
    gulp.src('app/favicon.png')
        .pipe(gulp.dest('dist'));
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass', 'image', 'scripts'));