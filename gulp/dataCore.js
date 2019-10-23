const {src, dest} = require('gulp');
const toJSON = require('gulp-js-to-json');

const {
  all,
  jsonCore,
  markupDataCore,
} = require('./helpers/folders');

module.exports = async() => {
  src(all(markupDataCore, 'js'), {read: false})
    .pipe(toJSON({
      stringify:{
        space: '\t',
      },
    }))
    .pipe(dest(jsonCore));
};
