const {src, dest} = require('gulp');
const {dist} = require('./helpers/folders');

module.exports = async() => src('node_modules/@greenminds/nf-dev-server/example/favicon.ico')
  .pipe(dest(dist));
