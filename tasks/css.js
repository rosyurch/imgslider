'use strict'

const gulp = require('gulp');
const less = require('gulp-less');
const sass = require('gulp-sass');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const merge = require('merge-stream');
const rename = require('gulp-rename');

const lessSrc = './src/**/*.less';
const sassSrc = './src/**/*.{sass,scss}';
const stylSrc = './src/**/*.styl';
const cssSrc = './src/**/*.css';
const postcssSrc = './src/**/*.pcss';
const dest = './dist/';

sass.compiler = require('node-sass');

module.exports = function css() {
    let lessStream = gulp.src(lessSrc)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('less.css'));

    let sassStream = gulp.src(sassSrc)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('sass.css'));

    let stylStream = gulp.src(stylSrc)
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(concat('styl.css'));

    let cssSteam = gulp.src(cssSrc)
    .pipe(sourcemaps.init())
    .pipe(concat('css-styles.css'));

    let postcssStream = gulp.src(postcssSrc)
    .pipe(sourcemaps.init())
    .pipe(postcss());

    let mergedStream = merge(lessStream, sassStream, stylStream, cssSteam, postcssStream)
        .pipe(concat('styles.css'))
        .pipe(postcss([autoprefixer]))
        .pipe(gulp.dest(dest))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(postcss([cssnano]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));

    return mergedStream;
}