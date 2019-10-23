const {src, dest} = require('gulp');
const toJSON = require('gulp-js-to-json');
const {json} = require('./helpers/folders');

module.exports = async() => {
  src('node_modules/@greenminds/nf-dev-server/server/lib/data.js', {read: false})
    .pipe(toJSON({
      stringify:{
        space: '\t',
      },
    }))
    .pipe(dest(`${json}/core`));
};
