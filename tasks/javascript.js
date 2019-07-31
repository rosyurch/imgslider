'use strict'

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const terser = require('gulp-terser');

const src = './src/**/*.js';
const dest = './dist/';

module.exports = function javascript() {
    return gulp.src(src)
        .pipe(sourcemaps.init())
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(dest))
        .pipe(terser())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest));
}