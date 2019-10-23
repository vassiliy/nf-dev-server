const {src, dest} = require('gulp');
const {project, dist} = require('./helpers/folders');

const projectRoot = `${project}/root`;

module.exports = async() => src(`${projectRoot}/**/*`, {base: projectRoot, allowEmpty: true})
  .pipe(dest(dist));
