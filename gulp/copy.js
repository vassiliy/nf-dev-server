const {src, dest} = require('gulp');
const {project, dist, mediaFiles} = require('./helpers/folders');

module.exports = async() => src(mediaFiles, {base: project, allowEmpty: true})
  .pipe(dest(dist));
