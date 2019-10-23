const {src, dest} = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const {project, dist} = require('./helpers/folders');

module.exports = async() => {
  src(`${project}/sass/*.scss`)
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(dest(`${dist}/css`));
};
