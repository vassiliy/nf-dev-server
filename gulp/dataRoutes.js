const {src, dest} = require('gulp');
const toJSON = require('gulp-js-to-json');
const {
  all,
  jsonRoutes,
  markupData,
  markupDataCore,
  markupDataGenerators,
} = require('./helpers/folders');

const source = [
  all(markupData, 'js'),
  `!${all(markupDataCore)}`,
  `!${all(markupDataGenerators)}`,
];

module.exports = async() => {
  src(source, {read: false})
    .pipe(toJSON({
      stringify:{
        space: '\t',
      },
    }))
    .pipe(dest(jsonRoutes));
};
